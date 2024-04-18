import { test, expect } from '@grafana/plugin-e2e';

test.describe('Volkovlabs APP', () => {
  test('Should display a Dynamic Text Panel', async ({ gotoDashboardPage, dashboardPage, page }) => {
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
    await expect(dashboardPage.getPanelByTitle('YouTube').locator).toBeVisible();
    await expect(dashboardPage.getPanelByTitle('Blog').locator).toBeVisible();
  });
});
