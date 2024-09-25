//Ex18

import { Console } from "console";

//storing an array and printing it
let travel:string[]=["Norway", "Germany", "Iraq","Iran"];
console.log("Original order:" , travel );

//print the array in alphabetical order
let sortedlist=[...travel].sort();
console.log("Älphabetical order:" , sortedlist);

//unchanged original order of array
console.log("Unchanged original order:", travel);

//printing the array in reversed alphabetical order
let reversedsortedlist=[...sortedlist].reverse();
console.log("Reverse Alphabetical order of the array:", reversedsortedlist);

//original order of the array
console.log("Original Order :", travel);

//reversing the order of the list
let reverselist=[...travel].reverse();
console.log("reverse order of the list:", reverselist);

//reversing the order again to change back to original
let reversetotravel=[...reverselist].reverse();
console.log("Reversed back to original:", reversetotravel);

//sorting it to alphabetical order
console.log("Sorted list:" , reversetotravel.sort());

//sorting the array to reverse alphabetical order
console.log("Reverse sorted list:" , reversetotravel.sort().reverse());


