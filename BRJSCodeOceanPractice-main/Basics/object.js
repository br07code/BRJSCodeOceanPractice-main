// "use strict";

// Create a single object, using an object literal.
// Create a single object, with the keyword new.
// Define an object constructor, and then create objects of the constructed type.
// Create an object using Object.create().

const mySymbol = Symbol(`key1`)

// Using Object literals
// Example--1
// Spaces and line breaks are not important. An object definition can span multiple lines:
const myObject1 = {
    firstName: `Balaram`,
    "full name": `Balaram Roy`,
    // mySymbol:  `myKey1`, // This line will not treat as a symbol tyoe will be string
    // If we want to use it for symbol then we need to enclose it with "[]" (i.e. [mySymbol])
    [mySymbol]: `mykey1`,
    location: `Pune`,
    age: 26,
    email: `balaram.7872roy@gmail.com`,
    isLoggedIn: true,
    logInDays: [`Monday`, `Tuesday`, `Wednesday`, `Thusday`, `Friday`]
}

console.log(myObject1);


// Displaying the element of an object
// console.log(myObject1.firstName);
// console.log(myObject1["full name"]);
// console.log(myObject1[mySymbol]);
// // console.log(myObject1[`age`]);
// console.log(myObject1["age"]);
// // console.log(typeof myObject1[mySymbol]);
// console.log(`My object leterals are: ${myObject1.firstName}, ${myObject1.location}, 
// ${myObject1.age}, ${myObject1.email}, ${myObject1.isLoggedIn}, ${myObject1.logInDays}`);
// console.log(myObject1.firstName, myObject1.location, myObject1.age, myObject1.email, myObject1.isLoggedIn, myObject1.logInDays);

// Changing value of a properties of an Object
myObject1.age = 27
console.log(myObject1.age);
console.log(myObject1);

// Freezing Object 
Object.freeze(myObject1)
myObject1.age = 91
console.log(myObject1);


// // Example--2 
// //This example creates an empty JavaScript object, and then adds 4 properties:
// const myObject2 = {}
// myObject2.firstName = "Balaram"
// myObject2.lastName = "Roy"
// myObject2.age = 26
// myObject2.email = "balandib@gmail.com"


// // Using new keyword
// // The following example create a new JavaScript object using new Object(), and then adds 4 properties:
// const myObject3 = new Object()
// myObject3.favBook = ""


// // Using Object.create()
// let Animal = {
//     isHuman: false,
//     sound: "Unspecified",
//     makeSound() {
//       console.log(this.sound);
//     },
//   };
  
//   // create object from Animal prototype
//   let snake = Object.create(Animal);
//   snake.makeSound(); // Unspecified
  
//   // properties can be created  and overridden
//   snake.sound = "Hiss";
//   snake.makeSound(); // Hiss
  
//   // can also directly initialize object properties with second argument
//   let properties = {
//     isHuman: {
//       value: true,
//     },
//     name: {
//       value: "Jack",
//       enumerable: true,
//       writable: true,
//     },
//     introduce: {
//       value: function () {
//         console.log(`Hey! I am ${this.name}.`);
//       },
//     },
//   };
  
//   human = Object.create(Animal, properties);
//   human.introduce(); // Hey! I am Jack.