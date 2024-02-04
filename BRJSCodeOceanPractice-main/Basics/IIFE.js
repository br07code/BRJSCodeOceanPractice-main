// "use strict";

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined

// 1. 
// (function () {
//     // …
//   })();
  
//   2. 
//   (() => {
//     // …
//   })();
  
//   3. 
//   (async () => {
//     // …
//   })();

// // Traditional Way
// (function dislayFullName(){
//     console.log(`Balaram Roy`);
// })();

// Using arrow function
// (() => {
//     console.log('Balaram Roy');
// }
// )();

// Passing variable name and access it

// ((name) => {
//     console.log('Balaram Roy', {name});
// }
// )(`Balaram`);

((name) => {
    console.log(`My name is: ${name}`);
})(`Balaram`)

