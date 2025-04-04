import { test as basepomfixture } from "@playwright/test";
import registerPage from "../pageobjectmodel/registerPage"
import loginPage from "../pageobjectmodel/loginPage"
import landingPage from "../pageobjectmodel/landingPage"

type pomFixture = {
    registerPage: registerPage;
    loginPage: loginPage;
    landingPage: landingPage;
}

const pomFixtureTest = basepomfixture.extend<pomFixture>({   //we can give class name, class type, data name, data types

    registerPage: async({page}, use) => {
        await use(new registerPage (page));
    },
    loginPage: async({page}, use) => {
        await use(new loginPage (page));
    },
    landingPage: async({page}, use) => {
        await use(new landingPage (page));
    }
})    

export const test = pomFixtureTest;
export const expect = test.expect;
