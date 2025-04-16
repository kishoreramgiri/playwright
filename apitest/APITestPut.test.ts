import {expect, test} from "@playwright/test"
import { request } from "https"

//Test Scenario One
test('API Testing PUT 1', async({request})=>{
    const reqPut = await request.put("/booking/7", { //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
        headers:{
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "QE",
            "lastname" : "Test",
            "totalprice" : 10,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Ice cream"
        }
    })
    const jsonPut = await reqPut.json();
    console.log(jsonPut);
    expect(reqPut.status()).toBe(200);
    expect(jsonPut).toMatchObject({
            firstname: 'QE',
            lastname: 'Test',
            totalprice: 10,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Ice cream'
    })
})


//Test Scenario : To verify GET response is update or not
test('API Testing PUT 2', async({request})=>{
    const reqPut = await request.put("/booking/113", { //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
        headers:{
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="    //comment in playwright.config.ts file before executing
        },
        data:{
            "firstname" : "QE",
            "lastname" : "Testing",
            "totalprice" : 10,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Ice cream"
        }
    })
    const jsonPut = await reqPut.json();
    console.log(jsonPut);
    expect(reqPut.status()).toBe(200);
    expect(jsonPut).toMatchObject({
            firstname: 'QE',
            lastname: 'Testing',
            totalprice: 10,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Ice cream'
    })

    const reqGet = await request.get("https://restful-booker.herokuapp.com/booking/113");
    console.log(await reqGet.json());
    expect(await reqGet.json()).toMatchObject({
        firstname: 'QE',
        lastname: 'Testing',
        totalprice: 10,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Ice cream'
    })
})