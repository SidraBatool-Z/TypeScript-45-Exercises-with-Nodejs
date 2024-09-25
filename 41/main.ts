//creating an array
let magicians:string[]=["David","Harry","Criss"];

//creating a function to print values from an array 
function show_magicians(magicians:string[]){
magicians.forEach(name=>console.log(name));
}

//calling the function
show_magicians(magicians);