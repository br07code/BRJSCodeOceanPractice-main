const arr = [1,2,3,4,5,6,7]

// ************************ forof loop ******************************************//
// for (const iterator of object) {
    
// }

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello Balaram Roy"

// for (const greet of greetings) {
//     console.log(greet);

// }


// Map

// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

const newMap = new Map()

newMap.set("IN", "India")
newMap.set("FR", "France")
newMap.set("ENG", "England")

// for (const count of newMap) {
//     console.log(count);
// }
// O/P:
// [ 'IN', 'India' ]
// [ 'FR', 'France' ]
// [ 'ENG', 'England' ]

// Printing in Key-Value pair of map

// for (const [count,val] of newMap) {
//     console.log(count, val);
// }
// O/P:
// IN India
// FR France
// ENG England


// ************************************** forin Loop ********************************************** //
const myLan = {
    js: "JavaSciprt",
    jv: "Java",
    cp: "C++"
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const key in myLan) {
//     console.log(key);
// }
// O/P:
// js
// jv
// cp

// for (const key in myLan) {
//     console.log(myLan[key]);
// }
// O/P:
// JavaSciprt
// Java
// C++

const myArr = [2,4,7,3,9,8]

// for (const key in myArr) {
//     console.log(key);  
// };
// O/P:
// 0
// 1
// 2
// 3
// 4
// 5

// for (const key in myArr) {
//     console.log(myArr[key]);
// }
// O/P:
// 2
// 4
// 7
// 3
// 9
// 8

// ***************************** forEach() **************************************//
// The forEach() method calls a function (a callback function) once for each array element.

// myArr.forEach(function(val){
//     console.log(val);
// })
// O/P:
// 2
// 4
// 7
// 3
// 9
// 8

myArr.forEach((item) => {
    console.log(item);
})