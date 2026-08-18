import{test,expect} from '@playwright/test'

test("iframe assign1",async({page})=>{
    await page.goto("https://letcode.in/frame")

    const count1=await page.frames()
    console.log("Count :",await count1.length);

    for(let i of count1){
        console.log("Frame URL :",i.url());
    }

    //const frame=await page.frame({name:"firstFr"})
    //const frame=await page.frame({url:"/frameui"})
    const frame=await page.frameLocator('//iframe[@id="firstFr"]')

    await frame.locator('//input[@name="fname"]').fill("Rilwan")

    await frame.locator('//input[@name="lname"]').fill("Ahmed")

    await expect(frame.locator('//p[@class="text-sm font-semibold text-center"]')).toHaveText("You have entered Rilwan Ahmed")
    
    await page.pause()
})






test("iframe assign2",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")

    const count1=await page.frames()
    console.log("Count :",await count1.length);

    for(let i of count1){
        console.log("Frame URL :",i.url());
    }

    //const frame=await page.frame({name:"SingleFrame"})
    //const frame=await page.frame({url:"SingleFrame.html"})
    const frame=await page.frameLocator('//iframe[@id="singleframe"]')

    await frame.locator('//input[@type="text"][1]').fill("Rilwan")

    
    await page.pause()
})


test("nested frame", async ({ page }) => {
    await page.goto("https://letcode.in/frame")
    
    const frame=await page.frameLocator('//iframe[@src="/innerframe"]')
    
    //const child=await frame.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')

    //await child.locator('//input[@type="text"]').fill("Playwright")

    await page.locator('//input[@name="email"]').fill("rilwanahmed4@gmail.com")

    await page.p
    
})


test.only("nested frame assign", async ({ page }) => {
    await page.goto("https://letcode.in/frame")

    const frame=await page.frameLocator('//iframe[@id="firstFr"]')
    
    const child=await frame.frameLocator('//iframe[@src="/innerframe"]')

    await child.locator('//input[@name="email"]').fill("Playwright@gmail.com")

    //await child.locator('//span[@title="Selenium WebDriver Course"]').click()

    await page.pause()
})


