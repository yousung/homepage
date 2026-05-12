import { expect, test } from '@playwright/test';

test('홈페이지 렌더링/핵심 링크/문의 폼 상호작용 스모크', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Lovizu' }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /비즈니스 성장을 위한/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'help@lovizu.com' }).first()).toBeVisible();

  await page.getByRole('contentinfo').getByRole('link', { name: '개인정보처리방침' }).click();
  await expect(page).toHaveURL(/\/privacy-policy\/?$/);
  await expect(page.getByRole('heading', { level: 1, name: '개인정보처리방침' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'help@lovizu.com' })).toBeVisible();

  await page.goto('/');
  await page.getByRole('link', { name: '이용약관' }).click();
  await expect(page).toHaveURL(/\/terms\/?$/);
  await expect(page.getByRole('heading', { name: '이용약관' })).toBeVisible();

  await page.goto('/');
  await page.getByLabel('이름').fill('홍길동');
  await page.getByLabel('이메일').fill('hong@example.com');
  await page.getByLabel('문의 내용').fill('스모크 테스트용 문의입니다.');
  await page.getByRole('button', { name: '문의 보내기' }).click();
  await expect(page.getByRole('status')).toHaveText('문의가 접수되었습니다. 24시간 내로 답변드리겠습니다.');
});
