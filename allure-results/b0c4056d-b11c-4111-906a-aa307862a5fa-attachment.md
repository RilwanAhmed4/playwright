# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assignsauce.spec.js >> login using POM Sauce
- Location: tests\assignsauce.spec.js:5:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | class Sauce {
  2  | 
  3  |     constructor(page) {   //parameter name
  4  |         this.page = page;
  5  |         this.username = '//input[@id="user-name"]';
  6  |         this.password = '//input[@id="password"]';
  7  |         this.button = '//input[@id="login-button"]';
  8  |         this.backpackButton = '//button[@id="add-to-cart-sauce-labs-backpack"]';
  9  |         this.bikeLightButton = '//button[@id="add-to-cart-sauce-labs-bike-light"]';
  10 |         this.shoppingCartContainer = '//div[@id="shopping_cart_container"]';
  11 |         this.checkoutbutton = '//button[@id="checkout"]';
  12 |         this.firstName = '//input[@id="first-name"]';
  13 |         this.lastName = '//input[@id="last-name"]';
  14 |         this.postalCode = '//input[@id="postal-code"]';
  15 |         this.continue = '//input[@id="continue"]';
  16 |         this.finish = '//button[@id="finish"]';
  17 |         this.home = '//button[@id="back-to-products"]';
  18 |         this.logoutMenu = '//button[@id="react-burger-menu-btn"]';
  19 |         this.logout = '//a[@id="logout_sidebar_link"]';
  20 |     }
  21 |     //login method
  22 |     async login(uname, pword) {
> 23 |         await this.page.locator(this.username).fill(uname);
     |                                                ^ Error: locator.fill: value: expected string, got undefined
  24 |         await this.page.locator(this.password).fill(pword);
  25 |         await this.page.locator(this.button).click();
  26 |     }
  27 |     //add to cart method
  28 |     async addToCart() {
  29 |         await this.page.locator(this.backpackButton).click()
  30 |         await this.page.locator(this.bikeLightButton).click()
  31 |         await this.page.locator(this.shoppingCartContainer).click()
  32 |     }
  33 |     //checkout method
  34 |     async checkout() {
  35 |         await this.page.locator(this.checkoutbutton).click()
  36 |     }
  37 |     //fill personal info method
  38 |     async fillPersonalInfo(firstName, lastName, postalCode) {
  39 |         await this.page.locator(this.firstName).fill(firstName)
  40 |         await this.page.locator(this.lastName).fill(lastName)
  41 |         await this.page.locator(this.postalCode).fill(postalCode)
  42 |     }
  43 |     //continue method
  44 |     async continue() {
  45 |         await this.page.locator(this.continue).click()
  46 |     }
  47 |     //finish method
  48 |     async finish() {
  49 |         await this.page.locator(this.finish).click()
  50 |     }
  51 |     //back to home method
  52 |     async backToHome() {
  53 |         await this.page.locator(this.home).click()
  54 |     }
  55 |     //logout method
  56 |     async logout() {
  57 |         await this.page.locator(this.logoutMenu).click()
  58 |         await this.page.locator(this.logout).click()
  59 |     }
  60 | 
  61 | }
  62 | 
  63 | export default Sauce;
  64 | 
```