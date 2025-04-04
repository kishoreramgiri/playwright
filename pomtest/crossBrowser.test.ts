

import { describe } from "node:test";
import { test } from "../basepomfixture/pomFixture";
import * as data from "../test-data/test-data.json";

// test.use({
//     browserName: "firefox"
// })

test.describe("Page object test demo", async() => {

    test("Register test", async({page , baseURL, registerPage})=>{ 
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName("data.firstname");
        await registerPage.enterLastName("data.lastname");
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.telephone);
        await registerPage.enterPassword(data.password);
        await registerPage.enterPasswordConfirm(data.password);
        await registerPage.clickTc();
        await registerPage.clickContinue();
    })
    
    test("Login test", async({page , baseURL, loginPage})=>{ 
     await page.goto(`${baseURL}openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0`);
     await loginPage.enterEmail(data.aemail);
     await loginPage.clickContinue();
     await loginPage.enterPassword(data.apassword);
     await loginPage.clickLogin();
    
    })
    
    test("Add to Cart", async({page , baseURL, loginPage, landingPage})=>{
        await page.goto(`${baseURL}openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0`);
        await loginPage.login(data.aemail, data.apassword)
        await landingPage.searchProduct(data.apple);
        await landingPage.clickSearchBtn();
        await landingPage.addProducttoCart();
        await landingPage.viewCart();
    
    })

})

