import { test, expect } from '@grafana/plugin-e2e';

test.describe('Business App', () => {
  test('Should display a Canvas Panel', async ({ gotoDashboardPage, dashboardPage, page }) => {
    /**
     * Go To panels dashboard panels.json
     * return dashboardPage
     */
    await gotoDashboardPage({ uid: 'O4tc_E6Gz' });

    /**
     * Await content load
     */
    await page.waitForTimeout(1000);

    /**
     * Find panel by title with data
     */
    const locator = dashboardPage.getPanelByTitle('Business App').locator;

    /**
     * Should be visible
     */
    await expect(locator).toBeVisible();
  });
});
