 import {test,expect} from '@playwright/test';

test("login using css",async({page})=>{

  await page.goto("https://www.facebook.com/");

  await page.locator("#_R_1h6kqsqppb6amH1_").fill('examplet@example.com');
  await page.locator('[type="password"]').fill("Password123");
  await page.locator('[aria-label="Log in"]').click();
})

test("login using built-in locators",async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await expect(page.getByAltText("company-branding")).toBeVisible();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button",{name:'Login'}).click();
});


test("login using xpath",async({page})=>{

  await page.goto("https://www.facebook.com/");

  await page.locator('//input[@id="_R_1h6kqsqppb6amH1_"]').fill('example@example.com');
  await page.locator('//input[@type="password"]').fill("Password123");
  await page.locator('//div[@aria-label="Log in"]').click();
 
});


//input[@class="form-control"][@placeholder="Enter Name"]
//input[@class="form-control" and @placeholder="Enter Name"]
//input[@class="form-control" or @placeholder="Enter Name"]
//input[contains(@placeholder,"Name")]

//span[text()="For Selenium, Cypress & Playwright"]
//span[contains(text(),"Playwright")]
//button[normalize-space(text()="Login")]
// (//input[@class="form-control"])[3]


//font[text()="Log in to Facebook"]
//font[contains(text(),"Log in to Facebook")]


