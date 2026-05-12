import { test, expect, devices } from 'playwright/test';
import fs from 'fs';

const baseUrl = 'https://yousung.github.io/homepage/';
const outDir = '/Users/lovizu/project/homepage/qa-artifacts/lov-94';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const targets = [
  { name: 'desktop', viewport: { width: 1440, height: 900 }, isMobile: false },
  { name: 'mobile', ...devices['iPhone 12'] },
];

for (const t of targets) {
  test(`${t.name} e2e checks`, async ({ browser }) => {
    const context = await browser.newContext(t as any);
    const page = await context.newPage();

    const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
    expect(response?.ok()).toBeTruthy();

    await page.screenshot({ path: `${outDir}/${t.name}-first-render.png`, fullPage: true });

    const anchors = [
      { text: '소개', hash: '#about' },
      { text: '서비스', hash: '#services' },
      { text: '포트폴리오', hash: '#portfolio' },
      { text: '연락하기', hash: '#contact' },
    ];

    const result: any = { viewport: t.name, finalUrl: page.url(), anchors: [], mailto: null };

    for (const a of anchors) {
      const link = page.getByRole('link', { name: a.text }).first();
      await expect(link).toBeVisible();
      await link.click();
      await page.waitForTimeout(300);
      const u = new URL(page.url());
      result.anchors.push({ label: a.text, expected: a.hash, actual: u.hash, pass: u.hash === a.hash });
    }

    const mailto = page.locator('a[href^="mailto:"]').first();
    await expect(mailto).toBeVisible();
    const href = await mailto.getAttribute('href');
    result.mailto = { href, pass: !!href?.startsWith('mailto:') };

    await page.screenshot({ path: `${outDir}/${t.name}-post-nav.png`, fullPage: true });
    fs.writeFileSync(`${outDir}/${t.name}-results.json`, JSON.stringify(result, null, 2));

    await context.close();
  });
}
