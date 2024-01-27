"use strict";

const birthName = new String(`BalaramRoy`)

console.log(birthName[0]);
console.log(birthName.__proto__);

console.log(birthName.length);
console.log(birthName.charAt(6));
console.log(birthName.toLowerCase());
console.log(birthName.toUpperCase());
console.log(birthName.indexOf(`m`));
console.log(birthName.includes(`l`, 4));
//console.log(birthName.substring(1,8));

const newBirthName = birthName.substring(4,7)
//const newBirthName = birthName.substring(-4,7)  //negative indexing wil not affect
console.log(newBirthName);

//const anotherName = birthName.slice(1,4)
const anotherName = birthName.slice(-1,-2)
console.log(anotherName);

const newFamilyName = "     Balaram Chandra Roy     "
console.log(newFamilyName);
console.log(newFamilyName.trim()); //trim spaces from both end
console.log(newFamilyName.replace(`Chandra`, 'Dilip'))
console.log(newFamilyName.split(`Chandra`));
console.log(birthName.split(`a`));
