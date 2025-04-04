import { Page } from "@playwright/test";

export default class registerPage{

constructor (public page: Page){

}
async enterFirstName(firstname: string) {
    await this.page.locator("#input-firstname")
        .fill(firstname);
}
async enterLastName(lastname: string) {
    await this.page.locator("#input-lastname")
        .fill(lastname);
}
async enterEmail(email: string) {
    await this.page.locator("#input-email")
        .fill(email);
}
async enterTelephone(telephone: string) {
    await this.page.locator("#input-telephone")
        .fill(telephone);
}

async enterPassword(password: string) {
    await this.page.locator("#input-password")
        .fill(password);
}

async enterPasswordConfirm(passwordconfirm: string) {
    await this.page.locator("#input-confirm")
        .fill(passwordconfirm);
}
async clickTc() {
    await this.page.click("//div[contains(@class,'custom-checkbox')]");
        
}
async clickContinue() {

    await this.page.click("//input[@value='Continue']");

}
           
}