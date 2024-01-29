"use strict"

// Values in an object can be another object:

const myOuterObject = {
    name: "Labyrinth",
    field1: "socialNetworking",
    age: 15,
    myFirstInnerObject: {
        field2: "agriculture",
        age: 10,
        mySecondInnerObject:{
            field3: "finance",
            age: 9
        }
    }

}

// *********************** We can access nested objects using the dot notation or the bracket notation: ****************//

// console.log(myOuterObject.age); //15

// console.log(myOuterObject.myFirstInnerObject.age); //10

// console.log(myOuterObject.myFirstInnerObject.mySecondInnerObject.age); //9

//console.log(myOuterObject["name"]); // Labyrinth

// console.log(myOuterObject.myFirstInnerObject["field2"]); //agriculture

console.log(myOuterObject.myFirstInnerObject.mySecondInnerObject["field3"]); //finance

// console.log(myOuterObject.myFirstInnerObject);
// // O/p:
// // agriculture
// // {
// //   field2: 'agriculture',
// //   age: 10,
// //   mySecondInnerObject: { field3: 'finance', age: 9 }
// // }

// console.log(myOuterObject["myFirstInnerObject"]["age"]); //10

let p1 = "myOuterObject"
let p2 = "myFirstInnerObject"
let p3 = "mySecondInnerObject"
let p4 = "field3"

// console.log(myOuterObject[p2][p3][p4]); //9
// console.log(p1[p2][p3][p4]); // Error