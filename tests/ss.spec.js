import  {test,expect} from "@playwright/test"

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.screenshot({path:"D:/Playwright/Playwright_june/screenshot/"+"automation.png"})
    //await page.screenshot({path:"D:/Playwright/Playwright_june/screenshot/"+"E2E.png",fullPage:true})
    await page.locator('//div[@id="HTML12"]').screenshot({path:"D:/Playwright/Playwright_june/screenshot/"+"dynamicTable.png"})

})
