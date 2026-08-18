class Orange {

    constructor(page) {   //parameter name
        this.page = page;
        this.username = '//input[@placeholder="Username"]';
        this.password = '//input[@placeholder="Password"]';
        this.button = '//button[text()=" Login "]';
    }

    async login(uname, pword) {
        await this.page.locator(this.username).fill(uname);
        await this.page.locator(this.password).fill(pword);
        await this.page.locator(this.button).click();
    }
}

export default Orange;
