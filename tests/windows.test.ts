import {chromium, expect, test} from "@playwright/test"


test("interact with frames", async({browser})=> {

    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/');
    
    const[newTab] = await Promise.all([
        context.waitForEvent['page'],
        page.locator("//a[text()='Amazon Global Selling']").click()
    ]);

    await page.waitForTimeout(5000);
    
    // expect(await newTab.title()) .toBe('New Window');
})