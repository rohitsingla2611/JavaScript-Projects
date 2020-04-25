'use strict';
// Classes

console.log("\n");
console.log("File Name :- Classes JS Starts");
console.log("\n");

//ES6
class HumanES6 {
    constructor() {
        this.age = 22;
    }

    printAge() {
        console.log("My age is " + this.age);

    }
}

class PersonES6 extends HumanES6 {
    constructor() {
        super();
        this.name = "ROHIT SINGLA";
    }

    printData() {
        console.log("ES6 Classes");

        console.log("My Name is " + this.name);
        this.printAge();

    }
}

new PersonES6().printData();
//ES7

class HumanES7 {

    age = 12;


    printAge = () => console.log("My age is " + this.age);


}

class PersonES7 extends HumanES7 {

    name = "RD ROCK";

    printData = () => {

        console.log("\n");
        console.log("ES7 Classes");

        console.log("My Name is " + this.name);
        this.printAge();

    }
}
new PersonES7().printData();


console.log("\n");
console.log("File Name :- Classes JS Ends");
console.log("\n");
