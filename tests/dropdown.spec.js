//import {test, expect} from '@playwright/test';
const {test, expect} = require('@playwright/test');
const { log } = require('node:console');

test("dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator('//select[@id="country"]').selectOption("India")
    //await page.locator('//select[@id="country"]').selectOption({value: "uk"})
    await page.locator('//select[@id="country"]').selectOption({index:4})
    
    const text=await page.locator('//select[@id="country"]').textContent()
    console.log(text)

    //const countrycount=await page.locator('//select[@id="country"]/option').count()
    //console.log("count",countrycount)

    await page.pause() 
})

test("multi-select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//select[@id="colors"]').selectOption(["red","Green","White"])

    await page.pause()
})


test("assignment mulitple dropdown",async({page})=>{
    await page.goto("https://letcode.in/dropdowns")
    await page.locator('//select[@id="fruits"]').selectOption("Apple")
    await expect(page.locator('//select[@id="fruits"]/parent::div/following-sibling::div/descendant::p')).toHaveText("You have selected Apple")

    await page.locator('//select[@id="superheros"]').selectOption(["Aquaman","Black Panther","Iron Man","Superman","Wolverine"])

    await expect(page.locator('//select[@id="superheros"]/parent::div/following-sibling::div/descendant::p')).
    toHaveText("You have selected Aquaman, Black Panther, Iron Man, Superman, Wolverine")

    await page.locator('//select[@id="lang"]').selectOption({index:4})
    await expect(page.locator('//select[@id="lang"]/parent::div/following-sibling::div/descendant::p')).toHaveText("You have selected C#")

    const lang=await page.locator('//select[@id="lang"]').textContent()
    console.log(lang)
    
    await page.locator('//select[@id="country"]').selectOption({value:"India"})
    await expect(page.locator('//select[@id="country"]/parent::div/following-sibling::div/descendant::p')).toHaveText("Selected Value: India")
    console.log("India")
    
    await page.pause()

})



