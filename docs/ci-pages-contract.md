# GitHub Pages CI Contract

This repository deploys static output to GitHub Pages from the `master` branch using `.github/workflows/deploy.yml`.

## Frontend Build Contract

- Build command: `pnpm --filter @homepage/web build`
- Required output directory: `apps/web/out`
- Required output file: `apps/web/out/index.html`
- Production base path source: `NEXT_PUBLIC_BASE_PATH` (optional; set to blank for custom domain)

## Failure Diagnostics

The workflow fails early if static export artifacts are missing:

- `apps/web/out` must exist
- `apps/web/out/index.html` must exist

When this validation fails, logs clearly indicate whether failure came from:

- dependency/install/build failure
- static export path mismatch
- Pages upload/deploy phase

## Run Observability Artifact (HOM-125)

- 각 GitHub Actions 실행마다 항상 아래 아티팩트가 생성됩니다.
  - Deploy workflow: `run-observability-deploy-build-${{ github.run_id }}`
    - 수집 대상: `qa-artifacts/run-observability/${{ github.run_id }}` 루트
  - PR workflow: `run-observability-pr-build-${{ github.run_id }}`
    - 수집 대상: `qa-artifacts/run-observability/${{ github.run_id }}` 루트
- 공통 저장 파일
  - `meta.json` : 워크플로우/러닝 메타데이터, 상태, 로그 개수, fingerprint 파일 경로
  - `classification.json` : `clean_pass`, `actionable_failure` 분류 및 false positive 위험도
  - `fingerprint.txt` : 각 로그 파일의 해시 요약(무결성 체크용)
  - `step-logs/*.log` : 각 단계 결과 로그(성공·실패 모두 기록)
  - `tail-logs/*.log` : 각 단계 로그 tail 200줄(한줄 요약 조사용)

### 운영 조회 경로

- GitHub UI: Actions > Run 선택 > Artifacts 탭에서 `run-observability-*` 아티팩트를 다운로드
- 이슈/조사자 작업공간: 재현/로컬 실행 시 해당 run_id 기준 `qa-artifacts/run-observability/<run_id>`에 동일 구조로 저장

## Hang / false positive 판별(운영 기준)

- `classification` 값이 `clean_pass`면 런은 정상 완료로 판단
- `classification` 값이 `actionable_failure`인 경우:
  - `falsePositiveRisk: medium` + `staticExportVerified: true`  
    -> 정적 산출물은 만들어졌으므로 **human review 필요** (진짜 정체 가능성 높음)
  - `falsePositiveRisk: low` + `staticExportVerified: false`  
    -> 정적 산출물 실패 또는 조기 단계 오류 가능성 (대체로 실제 hang 아님)
- 조정 기준(운영): 단계별 로그 수집(0~N개)이 0이거나 마지막 `tail-log`가 특정 단계에서 계속 비어 있으면,
  1) 해당 run_id 재실행 우선,
  2) 새 run 의 `meta.json`에서 `failureObserved=true`와 `failureSignalBackedByLogs`를 함께 확인해 hang/외부 의존성 오류를 가른다.
