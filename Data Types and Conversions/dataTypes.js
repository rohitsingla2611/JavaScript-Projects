'use strict';
// Data Types
// typeof used to check Data Type of variable

console.log("\n");
console.log("File Name :- DataTypes JS Starts");
console.log("\n");

let numberInteger = 26; // Integer
console.log(numberInteger + " - DataType Integer Number");
console.log("Checking DataType " + typeof (numberInteger)); // Checking Data Type of numberInteger


var numberFloat = 26.11;    // Float
console.log(numberFloat + " - DataType Float Number");
console.log("Checking DataType - " + typeof (numberFloat));   // Checking Data Type of numberFloat

let str = "RD ROCK";    // String
console.log(str + " - DataType String");
console.log("Checking DataType - " + typeof (str));   // Checking Data Type of str

let trueFalse = true;   // Boolean
console.log(trueFalse + " - DataType Boolean");
console.log("Checking DataType - " + typeof (trueFalse)); // Checking Data Type of trueFalse

let obj = {
    First_Name: "ROHIT",
    Last_Name: "SINGLA",
    AGE: 22,
    showData: function () {
        console.log("Full Name - " + this.First_Name + " " + this.Last_Name);

    }
};           // Object

obj.showData(); // Function Call written inside Object
console.log(obj.First_Name + " " + obj.Last_Name + " is "
    + obj.AGE + " years old." + " - DataType Object");
console.log("Checking DataType " + typeof (obj));   // Checking Data Type of obj

let numberArray = [26, 11, 19, 97]; // Array
console.log(numberArray + " - DataType Array");
console.log("Checking DataType - " + typeof (numberArray));   // Checking Data Type of numberArray

var undefinedR;
console.log(undefinedR + " - DataType undefined");
console.log("Checking DataType - " + typeof (undefinedR));    // Checking Data Type of undefinedR

let nullR = null;
console.log(nullR + " - DataType nullR");
console.log("Checking DataType - " + typeof (nullR)); // Checking Data Type of nullR

console.log("\n");
console.log("File Name :- DataTypes JS Ends");
console.log("\n");
