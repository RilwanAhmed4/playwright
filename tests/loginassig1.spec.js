import {test,expect} from '@playwright/test';

test("loginassig1",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[type="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
});

test.only("loginassig1 using xpath",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@type="password"]').fill('admin123');
    await page.locator('//button[@type="submit"]').click();
});
