import {test,expect} from '@playwright/test'

test("assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")

    await expect(page.locator("//h1[@class='title']")).toBeVisible()
    
    await expect(page.locator('//p[@class="description"]/child::span')).toHaveText("For Selenium, Cypress & Playwright")

    await expect(page.locator('//p[@class="description"]/child::span')).toContainText("Playwright")

    const uname='//input[@id="name"]'

    await expect(page.locator(uname)).toBeEmpty()

    await page.locator(uname).fill("Playwright")

    await expect(page.locator(uname)).toHaveValue("Playwright")

    await expect(page.locator(uname)).toBeEmpty()   
    

})

