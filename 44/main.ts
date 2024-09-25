//Function that accepts multiple arguments
function sandwich(...items:string[]){
    console.log(`\nYou have ordered a sandwich with the following items:\n`);

    items.forEach(oneItem=> console.log(oneItem));

    console.log("\nPlease wait while we prepare your order.\n");

}

//calling the function with different values
sandwich("Eggs","Mayonnaise");
sandwich("Ham","Cheese","Veggies");
sandwich("Onions","Pickles","Smoky Chicken","Olives");