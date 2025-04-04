
import {chromium, test} from "@playwright/test"


//test block

test("login test", async()=> {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext(); //Creates a new browser context. It won't share cookies/cache with other browser contexts.
    const page = await context.newPage(); //new tab

    await page.goto("https://www.amazon.in/");
    await page.hover("text=Account & Lists");
    await page.click("text=Sign in");
    // await page.getByRole('button',{name:'Sign in'}).click();

    await page.waitForTimeout(5000);

    await page.fill("input[name='email']", "youremail@email.com");
    await page.click("span[id='continue']");
    await page.waitForTimeout(5000);
    await page.fill("input[name='password']", "mypassword");
    await page.click("input[id='signInSubmit']");
    
    await page.waitForTimeout(5000);

    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://www.amazon.in/?ref_=nav_signin")

    await newPage.waitForTimeout(5000);

})