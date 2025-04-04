import {chromium, test} from "@playwright/test"
import registerPage from "../pageobjectmodel/registerPage"
import loginPage from "../pageobjectmodel/loginPage"
import landingPage from "../pageobjectmodel/landingPage"


const email = "test@test.com"
const password = "test0000"

test("Register test", async({page , baseURL})=>{ 
    const register = new registerPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("test");
    await register.enterLastName("test");
    await register.enterEmail(email);
    await register.enterTelephone("1234567890");
    await register.enterPassword(password);
    await register.enterPasswordConfirm(password);
    await register.clickTc();
    await register.clickContinue();
})

const aemail = "youremail@email.com"
const apassword = "mypassword"

test("Login test", async({page , baseURL})=>{ 
 const login = new loginPage(page);
 await page.goto(`${baseURL}openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0`);
 await login.enterEmail(aemail);
 await login.clickContinue();
 await login.enterPassword(apassword);
 await login.clickLogin();

})

const apple = "iphone 16"

test("Add to Cart", async({page , baseURL})=>{
    const login = new loginPage(page);
    const homepage = new landingPage(page);
    await page.goto(`${baseURL}openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0`);
    await login.login(aemail, apassword)
    await homepage.searchProduct(apple);
    await homepage.clickSearchBtn();
    await homepage.addProducttoCart();
    await homepage.viewCart();

})