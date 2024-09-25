"use strict";
//Ex18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//storing an array and printing it
var travel = ["Norway", "Germany", "Iraq", "Iran"];
console.log("Original order:", travel);
//print the array in alphabetical order
var sortedlist = __spreadArray([], travel, true).sort();
console.log("Älphabetical order:", sortedlist);
//unchanged original order of array
console.log("Unchanged original order:", travel);
//printing the array in reversed alphabetical order
var reversedsortedlist = __spreadArray([], sortedlist, true).reverse();
console.log("Reverse Alphabetical order of the array:", reversedsortedlist);
//original order of the array
console.log("Original Order :", travel);
//reversing the order of the list
var reverselist = __spreadArray([], travel, true).reverse();
console.log("reverse order of the list:", reverselist);
//reversing the order again to change back to original
var reversetotravel = __spreadArray([], reverselist, true).reverse();
console.log("Reversed back to original:", reversetotravel);
//sorting it to alphabetical order
console.log("Sorted list:", reversetotravel.sort());
//sorting the array to reverse alphabetical order
console.log("Reverse sorted list:", reversetotravel.sort().reverse());
