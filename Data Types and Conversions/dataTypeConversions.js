'use strict';
// Data Types Conversions

console.log("\n");
console.log("File Name :- DataTypes Conversions JS Starts");
console.log("\n");

let numberInteger1 = 26;
var intToString = numberInteger1.toString(); // Converting Integer Number into String
console.log(intToString + " Converted Integer Number into String");

var numberFloat1 = 26.11;
var floatToString = numberFloat1.toString(); // Converting Float Number into String    
console.log(floatToString + " Converted Float Number into String");

let obj1 = {
    First_Name: "ROHIT",
    Last_Name: "SINGLA",
    AGE: 22
};
var objToString = obj1.First_Name.toString();    // Converting Object into String         
console.log(objToString + " Converted Object into String");

var strNumberInt = "26";
var stringToInt = Number.parseInt(strNumberInt);    // Converting String into Integer Number
console.log(stringToInt + " Converted String into Integer Number");

var strNumberFloat = "26.11";
var stringToFloat = Number.parseFloat(strNumberFloat);  // Converting String into Float Number
console.log(stringToFloat + " Converted String into Float Number");

console.log("\n");
console.log("File Name :- DataTypes Conversions JS Ends");
console.log("\n");
