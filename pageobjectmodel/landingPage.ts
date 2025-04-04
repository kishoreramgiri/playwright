import { Page, expect } from "@playwright/test";

export default class landingPage{

constructor (public page: Page){ }

async searchProduct(apple: string){
    await this.page.locator("input#twotabsearchtextbox")
        .fill("iphone 16")
}

async clickSearchBtn(){
    await this.page.click("id=nav-search-submit-button");

}

async addProducttoCart(){ 
    await this.page.click("id=a-autoid-1-announce");
}

async viewCart(){
    await this.page.click("id=nav-cart-count-container");
}

}