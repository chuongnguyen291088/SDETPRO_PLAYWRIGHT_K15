import test from "@playwright/test";

const pageUrl = 'https://playwright.dev/';

test('The first script', async ({ page }) => {
    await page.goto(pageUrl);
})