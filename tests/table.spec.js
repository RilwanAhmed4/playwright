import { test, expect } from '@playwright/test'

test("table", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const column=await page.locator('//table[@id="productTable"]/thead/tr/th')
    const row=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("column count :",await column.count());
    console.log("rows count :",await row.count());

    // // method 1
    // // await page.locator('//table[@id="productTable"]//td[text()="Laptop"]/following-sibling::td/child::input[@type="checkbox"]')

    // // method 2
    // const laptop=await row.filter({
    //     has:page.locator('td'),
    //     hasText:"Laptop"
    // })

    // await laptop.locator('//input[@type="checkbox"]').check()

    // await page.pause()

    //multiple checkbox
    //method 1

    let electronics=["Laptop","Smartwatch","Smartphone"]

    // for(let i of electronics){
    //     await page.locator('//table[@id="productTable"]//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]').check()
    // }

    // await page.pause() 
   //method 1

    // let electronic=["Laptop","Smartwatch","Smartphone"]

    // for(let i of electronic){
    //     await page.locator(`//table[@id="productTable"]//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check()
    // }

    // await page.pause()


    // method 2
    const multiple=await row.filter({
         has:page.locator('td'),
         //hasText:/Laptop|Smartwatch|Smartphone/
    })

    //const pages =await page.locator('//ul[@id="pagination"]').all()

    const pages = await page.locator('//ul[@id="pagination"]/li/child::a').all();

    for (let i = 0; i < pages.length; i++) {
      
    await pages[i].click();
    }

    const arr=await multiple.all()
    

    for(let i of arr){
        await i.locator('//input[@type="checkbox"]').check()
    }

    await page.pause()

})
