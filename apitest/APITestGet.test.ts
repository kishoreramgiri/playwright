import {expect, test} from "@playwright/test"
import { request } from "https"


//Type 1
test('API Testing 1', async({request})=>{
    const reqGet = await request.get("https://restful-booker.herokuapp.com/booking", {
        headers:{
            Accept: "application/json"
        }
    });
    console.log(await reqGet.json());
})

//Type 2

test('API Testing 2', async({request})=>{
    const reqGet = await request.get("/booking");
    console.log(await reqGet.json());
})

test('API Testing 3', async({request})=>{
    const reqGet = await request.get("/booking/483"); //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
    console.log(await reqGet.json());
})

test('API Testing 4', async({request})=>{
    const reqGet = await request.get("/booking", {
        params:{
            firstname : "Josh",
            lastname : "Allen"
        }
    });
    console.log(await reqGet.json());
})

test('API Testing 5', async({request})=>{
    const reqGet = await request.get("/booking?firstname=Josh&lastname=Allen")
    console.log(await reqGet.json());
})

//validate asseertions 
test('API Testing 7', async({request})=>{
    const reqGet = await request.get("/booking/702"); //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
    console.log(await reqGet.json());
    expect(reqGet.status()).toBe(200);
    expect(reqGet.ok()).toBeTruthy()
})

//validatae the assertions with Resonse body
test('API Testing 8', async({request})=>{
    const reqGet = await request.get("/booking/653"); //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
    console.log(await reqGet.json());
    expect(reqGet.status()).toBe(200);
    expect(await reqGet.json()).toMatchObject({
        "firstname": "John",
        "lastname": "Smith",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    })
    const resp = await reqGet.json()
    expect(resp.firstname).toEqual("John")
    
})

//validate assertion with specific value
test('API Testing 9', async({request})=>{
    const reqGet = await request.get("/booking/653"); //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
    console.log(await reqGet.json());
    expect(reqGet.status()).toBe(200);
    const resp = await reqGet.json()
    expect(resp.firstname).toEqual("John")
    
})

test ('API with UI', async({request})=>{
    const req2 = await request.get("https://api.demoblaze.com/entries");
    console.log(await req2.json());
}

)

test ('API with UI One', async({request})=>{
    const req2 = await request.get("https://api.demoblaze.com/entries");
    const jsonreq2 = await req2.json();
    console.log(jsonreq2.Items[1].title);
 }
)

test ('API with UI Two', async({request, page})=>{
    const req2 = await request.get("https://api.demoblaze.com/entries");
    const jsonreq2 = await req2.json();
    console.log(jsonreq2.Items[1].title);
    await page.goto("https://demoblaze.com/");
    await expect(page.getByRole('link', {name: 'Nokia lumia 1520' })).toHaveText(jsonreq2.Items[1].title)
 }
)