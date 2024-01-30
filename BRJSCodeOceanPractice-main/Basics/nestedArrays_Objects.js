"use strict";

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12345"
tinderUser.name = "BalaramTinder"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "ndsvsfnksn@gmail.com",
    password: "nosnlfn22elnl",
    fullName: {
        userFullName: {
            firstName: "Balaram",
            lastName: "Roy"
        }
    }
}

// console.log(regularUser.fullName); //{ userFullName: { firstName: 'Balaram', lastName: 'Roy' } }

// console.log(regularUser.fullName.userFullName); 
// // { firstName: 'Balaram', lastName: 'Roy' }
 
// console.log(regularUser.fullName.userFullName.firstName); //Balaram


// ************************Combination of Objects ********************************* //
const obj1 = {
    1: "A",
    2: "B",
    3: "C"
}

const obj2 = {
    4: "D",
    5: "E",
    6: "F"
}

// combination part

// const obj3 = {obj1, obj2} 
// console.log(obj3);
//// o/p:
// {
//     obj1: { '1': 'A', '2': 'B', '3': 'C' },
//     obj2: { '4': 'D', '5': 'E', '6': 'F' }
//   }

// Combine using constructor assign method
// Syntax: const returnedTarget = Object.assign(target, source);
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); //{ '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }

// // Combine using spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3); //const returnedTarget = Object.assign(target, source);


// ********************************* Example of Data is flowing from Database ********************************
const users = [
    {
        id: "1",
        email: "bncjbcjaBcfak@gmail.com"
    },
    {
        id: "2",
        email: "jnvjnvnln@yahoo.com",
    },
    {
        id: "3",
        email: "nvnnlnlnln@hotmail.com"
    }
]

// console.log(users[0].email); // bncjbcjaBcfak@gmail.com
// console.log(users[1].id); // 2

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '12345', 'BalaramTinder', false ]
// console.log(Object.entries(tinderUser));
// O/P : 
// [
//     [ 'id', '12345' ],
//     [ 'name', 'BalaramTinder' ],
//     [ 'isLoggedIn', false ]
//   ]  
  
console.log(tinderUser.hasOwnProperty(`isLoggedIn`)); // true