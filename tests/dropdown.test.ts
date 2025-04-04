import {chromium, test} from "@playwright/test"


test("dropdown", async({page})=> {
    await page.goto('https://www.amazon.in/');
    await page.selectOption("#searchDropdownBox", {
    //    label: "Alexa Skills",
    //    value: "search-alias=amazon-devices",
       index: 10
    })
    await page.waitForTimeout(3000);
})


test("dropdown multipeselect", async({page})=> {
    await page.goto('https://www.amazon.in/');
    await page.selectOption("#multi-select", [{

        label: "Delhi"
    },
    {
        value: "search-alias=Gujrat"
    },
    {
        index: 5
    }] )

})