import {expect, test} from "@playwright/test"
import { request } from "https"


//auth
test('Auth Token API Key', async({request})=>{
    const respAuth = await request.put("/booking/449", {
        headers: {
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "Test",
            "lastname" : "QE",
            "totalprice" : 1110,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    })
    expect( respAuth.status()).toBe(200);

})

//auth
let tokenValue;

test.beforeAll('Auth Token', async({request})=>{
    const respToken = await request.post("/auth", {
        data: {
            "username" : "admin",
             "password" : "password123"
        }
    })
    tokenValue = (await respToken.json()).token;
    console.log(await respToken.json());
})

test('Auth with Put method', async({request}) => {
    const respPut = await request.put("/booking/449",{
        headers:{
            Cookie:"token=" + tokenValue
        },
        data:{
            "firstname" : "Auth",
            "lastname" : "Token",
            "totalprice" : 1,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Auth Token"
        }
    });
    expect(respPut.status()).toBe(200);
})
