import { test, expect } from '@grafana/plugin-e2e';

test.describe('Business Suite', () => {
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
     * Should be visible
     */
    await expect(dashboardPage.getPanelById('1').locator).toBeVisible();
  });
});
