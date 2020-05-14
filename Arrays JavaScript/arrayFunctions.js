'use strict';
// Array Functions

console.log("\n");
console.log("File Name :- Array Functions JS Starts");
console.log("\n");

const ARRAY_ONE = [11, 26, 2611, 1126];
const ARRAY_MAP = ARRAY_ONE.map(num => num * 3);

console.log("Array One :- " + ARRAY_ONE);
console.log("Array Map :- " + ARRAY_MAP);

let colors = ["RED", "BLUE", "GREEN", "YELLOW"];

console.log("Colors Before Functions :\t", colors);

console.log("Length of Array Colors is ", colors.length);

colors.reverse();
console.log("Colors After Reverse Function :\t", colors);

colors.shift(); // Deletion Element from Starting of Array
console.log("Colors After Shift Function :\t", colors);

colors.unshift
    ("CYAN", "SMOKE", "MAT-BLACK"); // Insterion Element from Starting of Array
console.log("Colors After UnShift Function :\t", colors);

colors.pop(); // Deletion Element from End of Array
console.log("Colors After Pop Function :\t", colors);

colors.push("SEA-SHELL", "MINT"); // Insterion Element from End of Array
console.log("Colors After Push Function :\t", colors);

colors.splice(2, 1);
/*  splice(index no , number of elements(optional)) 
    if number of elements == null then it remove elements till end
*/
console.log("Colors After Splice Function :\t", colors);

colors.reverse();
let colorsCopy = colors.slice();

console.log("Colors Copy \"Slice Function\" :\t", colorsCopy);

let searchColor = colorsCopy.indexOf("CYAN",2);
/*  indexOf("search element name", from which index start searching)
    search color tells index of element specified    
*/
console.log("Color (\"CYAN\") After Search Function :\t", searchColor);

let colorsJoin = colors.join("RD, ");
console.log("Colors After Join Function :\n", colorsJoin);

console.log("Colors After Splice Function :\t", colors);

console.log("Colors After Splice Function :\t", colors);

console.log("Colors After Splice Function :\t", colors);


console.log("\n");
console.log("File Name :- Array Functions JS Ends");
console.log("\n");
