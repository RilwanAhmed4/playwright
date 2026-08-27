import {test,expect} from '@playwright/test'

test("alert with OK",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html#google_vignette")

    await page.locator('//a[@href="#OKTab"]').click()

    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        expect(alert.message("I am an alert box!"))

        await alert.accept()
                
    })

    await page.locator('//button[@onclick="alertbox()"]').click()

    await page.pause()

})



test("alert with OK # cancel",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html#google_vignette")

    await page.locator('//a[@href="#CancelTab"]').click()

    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        //await alert.accept()
        await alert.dismiss()
    
                
    })

    await page.locator('//button[@onclick="confirmbox()"]').click()
    //await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Ok")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You Pressed Cancel")
   
    await page.pause()

})



test("alert with textbox",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html#google_vignette")

    await page.locator('//a[@href="#Textbox"]').click()

    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        //await alert.accept("Automation Testing user")
        await alert.dismiss("Automation Testing user")
    
                
    })

    await page.locator('//button[@onclick="promptbox()"]').click()
    //await expect(page.locator('//p[@id="demo1"]')).toHaveText("Hello Automation Testing user How are you today")
   
    await page.pause()

})

