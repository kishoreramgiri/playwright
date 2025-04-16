import {expect, test} from "@playwright/test"
import { request } from "https"

//Test Scenario One

test('API Testing Delete 1', async({request})=>{
    const reqDelete = await request.delete("/booking/2050"); //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
    expect(reqDelete.status()).toBe(201);
    console.log(reqDelete);
})


//Veruft 404 Status code

test('API Testing 404 status', async({request})=>{
    const reqGet = await request.get("/booking/2050"); //Use the above booking?:id to verify
    expect(reqGet.status()).toBe(404);
    console.log(reqGet);
})


//Verify Delete & Get Method together
test('API Testing Delete 2', async({request})=>{
    const reqDelete = await request.delete("/booking/276"); //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
    expect(reqDelete.status()).toBe(201);
    console.log(reqDelete);

    const reqGet = await request.get("/booking/276");
    expect(reqGet.status()).toBe(404);
    console.log(reqGet);
})