// Function to store information about a car in an object
function car_info(manufacturer: string, model: string, ...options: string[]) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Adding additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    
    return car;
}

// Calling the function and storing the values in a variable
let myCar = car_info("Mercedes-Benz", "G-Klasse", "color:Black", "year:2024");
console.log(myCar);
