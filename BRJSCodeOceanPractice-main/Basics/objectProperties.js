"use strict";

// Properties are the values associated with a JavaScript object.

// A JavaScript object is a collection of unordered properties.

// Properties can usually be changed, added, and deleted, but some are read only.

// **************************** Accessing JavaScript Properties *********************************//
// objectName.property       // person.age
// objectName["property"]   // person["age"]
// objectName[expression]   // x = "age"; person[x]

// *************************** JavaScript for...in Loop *********************************** //
// The JavaScript for...in statement loops through the properties of an object.
// Syntax
// for (let variable in object) {
//   // code to be executed
// }

// The block of code inside of the for...in loop will be executed once for each property.
// const person = {
//   fname:" John",
//   lname:" Doe",
//   age: 25
// };

let txt = ""; 
// for (let x in person) {
//   txt += person[x] + " ";
//   console.log(txt);
// }

// ************************ Adding New Properties ********************//

// We can add new properties to an existing object by simply giving it a value.
// person.nationality = "English";

// ******************* Deleting Properties ************************************** //
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// delete person.age;
delete person["age"];

for (let x in person) {
  txt += person[x] + " ";
  console.log(txt);
}

// The delete keyword deletes both the value of the property and the property itself.

// After deletion, the property cannot be used before it is added back again.

// The delete operator is designed to be used on object properties. It has no effect on variables or functions.

// The delete operator should not be used on predefined JavaScript object properties. It can crash your application.




