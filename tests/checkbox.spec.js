import {test,expect} from '@playwright/test'

test("Radio button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="female"]').check()

    await expect(page.locator('//input[@id="female"]')).toBeChecked()

    await expect(page.locator('//input[@id="male"]')).not.toBeChecked()
    
    await page.locator('//input[@id="monday"]').check()

    await expect(page.locator('//input[@id="monday"]')).toBeChecked()


})

test("radio & checkbox",async({page})=>{
    await page.goto("https://letcode.in/radio")

    await page.locator('//input[@id="yes"]').check()
    await expect(page.locator('//input[@id="yes"]')).toBeChecked()

    await page.locator('//input[@id="two"]').check()
    await expect(page.locator('//input[@id="two"]')).toBeChecked()

    await page.locator('//input[@id="nobug"]').check()
    await expect(page.locator('//input[@id="nobug"]')).toBeChecked()

    await page.locator('//input[@id="bug"]').check()
    await expect(page.locator('//input[@id="bug"]')).toBeChecked()

    await page.locator('//input[@id="foo"]').check()
    await expect(page.locator('//input[@id="foo"]')).toBeChecked()

    await page.locator('//input[@id="going"]').check() 
    await expect(page.locator('//input[@id="going"]')).toBeChecked()
    await expect(page.locator('//input[@id="maybe"]')).toBeDisabled()

    await page.locator('//input[@type="checkbox"]/following-sibling::span[text()="Remember me"]').check()
    await expect(page.locator('//input[@type="checkbox"]/following-sibling::span[text()="Remember me"]')).toBeChecked()

    await page.locator('//input[@type="checkbox"]/following-sibling::span[text()="I agree to the "]').check()
    await expect(page.locator('//input[@type="checkbox"]/following-sibling::span[text()="I agree to the "]')).toBeChecked()


})

test("checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="monday"]').check()

    await expect(page.locator('//input[@id="monday"]')).toBeChecked()

    //await pagee.waitforTimeout(2000)
    await page.pause()

    await page.locator('//input[@id="monday"]').uncheck()
    
    await expect(page.locator('//input[@id="monday"]')).not.toBeChecked()

    await page.pause()

})

test("multiple checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const locat=['//input[@id="monday"]','//input[@id="wednesday"]','//input[@id="friday"]','//input[@id="sunday"]']
    
    for(let i of locat){
        await page.locator(i).check()
        await expect(page.locator(i)).toBeChecked()
    }
    
    await page.pause()

})


