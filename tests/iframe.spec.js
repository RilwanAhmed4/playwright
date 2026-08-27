import {test,expect} from '@playwright/test'

test("iframe" ,async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
   
    const count=await page.frames()
    console.log("Count :",await count.length);

    for(let i of count){
        console.log("Frame URL :",i.url());
    }    

    //frame ! name! url!
    //framelocator  !locator or CSS !

    //const frame=await page.frame({name:"iframe-name"})
    const frame=await page.frame({url:"https://legacy.rahulshettyacademy.com/"})
    //const frame=await page.frameLocator('//iframe[@id="courses-iframe"]')
    
    await frame.locator('(//a[text()="Courses"])[1]').click()

    await page.pause()
})



test("nested frame", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.locator('//a[text()="Iframe with in an Iframe"]').click()

    // const frame = await page.frame({ url: "https://demo.automationtesting.in/MultipleFrames.html" })
    // const child = await frame.frame({ url: "https://demo.automationtesting.in/MultipleFrames.html" })

    const frame=await page.frameLocator('//div[@id="Multiple"]/child::iframe')
    
    const child=await frame.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')

    await child.locator('//input[@type="text"]').fill("Playwright")

    await page.pause()
})

