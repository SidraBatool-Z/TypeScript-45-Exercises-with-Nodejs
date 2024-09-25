"use strict";
//creating an array
let magicians = ["David", "Harry", "Criss"];
//creating a function to print values from an array 
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//calling the function
show_magicians(magicians);
