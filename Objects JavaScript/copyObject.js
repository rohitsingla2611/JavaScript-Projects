'use strict';
// Copy Objects

console.log("\n");
console.log("File Name :- Copy Objects JS Starts");
console.log("\n");


const objOne = {
    name: "Rohit Singla",
};

const objTwo = objOne; // It is not Copying object, It is copying Reference 
console.log("Reference Copy");
console.log(objTwo);
 
const objCopy = { // Object Copy
    ...objOne
}
console.log("Object Value Copy" );
console.log(objCopy);


objOne.name = "RD ROCK";  //  Value Update

console.log("Reference Copy after Value Updation"); // Value Changed due to Reference Copy
console.log(objTwo);

console.log("Object Value Copy after Value Updation"); // Value not Changed
console.log(objCopy);



console.log("\n");
console.log("File Name :- Copy Objects JS Ends");
console.log("\n");
