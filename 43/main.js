"use strict";
let magicians = ["David", "Criss", "Harry"];
//function to print each magician's name
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//function to create a new array with "The Great" in it
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//calling make_great to create a new array with modified names
let greatMagicians = make_great(magicians);
//calling function to show both arrays
console.log("The Original Array:");
show_magicians(magicians);
console.log("The Modified Array:");
show_magicians(greatMagicians);
