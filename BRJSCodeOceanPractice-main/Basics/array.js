"use strict";

// Decaration of array

const myArray1 = [1, 2, 3, 4, 5, 6, 7, 8]
const myArray2 = ["Baba", "Maa", "Guru"]
const myArray3 = new Array(2, 3, 4, 5, "Balaram", 2.5) //In JS array[] can hold any data types
const myArray4 = []

myArray4[0] = 1
myArray4[1] = 2
myArray4[2] = 3

// console.log(myArray3);


// Methods of array

//console.log(myArray2.length); // The length() method returns the length of the array

// myArray4.push("Balaram") // The push() method adds a new element at the end 
// console.log(myArray4); // [ 1, 2, 3, 'Balaram' ]

// myArray4.pop(2) //The pop() method removes the last element from an array
// console.log(myArray4); //[ 1, 2 ]

// myArray4.shift() //The shift() method removes the first array element and "shifts" all other elements to a lower index.
// console.log(myArray4); //[ 2, 3 ]

//The shift() method returns the value that was "shifted out"
// let x = myArray4.shift()
// console.log(x); //2

// myArray4.unshift("Balaram") //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
// console.log(myArray4); //[ 'Balaram', 1, 2, 3 ]

//The unshift() method returns the new array length:
// let y = myArray4.unshift()
// console.log(y); //3

// The concat() method creates a new array by merging (concatenating) existing arrays
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

//Merging two array
// const myArray5 = myArray1.concat(myArray2)
// console.log(myArray5);
// [
//     1,     2,      3,     
//     4,     5,      6,     
//     7,     8,      'Baba',
//     'Maa', 'Guru'
//   ]

//Merging Three array
const myArray6 = myArray1.concat(myArray2, myArray3)
console.log(myArray6);
// [
//     1,         2,      3,
//     4,         5,      6,
//     7,         8,      'Baba',
//     'Maa',     'Guru', 2,
//     3,         4,      5,
//     'Balaram', 2.5
//   ]

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
// const myArray7 = myArray6.join()
// console.log(myArray7); //1,2,3,4,5,6,7,8,Baba,Maa,Guru,2,3,4,5,Balaram,2.5

// const myArray8 = myArray6.join(" Do Code ")
// console.log(
// 1 Do Code 2 Do Code 3 Do Code 4 Do Code 5 Do Code 6 Do Code 7 Do Code 8 Do Code Baba Do Code Maa Do Code Guru Do Code 2 Do Code 3 Do Code 4 Do Code 5 Do Code 
// Balaram Do Code 2.5


// for(let i = 0; i < myArray4.length; i++){
//     //console.log(myArray1[i]);
//     // console.log(myArray2[i]);
//     // console.log(myArray3[i]);
// console.log(myArray4[i]);
// }




