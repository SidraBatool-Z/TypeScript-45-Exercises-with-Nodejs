//storing my friends'names in an array and printing it
var names = ["Taha", "Abbas", "Ali", "Ainy"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Printing a personalized message to each person above
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i], ",hope you are doing well."));
}
