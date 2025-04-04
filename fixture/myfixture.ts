import {test as myTest} from "@playwright/test";

type loginCredntials ={

    email: string,
    password: string,
    age: number,
    gender: string
}

const myFixture = myTest.extend<loginCredntials>({  //we can give class name, class type, data name, data types

    email: "test@test.com",
    password: "test1234",
    age: 30,
    gender: "male"
})    

export const test = myFixture;