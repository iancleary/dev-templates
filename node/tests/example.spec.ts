import { test, expect } from '@playwright/test';

test('title page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.

  //not sure if this works, just copied it over and made it a variable
  let pageTitle = 'ExampleTitle'
  await expect(page).toHaveTitle(`/${pageTitle}/`);
});
