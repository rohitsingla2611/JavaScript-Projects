'use strict';
// Object Spread And Rest Operators

console.log("\n");
console.log("File Name :- Object Spread And Rest Operators JS Starts");
console.log("\n");

//   (...) || 3 DOTS are Spread And Rest Operators


const objectOne = {

    name: "Rohit Singla",
    age: 22,
    profile: "React Native Developer",

    printDataObjectOne() {

        console.log("Name :- " + this.name);
        console.log("Age :- " + this.age);
        console.log("Profile :- " + this.profile);

    }

};

const objectTwo = {

    ...objectOne,   // Geting variables and methods from Object One

    languagesKnown: ["Java", "Python", "JavaScipt",
        "C", "C++"],

    printDataObjectTwo() {

        this.printDataObjectOne();
        console.log("Languages Known :- " + this.languagesKnown);

    }

};
console.log("Object One :- ");
objectOne.printDataObjectOne();
console.log("\n");

console.log("Object Two :- ");
objectTwo.printDataObjectTwo();



console.log("\n");
console.log("File Name :- Object Spread And Rest Operators JS Ends");
console.log("\n");
