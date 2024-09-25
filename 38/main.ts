//creating a function
function describe_city(city:string="Karachi", country:string="Pakistan"){
console.log(`${city} is in ${country}.`);
}

//calling the function
describe_city();
describe_city("Lahore");
describe_city("Multan");
describe_city("Berlin","Germany");