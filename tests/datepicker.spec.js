import {test,expect} from  '@playwright/test'

// test("Date Pickers",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     //await  page.locator('//input[@id="datepicker"]').fill("12/13/2026")

//     await  page.locator('//input[@id="datepicker"]').click()

//     const monthyear = "December 2022"
//     const date = "13"

//     while(true){
       
//         const month = await page.locator('//div[@class="ui-datepicker-title"]')
//         const dates =await page.locator('/a[@class="ui-state-default ui-state-active"]')

        

//         if (month==monthyear && dates==date){
        
//         await page.locator('//span[@class="ui-icon ui-icon-circle-triangle-w"]').click()
        
//         }
        
//     await page.locator('//a[@class="ui-state-default ui-state-active"]').click()
//     }
    
//     await page.pause()
// })

    //     //div[@class="ui-datepicker-title"]

    //     //span[@class="ui-icon ui-icon-circle-triangle-w"]

    //     //a[@class="ui-state-default ui-state-active"]

    // await page.locator('//input[@id="txtDate"]').



    test("Date Pickers_2",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await  page.locator('//input[@id="datepicker"]').fill("12/13/2026")

    await  page.locator('//input[@id="datepicker"]').click()

    const inputMonth = "December"
    const inputYear="2022"
    const inputDate = "13"

    while(true){
       
        const month = await page.locator('//span[@class="ui-datepicker-month"]').textContent()
        const year =await page.locator('//span[@class="ui-datepicker-year"]').textContent()

        if (month==inputMonth && year==inputYear){
        
            break;
        
        }

        await page.locator('//span[@class="ui-icon ui-icon-circle-triangle-w"]').click()
        
    }

    await page.locator(`//a[text()="${inputDate}"]`).click()
    
    await page.pause()
})