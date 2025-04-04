import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  // await page.waitForTimeout(3000);

  await page.hover("text=Account & Lists");
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('youremail@email.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('mypassword');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://www.amazon.in/?ref_=nav_signin');
  // await page.getByRole('link', { name: 'Hello, Kishore Account & Lists' }).click();
  await page.hover("text=Account & Lists");
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();

  await page.waitForTimeout(3000);
});