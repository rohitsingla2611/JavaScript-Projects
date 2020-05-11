'use strict';
// Functions

console.log("\n");
console.log("File Name :- Functions JS Starts");
console.log("\n");


cubeNumber(3);
function cubeNumber(numberGet) {

    return console.log("Cube of " , numberGet , " is " , numberGet ** 3);

}

const sum = (number11, number22) => number11 <= number22?[number11]:[number22] ;
var sumResult = sum(11,26);
console.log(sumResult);
console.log(sumResult[0]);
let number11 = 11;
let number22 = 26;
const biggest = (function (a,b){ //Immediately invoked functional expressions

    let res;
    a <= b? res = [a]:res = [b];
return res;
})(number11,number22);


console.log("Immediately invoked function",biggest);

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
