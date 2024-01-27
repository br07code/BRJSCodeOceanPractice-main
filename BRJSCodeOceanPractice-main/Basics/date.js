"use strict";

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString);
console.log(myDate.toTimeString());
console.log(typeof myDate); //object
console.log(myDate.getMonth()); //Month start from 0

let myCreatedDate = new Date(1997, 8, 10)
console.log(myCreatedDate.toDateString());

