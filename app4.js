// // Dry - DOn't Repeat yourself

// //FUnction definition
// function welcomePersonToFES(firstName, lastName) {
//     console.log(`Welcome to Frontend Simplified ${firstName} ${lastName}`);
// }


// //call the function
// welcomePersonToFES("John", "Smith");
// welcomePersonToFES("Jane", "Doe");
// welcomePersonToFES("Dominick", "Bazan");



// function sumOfTwoNumbers(num1,num2) {
//     return num1 / num2
//     console.log("my function");
// }

// console.log(sumOfTwoNumbers(5,15)); 


// Create a function that converts Celsius to Fahrenheit and vice versa.

function convertTemperature(temp, unit) {
    if (unit === "C") {
        return (temp * 9/5) + 32;
    } else if (unit === "F") {
        return (temp - 32) * 5/9;
    } else {
        return "Invalid unit";
    }
}


console.log(convertTemperature(0, "C")); // 32
console.log(convertTemperature(32, "F")); // 0
console.log(convertTemperature(10, "C")); // 50
console.log(convertTemperature(50, "F")); // 10
console.log(convertTemperature(30, "C")); // 86
console.log(convertTemperature(86, "F")); // 30
console.log(convertTemperature(100, "C")); // 212
console.log(convertTemperature(212, "F")); // 100
console.log(convertTemperature(100, "K")); // Invalid unit