import { test, expect } from '@playwright/test'
import Orange from '../pages/hrm'
import cred from '../test-data/OH.json'

test("login using POM", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let hrmLogin = new Orange(page)

    await hrmLogin.login(cred.name, cred.pass)

    await page.pause()
})

