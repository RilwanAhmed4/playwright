import {test,expect, chromium} from "@playwright/test"

test("tabs handling",async()=>{
    
    const browser=await chromium.launch()
    const context=await browser.newContext();
    const pageOne=await context.newPage();
    const pageTwo=await context.newPage();

    await pageOne.goto("https://www.facebook.com/");
    console.log(await pageOne.title());
    await pageOne.locator('//input[@name="email"]').fill('example@email.com');
    await pageOne.waitForTimeout(2000);


    await pageTwo.goto("https://testautomationpractice.blogspot.com/");   
    console.log(await pageTwo.title());
    await pageTwo.locator('//input[@id="name"]').fill('Playwright');
    await pageTwo.waitForTimeout(3000);


})

test("handling multiple tabs",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(2000);
    console.log(await page.title());
    await page.locator('//input[@name="username"]').fill('Admin');

    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])

    await newTab.waitForLoadState();
    console.log(await newTab.title());

})

//assignment
test("flipkart tabs handling",async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();

    //await page.goto("https://www.flipkart.com/?affid=rohanpouri&affExtParam1=ENKR20260619A2035925117&affExtParam2=4644281&entryMethod=22970503094&&cmpid=content_22970503094_gmc_pla&gad_source=1&gad_campaignid=22970503094&gbraid=0AAAAADxRY5-UqqIeIZV_a9SEPNv8kahvF&gclid=Cj0KCQjw-MDTBhCgARIsAKAkdlRiCZ1S0u4kTdkFAO_OrStKENjwXCXvd_LQF5LLpJxlcKcc_0fGsxIaAov2EALw_wcB");
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(2000);
    console.log(await page.title());
    await page.locator('//div[@class="sGuo7w NsXjXN"]/child::input[@type="text"]').fill("9751111071")
    await page.locator('//button[text()="Request OTP"]').click();
    await page.pause()
    await page.locator('//div[@class="olwU0Z CXZSEo"]/descendant::div/child::input[@type="text"]').fill("apple mobile");

    await page.keyboard.press('Enter');
    
    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//div[text()="Apple iPhone 15 (Black, 128 GB)"]').click()
    ])

     await newTab.waitForLoadState();
     console.log(await newTab.title());
     await expect(newTab.locator('//a[@class="_1psv1zeb9 _1o6mltljo"]/descendant::div[text()="₹58,900"]')).toHaveText('₹58,900');
     //await expect(newTab.locator('//a[@class="_1psv1zeb9 _1o6mltljo"]/descendant::div[text()="₹58,900"]')).toHaveValue('₹58,900');
     //await expect(page.locator('//a[@class="_1psv1zeb9 _1o6mltljo"]/descendant::div[text()="₹58,900"]')).toBeVisible();
     //await page.waitForTimeout(3000);

})



test('page navigation', async ({ page }) => {
    await page.goto("https://www.facebook.com/")

    await page.waitForTimeout(3000)
    
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
    
    await page.goBack()
    
    await page.waitForTimeout(3000)
    
    await page.goForward()

    await page.reload()
})


test("page navigate", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('[name="username"]').fill('Admin');
  await page.locator('[type="password"]').fill('admin123');
  await page.locator('[type="submit"]').click();

  await page.waitForTimeout(2000);
  await page.goBack();
  
  await page.waitForTimeout(3000);
  await page.goForward();
  await page.reload();
});



