# HOM-23 QA 스모크 검증 기준

## 통과 기준

- `pnpm test` 실행 시 `tests/smoke/homepage.spec.ts` 1개 스펙이 통과한다.
- 스펙 내 검증 항목:
  - 홈 진입 시 브랜드 링크/히어로 헤딩 렌더링
  - Footer의 `개인정보처리방침`, `이용약관` 링크 이동 성공
  - 문의 폼(이름/이메일/문의 내용) 입력 후 제출 시 성공 상태 문구 노출

## 로컬 재현 절차

```bash
pnpm test
```

## 실패 시 대응 로그

- Playwright 실패 아티팩트 경로:
  - `test-results/**` (스크린샷/트레이스)
- CI에서는 GitHub Actions `PR Build Check`의 `Smoke test` 스텝 로그와 첨부 아티팩트를 우선 확인한다.
