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
  5  |         this.username = '/input[@id="user-name"]';
  6  |         this.password = '//input[@id="password"]';
  7  |         this.button = '//input[@id="login-button"]';
  8  |     }
  9  |     //login method
  10 |     async login(username, password) {
> 11 |         await this.page.locator(this.username).fill(username);
     |                                                ^ Error: locator.fill: value: expected string, got undefined
  12 |         await this.page.locator(this.password).fill(password);
  13 |         await this.page.locator(this.button).click();
  14 |     }
  15 | 
  16 | }
  17 | 
  18 | export default Sauce;
  19 | 
```