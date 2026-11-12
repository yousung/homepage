import { expect, test } from '@playwright/test';

test('홈페이지 렌더링/핵심 링크/연락 섹션 스모크', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Lovizu' }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /비즈니스 성장을 위한/ })).toBeVisible();

  const primaryNav = page.getByRole('navigation', { name: '주요 메뉴' });
  await expect(primaryNav.getByRole('link', { name: '앱 소개' })).toHaveAttribute(
    'href',
    'https://lovizu.tistory.com/pages/주님의교회-YouTube-자동화-앱-thelc-youtube-desktop',
  );
  await expect(primaryNav.getByRole('link', { name: '개인정보' })).toHaveAttribute(
    'href',
    'https://private-document.lovizu.com/',
  );

  await expect(page.getByRole('heading', { level: 3, name: 'thelc-youtube-desktop' })).toBeVisible();
  const thelcPrivacyLink = page.getByRole('article').getByRole('link', { name: '개인정보처리방침' });
  await expect(thelcPrivacyLink).toHaveAttribute('href', 'https://private-document.lovizu.com/');

  await page.getByRole('contentinfo').getByRole('link', { name: '개인정보처리방침' }).click();
  await expect(page).toHaveURL(/\/privacy-policy\/?$/);
  await expect(page.getByRole('heading', { level: 1, name: '개인정보처리방침' })).toBeVisible();
  await expect(page.locator('a[href^="mailto:"]').first()).toBeVisible();

  await page.goto('/');
  await page.getByRole('link', { name: '이용약관' }).click();
  await expect(page).toHaveURL(/\/terms\/?$/);
  await expect(page.getByRole('heading', { name: '이용약관' })).toBeVisible();

  await page.goto('/');
  await page.getByRole('link', { name: '프로젝트 상담하기' }).click();
  await expect(page.locator('#contact')).toBeInViewport();
  await expect(page.getByRole('heading', { name: '프로젝트를 함께 시작해볼까요?' })).toBeVisible();
  await expect(page.locator('#contact a[href^="mailto:"]').first()).toBeVisible();
  await expect(page.getByText('서울특별시, 대한민국')).toBeVisible();
});
