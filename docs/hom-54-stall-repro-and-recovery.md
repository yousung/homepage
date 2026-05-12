# HOM-54: HOM-29 정체 원인 재현 및 복구 우선안

작성일: 2026-05-12
대상 이슈: HOM-54 (parent: HOM-53)

## 성공조건(이번 하트비트)
- 배포/파이프라인/의존성 축에서 실제 정체(실패) 지점을 재현한다.
- 복구 우선안을 우선순위와 함께 남긴다.

## 재현 환경
- repo: `/Users/lovizu/project/homepage`
- branch: `master`
- local node: `v22.22.2`
- local pnpm: `9.15.4`
- repo 요구 버전:
  - `.nvmrc`: `20.19.0`
  - `package.json engines.node`: `20.19.0`
  - `package.json engines.pnpm`: `9.0.0`

## 재현 절차 및 결과
1. `pnpm install --frozen-lockfile`
2. 즉시 실패 (`ERR_PNPM_UNSUPPORTED_ENGINE`)

핵심 오류:
- Expected pnpm: `9.0.0`, Got: `9.15.4`
- Expected node: `20.19.0`, Got: `v22.22.2`

## 원인 후보 분석
1. **의존성/도구 버전 게이트가 과도하게 고정됨 (우선순위 P0)**
- `engines`가 exact 버전(`20.19.0`, `9.0.0`)으로 고정되어 minor/patch 업그레이드 환경에서 설치가 차단된다.
- 실제 정체 지점이 설치 단계(`Install dependencies`)라서, 이후 테스트/빌드/배포까지 진입 불가.

2. **CI와 런타임 정책 불일치 (우선순위 P1)**
- `.github/workflows/*.yml`은 `node-version: 22`를 사용.
- 레포 정책은 `node 20.19.0` 고정.
- 현재 lockfile/환경에 따라 CI에서도 설치 단계 실패 가능성이 높다.

3. **재현성은 높지만 복원 탄력성은 낮음 (우선순위 P2)**
- exact pin은 재현성에 유리하나, 운영 환경 편차를 허용하지 않아 배포 파이프라인 중단 리스크가 커진다.

## 복구 우선안
### 우선안 A (권장, 빠른 복구)
- `engines`를 호환 범위로 완화한다.
  - 예: `node: ">=20 <23"`, `pnpm: ">=9 <10"`
- CI는 그대로 Node 22 유지 가능하나, 팀 표준을 정하려면 `.nvmrc`와 맞춘다.

### 우선안 B (정밀 고정 유지)
- exact pin을 유지하고, 모든 실행 환경을 강제 정렬한다.
  - 로컬/CI 모두 Node 20.19.0 + pnpm 9.0.0 사용
- 비용: 온보딩/운영 편의성 저하, 버전 drift 발생 시 자주 막힘.

### 우선안 C (절충)
- Node는 major 고정(`20.x`), pnpm은 major 고정(`9.x`)으로 완화.
- CI도 동일 major로 통일.

## 즉시 실행 제안
1. 정책 결정: A/B/C 중 선택 (CTO 결정 필요)
2. 선택안 반영 PR 생성
3. 최소 검증
   - `pnpm install --frozen-lockfile`
   - `pnpm test`
   - `pnpm build`
4. `deploy.yml` 수동 실행 또는 `master` push로 Pages 파이프라인 확인

## 참고 파일
- `.nvmrc`
- `package.json`
- `.github/workflows/ci-pr-build.yml`
- `.github/workflows/deploy.yml`
