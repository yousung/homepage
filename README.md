# Lovizu — IT 솔루션 파트너

깊이 있는 IT 솔루션으로 고객의 성장을 함께 그려가는 파트너, Lovizu

## 회사 소개

Lovizu는 개발, UI/UX 디자인, IT 컨설팅을 직접 수행하는 IT 솔루션 팀입니다.
우리는 요구사항을 단순 구현하는 데서 멈추지 않고, 비즈니스 문제를 먼저 파악해 기술적 방향을 제안합니다.
런칭 이후의 운영과 개선까지 함께 책임지는 장기 파트너십을 지향합니다.

## 서비스

- 웹/앱 개발: 비즈니스 목표에 맞는 고성능 웹 서비스와 애플리케이션을 설계·구축합니다.
- UI/UX 디자인: 사용자 경험과 전환을 중심으로, 작동하는 인터페이스를 만듭니다.
- IT 컨설팅 & 디지털 전환: 현재 시스템을 진단하고 단계별 전환 전략을 수립합니다.
- 운영 & 유지보수: 장애 대응, 점검, 보안 업데이트, 성능 개선까지 지속 운영합니다.

## 포트폴리오

- 부동산 따지 — 매물 포털: 전원주택·토지·상가 매물 탐색 서비스
  - https://www.ddaji.com/item
- 신라인터넷면세점: 대규모 트래픽 기반의 공식 온라인 면세 스토어프론트
  - https://www.shilladfs.com/estore/kr/ko/?uiel=Desktop
- Shilla DFS 다국어 스토어프론트: 영어·일본어·중국어 글로벌 쇼핑 경험 제공
  - https://www.shilladfs.com/estore/kr/ja

## 문의

- 이메일: help@lovizu.com
- 위치: 서울특별시, 대한민국

## 개발자용 안내 (For Developers)

- 스택: Nx monorepo — Next.js 정적 사이트
- 필수 버전(major): Node `20.x ~ 22.x`, pnpm `9.x`
- 권장 기준 버전: Node `20.19.0`, pnpm `9.0.0`
- 버전 맞추기

```bash
nvm use
corepack enable
corepack prepare pnpm@9.0.0 --activate
```

- 로컬 실행

```bash
pnpm install
pnpm dev
```

- 개발 서버 기본 포트: 3000
- 환경 변수 설정

```bash
cp .env.example apps/web/.env.local
```

- `NEXT_PUBLIC_CONTACT_EMAIL` 기본값: `help@lovizu.com`
