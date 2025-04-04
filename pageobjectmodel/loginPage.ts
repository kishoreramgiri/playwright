import { Page } from "@playwright/test";

export default class loginPage{
static login(email: string, password: string) {
    throw new Error("Method not implemented.");
}

constructor (public page: Page){

}


async login(email : string, password : string){
    await this.enterEmail(email);
    await this.clickContinue();
    await this.enterPassword(password);
    await this.clickLogin();
}


async enterEmail(email: string) {
    await this.page.locator("input[name='email']")
        .fill(email);
}
async clickContinue(){
    await this.page.click("//span[@id='continue']")
}
async enterPassword(password: string) {
    await this.page.locator("input[name='password']")
        .fill(password);
}

async clickLogin() {
    await this.page.click("//span[@id='auth-signin-button']");
        
}

}