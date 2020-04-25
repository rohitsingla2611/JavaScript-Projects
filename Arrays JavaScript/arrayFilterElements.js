'use strict';
// Array Filter Elements

console.log("\n");
console.log("File Name :- Array Filter Elements JS Starts");
console.log("\n");

const arrayName = ["RD ROCK ", "ROHIT ", "SINGLA ", "RD ",
    "ROCK ", "ROHITSINGLA2611 "];
console.log("Array Name :- \n" + arrayName);

const arrayNameFilter = arrayName.filter(letters => letters.length > 6);
console.log("Array Name Filter :- \n" + arrayNameFilter);

const filterRestOperator = (...args) => args.filter(el => el.length > 6);
console.log("Array Name Filter through Spread And Rest Operators :- \n"
    + filterRestOperator("RD ROCK ", "ROHIT ", "SINGLA ", "RD ",
    "ROCK ", "ROHITSINGLA2611 "));

console.log("\n");
console.log("File Name :- Array Filter Elements JS Ends");
console.log("\n");
