import {chromium, test} from "@playwright/test"

test("calendar", async({page})=>{ 
    test.setTimeout(60000);
    await page.goto('https://www.redbus.in/');
    await page.locator("#src").click();
    await page.locator("#src").fill("Hyderabad");
    await page.locator("xpath=//text[text()='Hyderabad']").click();
    await page.locator("#dest").fill("Mumbai");
    await page.locator("xpath=//text[text()='Mumbai']").click();
    await page.locator("#onwardCal").click();
    let dateTime = new Date()
    let date = dateTime.getDate()
    let dateXpath= `xpath=//span[text()="${date}"]`;
    await page.locator(dateXpath).click();
    await page.locator('#search_button').click();
    await page.waitForTimeout(3000);
    await page.locator["//div[text()='View Seats']//ancestor::li[@id='23232950']"];
    await page.waitForTimeout(3000);
    await page.locator('[id="\\32 3232950"]').getByText('View Seats').click();
    await page.locator('.icon-close').first().click();
    await page.locator('canvas').first().click({
    position: {
      x: 421,
      y: 143
    }
  });
    await page.getByRole('button', { name: 'continue' }).click();
    await page.locator('li:nth-child(3) > .radio-css').click();
    await page.getByRole('button', { name: 'Proceed to book' }).click();
});

test("featurecalendar", async({page})=>{ 
    test.setTimeout(60000);
    await page.goto('https://www.redbus.in/');
    await page.locator("#src").click();
    await page.locator("#src").fill("Hyderabad");
    await page.locator("xpath=//text[text()='Hyderabad']").click();
    await page.locator("#dest").fill("Mumbai");
    await page.locator("xpath=//text[text()='Mumbai']").click();
    await page.locator("#onwardCal").click();
    await page.waitForTimeout(3000);
    await page.locator("#Layer_1").click();
    let dateTime = new Date()
    let date = dateTime.getDate();
    let dateXpath= `xpath=//span[text()="${date}"]`;
    await page.locator(dateXpath).click();
    await page.locator('#search_button').click();
    await page.waitForTimeout(3000);
    await page.locator("xpath=(//div[text()='View Seats'])[1]").click();
    await page.waitForTimeout(3000);
    // await page.locator('.icon-close').first().click();
    await page.locator('canvas').first().click({
        position: {
          x: 427,
          y: 168
        }
      });
    await page.locator('(//div[@class="radio-css "])[1]').click();
    await page.locator('(//div[@class="radio-css "]//parent::li[@class="db oh"])[1]').click();
    await page.getByRole('button', { name: 'Proceed to book' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Kishore');
    // await page.locator("//label[text()='Male']").click();
    await page.getByPlaceholder('Age').click();
    await page.getByPlaceholder('Age').fill('32');
    await page.getByRole('textbox', { name: 'State of Residence*' }).click();
    await page.getByText('Telangana', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Email ID' }).click();
    await page.getByRole('textbox', { name: 'Email ID' }).fill('kishore@gmail.com');
    await page.getByPlaceholder('Phone').click();
    await page.getByPlaceholder('Phone').fill('9844891898');
    await page.getByRole('radio', { name: 'Don\'t add Free Cancellation' }).check();
    await page.locator('label').filter({ hasText: 'Don’t add redBus Assurance' }).locator('span').click();
    await page.getByRole('button', { name: 'Proceed to pay' }).click();
    await page.waitForTimeout(3000);

});