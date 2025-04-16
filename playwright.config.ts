import { devices, PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {

    // testMatch:["tests/login.test.ts"]
    testMatch:["apitest/APITestAuth.test.ts"],
    use: {
        // baseURL:"https://ecommerce-playground.lambdatest.io/index.php?",
        // baseURL: "https://www.amazon.in/ap/signin?",
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept: "application/json", "Content-type": "application/json",
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
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