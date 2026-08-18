import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('xample@gmail.com');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('passwrod 123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#login_form')).toContainText('Forgotten password?');
  await expect(page.locator('path').nth(5)).toBeVisible();
});