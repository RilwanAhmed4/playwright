import { test, expect } from '@playwright/test'
import Sauce from '../pages/sauce'
import creds from '../test-data/sauce.json'

test("login using POM Sauce", async ({ page }) => {

    await page.setViewportSize({ width: 375, height: 667 })

    await page.goto("https://www.saucedemo.com/")

    let sauceLogin = new Sauce(page)

    await sauceLogin.login(creds.name, creds.pass)

    await sauceLogin.addToCart()

    await sauceLogin.checkout()
    
    await sauceLogin.fillPersonalInfo(creds.first, creds.last, creds.postal)
    await sauceLogin.continue()
    await sauceLogin.finish()
    await sauceLogin.backToHome()
    await sauceLogin.logout()
    await page.pause()
    
})