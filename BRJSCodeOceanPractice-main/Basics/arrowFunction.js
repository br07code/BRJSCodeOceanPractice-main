// An arrow function expression is a compact alternative to a traditional function expression, 
// with some semantic differences and deliberate limitations in usage:

// () => {}

// let func = (arg1, arg2, ..., argN) => expression;

// This creates a function func that accepts arguments arg1..argN, then evaluates the expression on 
// the right side with their use and returns its result.

// In other words, it’s the shorter version of:

// let func = function(arg1, arg2, ..., argN) {
//   return expression;
// };

// Explicit return
// const addTwoVal = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwoVal = (num1, num2) => num1 + num2

// OR

// const addTwoVal = (num1, num2) => (num1 + num2)

// console.log(addTwoVal(7, 5)); //12



const userName = {
    firstName:`Balaram`,
    lastName:`Roy`
}

// Return a object

// const returnObject = (num1, num2) => ({userName}) //{ userName: { firstName: 'Balaram', lastName: 'Roy' } }
const returnObject = (num1, num2) => ({firstName: `RoyBalaram`}) 
console.log(returnObject(3, 4));