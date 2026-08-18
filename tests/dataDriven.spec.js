import { test, expect } from "@playwright/test";
import facebooklogin from '../test-data/loginCred.json'

test("login using xpath",async({page})=>{

  await page.goto("https://www.facebook.com/");

  await page.locator('//input[@id="_R_1h6kqsqppb6amH1_"]').fill(facebooklogin.email);
  await page.locator('//input[@type="password"]').fill(facebooklogin.password);
  await page.locator('//div[@aria-label="Log in"]').click();
 
});