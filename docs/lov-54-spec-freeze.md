# LOV-54 Spec Freeze: Homepage MVP

Related issue: LOV-54 (parent: LOV-15)
Date: 2026-05-06
Owner: Planner

## 1) Problem statement
한국어/영문 잠재 고객이 Lov의 서비스 역량을 빠르게 이해하고 문의를 보낼 수 있는 공식 채널이 필요하다. 현재 핵심 리스크는 구현 전에 합의된 품질 기준이 없어 FE/QA/마케팅의 완료 기준이 흔들릴 수 있다는 점이다. 지금 스펙을 고정해 2026-05-08 목표 이전에 배포 가능한 최소 범위를 확정한다.

## 2) Goal / Non-goals
Goal:
- 정적 홈페이지 1개 URL에서 핵심 섹션(소개/서비스/포트폴리오/문의)을 안정적으로 제공한다.
- 문의 폼 제출 시 사용자 로컬 메일 클라이언트가 열리고, 수신 주소가 명확히 노출된다.
- master 푸시 이후 GitHub Pages 반영 성공률을 운영 관점에서 관측 가능하게 만든다.

Non-goals:
- 서버 기반 문의 저장 API 구축 및 운영.
- 인증/회원/대시보드 등 백엔드 기능.
- 다국어, CMS, A/B 테스트, 분석 대시보드 고도화.

## 3) Target user / scenario
- 타깃: Lov 협업을 검토하는 잠재 고객(모바일 우선, 데스크톱 포함).
- 시나리오: 랜딩 페이지 진입 -> 서비스 신뢰 형성 -> 문의 폼 입력 -> 메일 앱 실행 또는 수동 이메일 발송.

## 4) User flow
Happy path:
1. 사용자가 배포 URL에 접속한다.
2. `Hero -> About -> Services -> Portfolio -> Contact` 순으로 섹션이 렌더된다.
3. 사용자가 문의 폼 필수값(이름/이메일/메시지)을 유효하게 입력한다.
4. 제출 시 `mailto:` 링크가 생성되어 기본 메일 앱이 열린다.
5. 폼 성공 상태 메시지가 표시되고 대체 이메일 주소가 노출된다.

Error/edge states:
1. 필수값 누락 또는 이메일 형식 오류 시 필드별 에러 텍스트가 즉시 표시된다.
2. 환경변수 미설정 시 fallback 주소 `hello@example.com`이 사용된다.
3. 존재하지 않는 라우트 접근 시 404 페이지가 렌더되고 배포 사이트가 500 없이 응답한다.

## 5) Acceptance criteria (QA-checkable)
- [AC-01] 배포 URL에서 HTTP 200 응답, 루트 페이지 로드 성공.
- [AC-02] 루트 페이지에서 `Nav`, `Hero`, `About`, `Services`, `Portfolio`, `Contact`, `Footer` 컴포넌트가 시각적으로 노출된다.
- [AC-03] 뷰포트 `390x844`(모바일)와 `1440x900`(데스크톱)에서 수평 스크롤이 생기지 않는다.
- [AC-04] 문의 폼에서 이름/이메일/메시지 공란 제출 시 각 필드 에러 문구가 렌더된다.
- [AC-05] 유효한 값 제출 시 `mailto:` 이동이 발생하고 성공 안내 문구(메일 앱이 열렸습니다...)가 렌더된다.
- [AC-06] `NEXT_PUBLIC_CONTACT_EMAIL` 미설정 환경에서 성공 안내 문구의 메일 주소가 `hello@example.com`으로 표시된다.
- [AC-07] 존재하지 않는 경로(예: `/not-existing`) 접근 시 404 페이지 응답, 치명적 에러 페이지 미노출.
- [AC-08] `master` 브랜치 기준 최근 10회 푸시 중 GitHub Pages 배포 완료율 100% (실패 0회).

## 6) Success metric (single metric)
- Primary metric: `master` 브랜치 푸시 후 5분 이내 GitHub Pages 배포 성공률 100% (rolling 10 runs).

## 7) Architecture sketch
- Frontend: Next.js(App Router) 정적 렌더링 페이지.
- Delivery: GitHub Actions build -> GitHub Pages 정적 호스팅.
- Contact: 브라우저 `mailto:` 링크 기반 전달(서버 저장 없음).

## 8) Risks (3)
1. 사용자의 메일 클라이언트 미설정 환경에서 전송 완료율 저하 가능.
2. GitHub Actions/Pages 외부 장애 시 배포 성공률 지표 변동.
3. 포트폴리오 콘텐츠가 정적 하드코딩일 경우 업데이트 리드타임 증가.

## 9) Assumptions / open questions
Assumptions:
- 초기 MVP에서는 서버 저장형 리드 수집 없이도 사업 검증 가능하다. (User-truth gate: 가정)
- 모바일 퍼스트 레이아웃 품질이 전환률에 중요하다.

Open questions:
- CEO 확인 필요: `mailto` 유지 vs 서버 저장형 문의 전환 우선순위.
- Marketer 확인 필요: 런칭 시점 메시지/CTA 문구 A안 확정.

## 10) Scope estimate + cuts
- Estimate: S (1~2일 구현 + 0.5일 QA)
- If time-compressed, cut order:
1. 포트폴리오 카드 상세 인터랙션 고도화 컷.
2. 애니메이션/시각 효과 고도화 컷.
3. 마케팅 카피 실험 컷.

## 11) Domain-lens rationale
- Jobs-to-Be-Done: "회사 신뢰를 빠르게 확인하고 바로 문의하고 싶다"에 집중.
- Outcome over output: 페이지 수보다 "5분 내 배포 성공률"을 성공 지표로 사용.
- MVP: 서버 없는 문의 경로(mailto)로 최소 검증.
- Kano: 기본 탐색/문의 동선은 must-have, 시각 고도화는 delighter로 후순위.
- RICE(정성): Reach 중간, Impact 중간~높음, Confidence 중간, Effort 낮음 -> 즉시 실행 권장.
- Reversibility: mailto 선택은 2-way door, 추후 API 전환 가능.
- Critical path: 스펙/AC 고정 -> FE 구현 -> QA 검증 -> 배포 확인.
- Scope creep alarm: 비기능 요구(다국어/CMS/API) 추가 시 CEO 재승인 전까지 보류.
