import {test,expect} from '@playwright/test'

//Test case 1: Positive LogIn test
test("Positive LogIn test",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    
    await page.locator()
    await page.locator('[name="username"]').fill('student');
    await page.locator('[type="password"]').fill('Password123');
    await page.locator('//button[@id="submit"]').click();
    
    await expect(page.locator('//h1[@class="post-title"]')).toBeVisible()
    //await expect(page.locator('//p[@class="has-text-align-center wp-block-paragraph"]/child::strong')).toHaveText("Congratulations student. You successfully logged in!")
    await expect(page.locator('//div[@class="post-content"]/child::p/child::strong')).toHaveText("Congratulations student. You successfully logged in!")
    //div[@class="post-content"]/child::p/child::strong
    //await expect(page.locator('//a[@class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]')).toContainText("Log out")
    await expect(page.locator('//div[@class="wp-block-group"]/child::div/child::div/child::a')).toHaveText("Log out")
})

//Test case 2: Negative username test
test("Negative username test",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    
    await page.locator('[name="username"]').fill('incorrectUser');
    await page.locator('[type="password"]').fill('Password123');
    await page.locator('//button[@id="submit"]').click();

    await expect(page.locator('//div[@class="show"]')).toBeVisible()
    await expect(page.locator('//div[@class="show"]')).toHaveText("Your username is invalid!")

})

//Test case 3: Negative password test
test("Negative password test",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    
    await page.locator('[name="username"]').fill('student');
    await page.locator('[type="password"]').fill('incorrectPassword');
    await page.locator('//button[@id="submit"]').click();

    await expect(page.locator('//div[@class="show"]')).toBeVisible()
    await expect(page.locator('//div[@class="show"]')).toHaveText("Your password is invalid!")
})
