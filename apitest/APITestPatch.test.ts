import {expect, test} from "@playwright/test"
import { request } from "https"

//Test Scenario One
test('API Testing Patch 1', async({request})=>{
    const reqPatch = await request.patch("/booking/113", { //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
        headers:{
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "Patch",
            "lastname" : "Test",
            }
    })
    const jsonpatch = await reqPatch.json();
    console.log(jsonpatch);
    expect(reqPatch.status()).toBe(200);
    expect(jsonpatch).toMatchObject({
            firstname: 'Patch',
            lastname: 'Test',
            totalprice: 111,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Breakfast'
    })
})


//Test Scenario : To verify GET response is update or not
test('API Testing patch 2', async({request})=>{
    const reqPatch = await request.patch("/booking/736", { //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
        headers:{
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "Patch",
            "lastname" : "Test One",
            "totalprice" : 2000,
            "additionalneeds": "Basket Ball"
        }
    })
    const jsonpatch = await reqPatch.json();
    console.log(jsonpatch);
    expect(reqPatch.status()).toBe(200);
    expect(jsonpatch).toMatchObject({
            firstname: 'Patch',
            lastname: 'Test One',
            totalprice: 2000,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Basket Ball'
    })

    const reqGet = await request.get("https://restful-booker.herokuapp.com/booking/736"); //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
    console.log(await reqGet.json());
    expect(await reqGet.json()).toMatchObject({
        firstname: 'Patch',
        lastname: 'Test One',
        totalprice: 2000,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Basket Ball'
    })
})