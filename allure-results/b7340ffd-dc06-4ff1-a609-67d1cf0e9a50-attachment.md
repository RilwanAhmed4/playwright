# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assignsauce.spec.js >> login using POM Sauce
- Location: tests\assignsauce.spec.js:5:5

# Error details

```
TypeError: sauceLogin.finish is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - generic [ref=e12]: "2"
      - generic [ref=e15]: "Checkout: Overview"
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]: QTY
        - generic [ref=e21]: Description
        - generic [ref=e22]:
          - generic [ref=e23]: "1"
          - generic [ref=e24]:
            - link "Sauce Labs Backpack" [ref=e25] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e27]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e28]: $29.99
        - generic [ref=e30]:
          - generic [ref=e31]: "1"
          - generic [ref=e32]:
            - link "Sauce Labs Bike Light" [ref=e33] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e35]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e36]: $9.99
      - generic [ref=e38]:
        - generic [ref=e39]: "Payment Information:"
        - generic [ref=e40]: "SauceCard #31337"
        - generic [ref=e41]: "Shipping Information:"
        - generic [ref=e42]: Free Pony Express Delivery!
        - generic [ref=e43]: Price Total
        - generic [ref=e44]: "Item total: $39.98"
        - generic [ref=e45]: "Tax: $3.20"
        - generic [ref=e46]: "Total: $43.18"
        - generic [ref=e47]:
          - button [ref=e48] [cursor=pointer]:
            - img "Go back" [ref=e49]
            - text: Cancel
          - button "Finish" [ref=e50] [cursor=pointer]
  - contentinfo [ref=e51]:
    - list [ref=e52]:
      - listitem [ref=e53]:
        - link "Twitter" [ref=e54] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e55]:
        - link "Facebook" [ref=e56] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e57]:
        - link "LinkedIn" [ref=e58] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e59]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import Sauce from '../pages/sauce'
  3  | import creds from '../test-data/sauce.json'
  4  | 
  5  | test("login using POM Sauce", async ({ page }) => {
  6  | 
  7  |     await page.goto("https://www.saucedemo.com/")
  8  | 
  9  |     let sauceLogin = new Sauce(page)
  10 | 
  11 |     await sauceLogin.login(creds.name, creds.pass)
  12 | 
  13 |     await sauceLogin.addToCart()
  14 | 
  15 |     await sauceLogin.checkout()
  16 |     
  17 |     await sauceLogin.fillPersonalInfo(creds.first, creds.last, creds.postal)
  18 |     await sauceLogin.continue()
> 19 |     await sauceLogin.finish()
     |                      ^ TypeError: sauceLogin.finish is not a function
  20 |     await sauceLogin.backToHome()
  21 |     await sauceLogin.logout()
  22 |     await page.pause()
  23 |     
  24 | })
  25 | 
  26 | //    //login
  27 | //     await page.locator('//input[@id="user-name"]').fill("standard_user")
  28 | //     await page.locator('//input[@id="password"]').fill("secret_sauce")
  29 | //     await page.locator('//input[@id="login-button"]').click()
  30 | //     //add to cart
  31 | //     await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click()
  32 | //     await page.locator('//button[@id="add-to-cart-sauce-labs-bike-light"]').click()
  33 | //     await page.locator('//div[@id="shopping_cart_container"]').click()
  34 | //     //checkout
  35 | //     await expect(page.locator('//div[text()="Sauce Labs Backpack"]')).toHaveText("Sauce Labs Backpack")
  36 | //     await expect(page.locator('//div[text()="Sauce Labs Bike Light"]')).toHaveText("Sauce Labs Bike Light")
  37 | //     //detail page
  38 | //     await page.locator('//button[@id="checkout"]').click()
  39 | //     await page.locator('//input[@id="first-name"]').fill("Rilwan")
  40 | //     await page.locator('//input[@id="last-name"]').fill("Ahmed")
  41 | //     await page.locator('//input[@id="postal-code"]').fill("605110")
  42 | //     await page.locator('//input[@id="continue"]').click()
  43 | //     //assertion
  44 | //     await expect(page.locator('//div[@data-test="total-label"]')).toHaveText("Total: $43.18")
  45 | //     await page.locator('//button[@id="finish"]').click()
  46 | //     //finish page
  47 | //     await expect(page.locator('//img[@alt="Pony Express"]')).toBeVisible()
  48 | //     await expect(page.locator('//h2[@class="complete-header"]')).toHaveText("Thank you for your order!")
  49 | //     //back to home
  50 | //     await page.locator('//button[@id="back-to-products"]').click()
  51 | 
  52 | //     //logout
  53 | //     await page.locator('//button[@id="react-burger-menu-btn"]').click()
  54 | //     await page.locator('//a[@id="logout_sidebar_link"]').click()
  55 | // })
  56 | 
  57 | 
  58 | 
  59 | 
```