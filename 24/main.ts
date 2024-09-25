//creating variables
let car="BMW";
let fruit="APPLE";

//tests for equality and inequality
console.log("Is car equal to BMW?")
console.log(car=="BMW");

console.log("\nIs car not equal to BMW?")
console.log(car!="BMW");

//tests for lower case function
console.log("\nIs APPLE equal to apple when converted in lower-case?")
console.log(fruit.toLowerCase() == "apple");

console.log("\nIs APPLE not equal to apple when converted in lower-case?")
console.log(fruit.toLowerCase() != "apple");

//Numerical tests 
console.log("\nIs 5 equal to 5?")
console.log(5==5);

console.log("\nIs 2 not equal to 2?")
console.log(2!=2);

console.log("\nIs 50 greater than 20?")
console.log(50>20);

console.log("\nIs 50 smaller than 20?")
console.log(50<20);

console.log("\nIs 10 greater than or equal to 5?")
console.log(10>=5);

console.log("\nIs 10 less than or equal to 5?")
console.log(10<=5);

//tests using & and || operators
console.log("\n10 is less than 9 and 5 is equal to 5?")
console.log(10<9 && 5==5);

console.log("\n30 is less than 90 and 15 is greater than 5?")
console.log(30<90 && 15>5);

console.log("\n50 is greater than 90 or 27 is equal to 27?")
console.log(50>90 || 27==27);

console.log("\n100 is greater than 200 or 27 is not equal to 27?")
console.log(100>200 || 27!=27);

//Test whether an item is in an array
let things:string[]=["sky","stars","sun"];
console.log("\nIs sun included in the array?")
console.log(things.includes("sun"));

//Test whether an item is not in a array
console.log("\nIs sky not included in the array?")
console.log(!things.includes("sky"));
