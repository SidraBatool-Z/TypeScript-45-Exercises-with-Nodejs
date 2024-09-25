"use strict";
//creating a function
function city_country(city = "Karachi", country = "Pakistan") {
    return (`${city},${country}`);
}
//calling the function
city_country();
let pair1 = city_country("Dublin", "Germany");
let pair2 = city_country("NewYork", "USA");
let pair3 = city_country("Beijing", "China");
//printing the values
console.log(city_country());
console.log(pair1);
console.log(pair2);
console.log(pair3);
