//storing my friends'names in an array and printing it

let names:string[]=["Taha","Abbas","Ali","Ainy"];
for(let i=0 ; i<names.length ; i++) {
    console.log(names[i]);
}

//Printing a personalized message to each person above
for(let i=0 ; i<names.length ; i++){
    console.log(`Hello ${names[i]},hope you are doing well.`);
    
}