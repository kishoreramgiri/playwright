import {chromium, test} from "@playwright/test"

test("Download file", async({page})=>{ 
    test.setTimeout(60000);
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');
    await page.locator("#textbox").type("Welcome to Playwright test automation");
    await page.locator("#create").click();
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click('#link-to-download')
    ])
    await page.waitForTimeout(3000);
    const path = await download[0].path();
    console.log(path);
    // how to save the file in your local

    //-- Other way download location
    const testing = download[0].suggestedFilename();
    await download[0].saveAs(testing);
    // page.on('download', download => download.path().then(console.log));

})

test("upload file", async({page})=>{ 
    test.setTimeout(60000);
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles("input[type='file']", 
         ["UploadItem/lion.jpg" , "UploadItem/tiger.jpg"]);
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Start upload' }).click();
    await page.waitForTimeout(5000);
})

//another way of upload files
test.only("upload files", async({page})=>{ 
    test.setTimeout(60000);
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const [uploadFiles] = await Promise.all([ //destructuring
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(
        ["UploadItem/lion.jpg" , "UploadItem/tiger.jpg"]
    )

})