"use strict";
//creating a function
function describe_city(city = "Karachi", country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
//calling the function
describe_city();
describe_city("Lahore");
describe_city("Multan");
describe_city("Berlin", "Germany");
