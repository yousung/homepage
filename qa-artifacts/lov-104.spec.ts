import { test, expect, devices } from 'playwright/test';
import fs from 'fs';

const OUT = '/Users/lovizu/project/homepage/qa-artifacts/lov-104';

for (const mode of [
  { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
  { name: 'mobile', use: { ...devices['iPhone 12'] } },
]) {
  test.describe(mode.name, () => {
    test.use(mode.use as any);
    test(`homepage regression ${mode.name}`, async ({ page }) => {
      fs.mkdirSync(OUT, { recursive: true });
      await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });

      const bodyText = await page.locator('body').innerText();
      expect(/(^|\s)lov(\s|$)/i.test(bodyText)).toBeFalsy();
      expect(bodyText.includes('문의 방법')).toBeFalsy();

      await page.screenshot({ path: `${OUT}/${mode.name}-full.png`, fullPage: true });
      const y0 = await page.evaluate(() => window.scrollY);
      await page.locator('a[href="#contact"]').first().click();
      await page.waitForTimeout(500);
      const state = await page.evaluate(() => ({ hash: window.location.hash, y: window.scrollY }));
      expect(state.hash).toBe('#contact');
      expect(state.y).toBeGreaterThan(y0);
      await page.screenshot({ path: `${OUT}/${mode.name}-contact-anchor.png`, fullPage: false });
    });
  });
}
