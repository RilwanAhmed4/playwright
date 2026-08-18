import { test, expect } from '@playwright/test'

test("Keyboard action", async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")

    await page.fill('//textarea[@name="text1"]',"playwright")

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')

    await expect(page.locator('//textarea[@name="text2"]')).toHaveValue("playwright")
    
    await page.click('//button[@id="recaptcha"]')

    await page.pause()

})

test("hover", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//button[@class="dropbtn"]').hover()

    await page.pause()
    
})


test("right click", async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    //try for roght clikc 
    //https://vinothqaacademy.com/mouse-event/  
    await page.locator('//span[text()="right click me"]').click({button:"right"})

    await page.pause()
})


test("double click", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.fill('//input[@id="field1"]',"playwright")
    await page.locator('//button[text()="Copy Text"]').dblclick()

    await expect(page.locator('//input[@id="field1"]')).toHaveValue("playwright")
    await page.pause()

})

test("scroll", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //vertical scroll
    await page.mouse.wheel(0,3000)

    await page.pause()

    await page.mouse.wheel(0,-3000)

    await page.pause()

    //horizontal scroll
    //await page.mouse.wheel(3000,0)
    //await page.mouse.wheel(-3000,0)
    
    await page.locator('//div[@id="HTML8"]').scrollIntoViewIfNeeded()

    await page.pause()
})

test.only("drag and drop", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // const source = page.locator('//div[@id="draggable"]')
    // const target = page.locator('//div[@id="droppable"]')
   
    // await source.dragTo(target)
    
    await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))

    await page.pause()


})





