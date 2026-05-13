# HOM-125: 무음 active run 관측성 가이드

작성일: 2026-05-13  
대상: 홈페이지 운영/조사 워크플로우  
근거: `.github/workflows/deploy.yml`, `.github/workflows/ci-pr-build.yml`, `scripts/collect-run-observability.sh`

## 1) 최소 보존 진단 정보

- 각 run 시작 직후(bootstrap 단계) 저장되는 항목
  - `OBS_ROOT` 경로(`qa-artifacts/run-observability/<run_id>`)
  - `meta.json` 생성 시각 (`generatedAt`)
  - step log/ tail log 목록
  - workflow/job 기본 메타(`repo`, `runId`, `sha`, `actor`, `ref`, `status`)
- 장시간 무출력/정체 구간 탐지 보조항목
  - 각 단계별 `*-*.log` 존재 여부
  - `tail-logs` 폴더의 최신 파일 존재 여부
  - `stepLogCount`, `tailLogCount` (meta 하위 필드)

## 2) 조회 경로(조사자가 바로 보는 경로)

1. GitHub Actions 페이지에서 해당 workflow run 선택
2. `Artifacts`에서 아래 중 하나를 받음
   - `run-observability-deploy-build-<run_id>` (deploy push 실행)
   - `run-observability-pr-build-<run_id>` (PR 빌드 실행)
3. 압축 해제 후 `qa-artifacts/run-observability/<run_id>/meta.json`을 최우선 확인
4. `tail-logs/`에서 마지막 타임라인 단계를 순차 확인

## 3) false positive vs 실제 hang 분리 기준

- `meta.classification = clean_pass`  
  -> 재시도 필요 없음(정상 완료)
- `meta.classification = actionable_failure`:
  - `failureSignalBackedByLogs = true`, `falsePositiveRisk = medium`  
    -> 로그 기반으로 사람 검토 필요. 무음으로 보였더라도 실제 원인 존재 가능성 높음
  - `failureSignalBackedByLogs = false`, `staticExportVerified = false`  
    -> 조기 단계 오류(설치/빌드)로 실패했을 가능성이 높음. 진짜 hang 가능성 낮음
- `stepLogCount = 0` 또는 최근 단계의 `tail-logs/*.log`가 모두 비어 있으면  
  1) 동일 커밋/PR로 1회 재실행  
  2) 재실행 후 동일 증상 반복 시 infra/네트워크 계열 hang 후보로 분리

## 4) 다음 조사자에게 남겨야 할 기본 로그 경로 기록 형식

- 본문에는 반드시 `run_id`, `artifact name`, `meta.json 경로`, `classification`을 함께 남긴다.
- 예:  
  - `run_id`: `1234567890`
  - `artifact`: `run-observability-deploy-build-1234567890`
  - `meta`: `qa-artifacts/run-observability/1234567890/meta.json`
