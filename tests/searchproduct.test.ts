import { test, expect } from '@playwright/test';
import { notEqual } from 'assert';
import * as data from "../test-data/test-data.json";

test('Search a Product', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(3000);

  await page.hover("text=Account & Lists");
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('data.aemail');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('data.apassword');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL('https://www.amazon.in/?ref_=nav_signin');
  await page.getByRole('link', { name: 'Hello, Kishore Account & Lists' }).click();


  await page.waitForTimeout(3000);
  const messageInput = page.locator("input#twotabsearchtextbox");
  console.log(await messageInput.getAttribute("placeholder"));
  expect(messageInput).toHaveAttribute("placeholder","Search Amazon.in")
  console.log("Before entering data:" + await messageInput.inputValue());

  //Search
  await messageInput.fill("iphone 16");
  const searchBtn = page.locator("id=nav-search-submit-button");
  await page.waitForTimeout(3000);
  await searchBtn.click();
  await page.waitForTimeout(3000);
  console.log("After entering data:" + await messageInput.inputValue());
  const result = page.locator("text=Results")
  let expectedResult = "Results";

  //checkbox
  await page.waitForTimeout(3000);
  const clickCheckbox = page.locator("#a[aria-label='Apply the filter Apple to narrow results']")
  // await page.waitForTimeout(3000);
  // expect(clickCheckbox).not.toBeChecked();
  await clickCheckbox.click();
  await page.waitForTimeout(3000);
  expect(clickCheckbox).toBeChecked();

});