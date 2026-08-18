class Sauce {

    constructor(page) {   //parameter name
        this.page = page;
        this.username = '//input[@id="user-name"]';
        this.password = '//input[@id="password"]';
        this.button = '//input[@id="login-button"]';
        this.backpackButton = '//button[@id="add-to-cart-sauce-labs-backpack"]';
        this.bikeLightButton = '//button[@id="add-to-cart-sauce-labs-bike-light"]';
        this.shoppingCart= '//div[@id="shopping_cart_container"]';
        this.checkoutbutton = '//button[@id="checkout"]';
        this.firstName = '//input[@id="first-name"]';
        this.lastName = '//input[@id="last-name"]';
        this.postalCode = '//input[@id="postal-code"]';
        this.continuebutton = '//input[@id="continue"]';
        this.finishbutton = '//button[@id="finish"]';
        this.home = '//button[@id="back-to-products"]';
        this.logoutMenu = '//button[@id="react-burger-menu-btn"]';
        this.logoutbutton = '//a[@id="logout_sidebar_link"]';
    }
    //login method
    async login(uname, pword) {
        await this.page.locator(this.username).fill(uname);
        await this.page.locator(this.password).fill(pword);
        await this.page.locator(this.button).click();
    }
    //add to cart method
    async addToCart() {
        await this.page.locator(this.backpackButton).click()
        await this.page.locator(this.bikeLightButton).click()
        await this.page.locator(this.shoppingCart).click()
    }
    //checkout method
    async checkout() {
        await this.page.locator(this.checkoutbutton).click()
    }
    //fill personal info method
    async fillPersonalInfo(firstName, lastName, postalCode) {
        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastName)
        await this.page.locator(this.postalCode).fill(postalCode)
    }
    //continue method
    async continue() {
        await this.page.locator(this.continuebutton).click()
    }
    //finish method
    async finish() {
        await this.page.locator(this.finishbutton).click()
    }
    //back to home method
    async backToHome() {
        await this.page.locator(this.home).click()
    }
    //logout method
    async logout() {
        await this.page.locator(this.logoutMenu).click()
        await this.page.locator(this.logoutbutton).click()
    }

}

export default Sauce;
