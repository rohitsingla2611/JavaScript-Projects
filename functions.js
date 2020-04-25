'use strict';
// Functions

console.log("\n");
console.log("File Name :- Functions JS Starts");
console.log("\n");


cubeNumber(3);
function cubeNumber(numberGet) {

    return console.log("Cube of " + numberGet + " is " + numberGet ** 3);

}




// Arrow Functions 

var sqNumber = 11;

const square = (sqNumber) => {
    return a * a;
}
//OR
const square2 = sqNumber => {
    return a * a;
}
//OR
const square3 = sqNumber => a * a;


console.log("\n");
console.log("File Name :- Functions JS Ends");
console.log("\n");
