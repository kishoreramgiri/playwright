import {expect, test} from "@playwright/test"
import { request } from "https"
import { json } from "stream/consumers";

//Type 1
test('API Testing POST 1', async({request})=>{
    const reqPost = await request.post("/booking", {
        data:
            {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        
    });
    const jsonPost = await reqPost.json();
    // console.log( await reqPost.json());
    console.log(jsonPost);
    expect(reqPost.status()).toBe(200);
    expect(jsonPost.booking).toMatchObject({
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    })
})

//Type 2
test('API Testing POST 2', async({request})=>{
    const reqPost = await request.post("/booking", {
        data:
            {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            } 
    });
    const jsonPost = await reqPost.json();
    console.log( await reqPost.json());
    // expect(reqPost.status()).toBe(200);
    expect(jsonPost.booking.additionalneeds).toEqual("Breakfast")
})