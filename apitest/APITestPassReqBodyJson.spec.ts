//API testing Pass Request Body from JSON

import {expect, test} from "@playwright/test"
import apitestdata from "../test-data/apitestdata.json"

//Type 1
test('API Testing POST Request via JSON', async({request})=>{
    const reqPost = await request.post("/booking", {
        data: apitestdata.postdata
        
    });
    const jsonPost = await reqPost.json();
    // console.log( await reqPost.json());
    console.log(jsonPost);
    expect(reqPost.status()).toBe(200);
    expect(jsonPost.booking).toMatchObject(apitestdata.postdata);
    expect(jsonPost.booking.additionalneeds).toEqual(apitestdata.postdata.additionalneeds);
    
})

//Test Scenario PUT

test('API Testing PUT Request via JSON', async({request})=>{
    const reqPut = await request.put("/booking/2291", {    //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking

        data:apitestdata.putdata
    })
    const jsonPut = await reqPut.json();
    console.log(jsonPut);
    expect(reqPut.status()).toBe(200);
    expect(jsonPut).toMatchObject(apitestdata.putdata)
})


//Test Scenario Patch

test('API Testing Patch 1', async({request})=>{
    const reqPatch = await request.patch("/booking/771", {  //change/update the booking/:id from get method: https://restful-booker.herokuapp.com/booking
        data:apitestdata.patchdata
    })
    const jsonpatch = await reqPatch.json();
    console.log(jsonpatch);
    expect(reqPatch.status()).toBe(200);
    expect(jsonpatch).toMatchObject(apitestdata.patchoutput)
})