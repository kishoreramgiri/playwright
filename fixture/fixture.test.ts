import { test } from "./myfixture";

test("fixture", async({email, password, age, gender}) => {
   console.log(email, password, age, gender);

})
