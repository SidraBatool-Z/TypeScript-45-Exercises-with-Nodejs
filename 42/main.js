"use strict";
let magicians = ["David", "Criss", "Harry"];
//creating functions
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//calling the function to check if the list has modified or not
let great_magicians = make_great(magicians);
show_magicians(great_magicians);
