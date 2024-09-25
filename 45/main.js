// Function to store information about a car in an object
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Adding additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Calling the function and storing the values in a variable
var myCar = car_info("Mercedes-Benz", "G-Klasse", "color:Black", "year:2024");
console.log(myCar);
