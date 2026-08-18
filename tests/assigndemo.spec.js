import {test, expect} from '@playwright/test'

test("assigndemo", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    //login
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
    //add to cart
    await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('//button[@id="add-to-cart-sauce-labs-bike-light"]').click()
    await page.locator('//div[@id="shopping_cart_container"]').click()
    //checkout
    await expect(page.locator('//div[text()="Sauce Labs Backpack"]')).toHaveText("Sauce Labs Backpack")
    await expect(page.locator('//div[text()="Sauce Labs Bike Light"]')).toHaveText("Sauce Labs Bike Light")
    //detail page
    await page.locator('//button[@id="checkout"]').click()
    await page.locator('//input[@id="first-name"]').fill("Rilwan")
    await page.locator('//input[@id="last-name"]').fill("Ahmed")
    await page.locator('//input[@id="postal-code"]').fill("605110")
    await page.locator('//input[@id="continue"]').click()
    //assertion
    await expect(page.locator('//div[@data-test="total-label"]')).toHaveText("Total: $43.18")
    await page.locator('//button[@id="finish"]').click()
    //finish page
    await expect(page.locator('//img[@alt="Pony Express"]')).toBeVisible()
    await expect(page.locator('//h2[@class="complete-header"]')).toHaveText("Thank you for your order!")
    //back to home
    await page.locator('//button[@id="back-to-products"]').click()

    //logout
    await page.locator('//button[@id="react-burger-menu-btn"]').click()
    await page.locator('//a[@id="logout_sidebar_link"]').click()
})



