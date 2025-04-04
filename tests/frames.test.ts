import {chromium, test} from "@playwright/test"


test("interact with frames", async({page})=> {
    await page.goto('https://www.amazon.in/');
    const allframes = page.frames();
    console.log("no.of frames: " + allframes.length);

    // const firstFrame = page.frame('#ape_Gateway_right-2_desktop_iframe');

    const frame = page.frameLocator('#ape_Gateway_desktop-ad-center-1_desktop_iframe');
    
})