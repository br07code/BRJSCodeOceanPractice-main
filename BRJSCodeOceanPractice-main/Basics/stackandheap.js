"use strict";


//Note:
// Primitive(Stack), Non-Primitive(Heap)


let birthName = "Balaram"

let familyName = birthName

familyName = "Roy"

//console.log(birthName);
//console.log(familyName);


//object
let userOne = {
    email : "balaram.7872roy@gmail.com",
    upassword : "12er22"
}

let userTwo = userOne

userTwo.email = "bjbbdnln.com"

console.log(userOne.email);
console.log(userTwo.email);

