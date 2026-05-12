# LOV-67 Spec Freeze: LOV-66 요구사항 확정

Related issue: LOV-67 (parent: LOV-66)
Date: 2026-05-07
Owner: Planner

## 1) Problem statement
홈페이지 전반에서 브랜드 표기와 문의 경로가 혼재되어 있어 사용자 신뢰와 운영 일관성이 떨어진다. LOV-66의 요청사항을 구현 가능한 단일 기준으로 고정하지 않으면 FE/QA/마케팅의 완료 정의가 어긋난다. 이번 스펙은 2026-05-08 이전 배포를 위한 최소 변경 집합을 확정한다.

## 2) Goal / Non-goals
Goal:
- 프로덕션 홈페이지의 브랜드 표기를 `Lovizu`로 통일한다.
- 문의 채널을 `help@lovizu.com`으로 고정하고 폼 제출 동선을 제거한다.
- 개인정보취급방침 링크를 `https://lovizu.com/privacy-policy`로 고정한다.
- GitHub Actions 배포 트리거를 `master` push 기준으로 일치시킨다.

Non-goals:
- 신규 백엔드 API 개발.
- 새 랜딩 섹션 추가/리디자인.
- 다국어/CMS/분석 이벤트 체계 확장.

## 3) Target user / scenario
- 타깃: 홈페이지에서 회사 신뢰와 연락 수단을 빠르게 확인하려는 잠재 고객.
- 시나리오: 랜딩 진입 -> 브랜드/서비스 확인 -> 지원 이메일 확인 -> 개인정보취급방침 확인.

## 4) User flow
Happy path:
1. 사용자가 홈페이지에 접속한다.
2. 전 섹션에서 브랜드명이 `Lovizu`로 노출된다.
3. Contact 영역에서 `문의 보내기` 입력/제출 UI 없이 고정 이메일 `help@lovizu.com`을 확인한다.
4. Footer 또는 관련 영역에서 개인정보취급방침 링크를 클릭하면 `https://lovizu.com/privacy-policy`로 이동한다.

Error/edge states:
1. 구 표기(`Lov`)가 잔존하면 QA 실패로 판정한다.
2. 지원 이메일이 `help@lovizu.com`이 아니면 QA 실패로 판정한다.
3. GitHub Actions가 `master` push에서 실행되지 않으면 배포 기준 미충족으로 판정한다.

## 5) Acceptance criteria (QA-checkable)
- [AC-01] `apps/web` 사용자 노출 텍스트 기준 `Lov` 단독 표기 0건, `Lovizu` 표기로 일관화.
- [AC-02] Contact 영역에서 입력 필드/`문의 보내기` CTA가 제거되어 제출 동작이 존재하지 않는다.
- [AC-03] 사용자에게 노출되는 지원 이메일이 모든 위치에서 `help@lovizu.com`으로 동일하다.
- [AC-04] 개인정보취급방침 링크 URL이 `https://lovizu.com/privacy-policy`로 설정되어 실제 이동된다.
- [AC-05] `.github/workflows/deploy.yml`의 배포 트리거가 `master` push 기준으로 설정된다.
- [AC-06] `master` 브랜치 1회 push 시 GitHub Actions 배포 workflow가 실행되고 실패 없이 종료된다.

## 6) Success metric (single metric)
- 프로덕션 홈페이지 정적 결과물에서 `Lov` 단독 표기 탐지 건수 `0`.

## 7) Open questions / assumptions
Assumptions:
- `Lov` -> `Lovizu` 치환은 전면 적용이 맞고, 예외 브랜드 자산은 없다. (User-truth gate: 가정)
- `master`가 실제 배포 기준 브랜치다.

Open questions:
- CEO 확인 필요: 과거 문서/README의 `Lov` 표기까지 이번 범위에 포함할지 여부.

## 8) Scope estimate + cuts
- Estimate: S (FE/QA/마케팅 동기화 포함 0.5~1일)
- If time-compressed, cut order:
1. 마케팅 카피 정교화(문체 튜닝) 컷
2. 부가 섹션 카피 리라이팅 컷
3. 핵심 5개 변경 항목 외 수정 요청 보류

## 9) Domain-lens rationale
- Jobs-to-Be-Done: 사용자의 "이 회사가 누구고 어디로 연락하면 되는가"를 즉시 해결.
- Outcome over output: 기능 추가 대신 "브랜드 표기 불일치 0건"에 집중.
- MVP / smallest testable slice: 표기/연락처/링크/배포트리거의 최소 묶음만 변경.
- Kano: 연락 경로/브랜드 일관성은 must-have, 카피 미세개선은 performance.
- RICE(정성): Reach 중간, Impact 높음, Confidence 높음, Effort 낮음.
- Reversibility: 카피/링크/트리거는 2-way door로 빠른 롤백 가능.
- Scope creep alarm: 본 5개 항목 외 신규 요구는 CEO 재결정 전 보류.
- Critical path: 스펙 고정 -> FE 반영 -> QA 검증 -> 배포 확인.
