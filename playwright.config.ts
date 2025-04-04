import { devices, PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {

    // testMatch:["tests/login.test.ts"]
    testMatch:["pomtest/addTiCartmyFixture.test.ts"],
    use: {
        baseURL:"https://ecommerce-playground.lambdatest.io/index.php?",
        // baseURL: "https://www.amazon.in/ap/signin?",
        headless: false,
        screenshot: "on", //on-first-failure,only-on-failure
        video: "on" //on-first-retry, retain-on-failure
    },
    retries: 0,
    reporter: [["dot"],["json", {
      outputFile: "jsonReports/jsonReort.json"
    }], ["html", {
        open: "never"
    }]],

    projects: [
        {
            name: "chrome",
            use: {
            ...devices["Desktop Chrome"]
                    }
                }
            //     {
            //         name: "firefox",
            //         use: {
            //             ...devices["Desktop Firefox"]
            //         }
    ],


};

export default config;