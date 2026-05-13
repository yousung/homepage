#!/usr/bin/env bash
set -euo pipefail

obs_root="${1:?usage: collect-run-observability.sh <observability-root> [static-export-path]}"
static_export_path="${2:-apps/web/out/index.html}"

logs_dir="$obs_root/step-logs"
tails_dir="$obs_root/tail-logs"
mkdir -p "$logs_dir" "$tails_dir"

shopt -s nullglob
log_files=("$logs_dir"/*.log)
for log_file in "${log_files[@]}"; do
  tail -n 200 "$log_file" > "$tails_dir/$(basename "$log_file")"
done
shopt -u nullglob

fingerprint_file="$obs_root/fingerprint.txt"
: > "$fingerprint_file"
if find "$logs_dir" "$tails_dir" -type f | grep -q .; then
  while IFS= read -r file; do
    if command -v sha256sum >/dev/null 2>&1; then
      sha256sum "$file" >> "$fingerprint_file"
    else
      shasum -a 256 "$file" >> "$fingerprint_file"
    fi
  done < <(find "$logs_dir" "$tails_dir" -type f | sort)
fi

step_log_count="$(find "$logs_dir" -type f | wc -l | tr -d ' ')"
tail_log_count="$(find "$tails_dir" -type f | wc -l | tr -d ' ')"
static_export_verified=false
if [ -f "$static_export_path" ]; then
  static_export_verified=true
fi

OBS_ROOT="$obs_root" \
STATIC_EXPORT_PATH="$static_export_path" \
STEP_LOG_COUNT="$step_log_count" \
TAIL_LOG_COUNT="$tail_log_count" \
STATIC_EXPORT_VERIFIED="$static_export_verified" \
node <<'NODE'
const fs = require('fs');
const path = require('path');

const obsRoot = process.env.OBS_ROOT;
const metaPath = path.join(obsRoot, 'meta.json');
const classificationPath = path.join(obsRoot, 'classification.json');
const logDir = path.join(obsRoot, 'step-logs');
const tailDir = path.join(obsRoot, 'tail-logs');
const listFiles = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((entry) => fs.statSync(path.join(dir, entry)).isFile()).sort()
    : [];
const toBool = (value) => value === 'true';
const jobStatus = process.env.WORKFLOW_JOB_STATUS || 'unknown';
const staticExportVerified = toBool(process.env.STATIC_EXPORT_VERIFIED || 'false');
const failureObserved = jobStatus !== 'success';
const classification = failureObserved ? 'actionable_failure' : 'clean_pass';
const falsePositiveRisk = failureObserved && staticExportVerified ? 'medium' : 'low';
const classificationSummary = {
  classification,
  falsePositiveRisk,
  reason: failureObserved
    ? staticExportVerified
      ? 'failure_with_verified_static_export_requires_human_review'
      : 'failure_backed_by_missing_or_failed_artifacts'
    : 'all_required_steps_completed',
};

const meta = {
  generatedAt: new Date().toISOString(),
  workflow: {
    name: process.env.GITHUB_WORKFLOW || null,
    job: process.env.GITHUB_JOB || null,
    sha: process.env.GITHUB_SHA || null,
    ref: process.env.GITHUB_REF || null,
    runId: process.env.GITHUB_RUN_ID || null,
    runAttempt: process.env.GITHUB_RUN_ATTEMPT || null,
    actor: process.env.GITHUB_ACTOR || null,
    eventName: process.env.GITHUB_EVENT_NAME || null,
    repository: process.env.GITHUB_REPOSITORY || null,
  },
  result: {
    jobStatus,
    classification,
    failureObserved,
  },
  observability: {
    root: obsRoot,
    logFiles: listFiles(logDir),
    tailFiles: listFiles(tailDir),
    stepLogCount: Number(process.env.STEP_LOG_COUNT || '0'),
    tailLogCount: Number(process.env.TAIL_LOG_COUNT || '0'),
    fingerprintFile: 'fingerprint.txt',
    classificationFile: 'classification.json',
  },
  falsePositiveMitigation: {
    artifactUploadAlways: true,
    staticExportPath: process.env.STATIC_EXPORT_PATH || null,
    staticExportVerified,
    failureSignalBackedByLogs: Number(process.env.STEP_LOG_COUNT || '0') > 0,
    requiresHumanReview: failureObserved,
    falsePositiveRisk: classificationSummary.falsePositiveRisk,
  },
};

fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n');
fs.writeFileSync(classificationPath, JSON.stringify(classificationSummary, null, 2) + '\n');
NODE
