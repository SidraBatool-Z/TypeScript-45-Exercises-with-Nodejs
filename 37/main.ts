//creating a function
function make_shirt(size:string="Large", text:string="I Love TypeScript"){
    console.log(`Your shirt is ${size} size with "${text}" printed on it.`);
}

//calling the function
make_shirt();

//calling the function for medium size shirt with default text
make_shirt("Medium");

//calling function for different size and text
make_shirt("Small","I Love travelling");