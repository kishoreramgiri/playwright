import { test, expect } from '@playwright/test';


test('closepopup and alert', async ({ page }) => {
    await page.goto('https://www.amazon.in/');

    const popupdialog = page.locator('#glow-ingress-line2');
    await popupdialog.click();
    await page.getByRole('button', { name: 'Close' }).click();

    //alert Cancel
//     // page.on("popupdialog", async (alert) => {
//     //     const text = alert.message(); 
        //    const text =alert.defaultValue(); #enter text in pop-up alert
//     //     console.log(text);
//     //     await alert.accept();
        //   await alert.accept("testing"); #enter text in pop-up 
// //     // })
//         await page.locator("button:has-text('Click me')").nth(0).click();
//         expect(page.locator("id=confirm")).toContainText("OK")
})

test('popup and alert', async ({ page }) => {
    await page.goto('https://www.amazon.in/');

    const popupdialog = page.locator('#glow-ingress-line2');
    await popupdialog.click();
    await page.fill('#GLUXZipUpdateInput','110001')
    await page.click('#GLUXZipUpdateInput');
})