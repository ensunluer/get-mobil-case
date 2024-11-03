import { test, expect } from '@playwright/test';

test.describe('Product Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display the correct title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Product List');
  });
});
