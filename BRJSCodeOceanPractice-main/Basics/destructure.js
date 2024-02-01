"use strict";

// The destructuring assignment syntax is a JavaScript expression that makes it possible 
// to unpack values from arrays, or properties from objects, into distinct variables.
// The destructuring assignment uses similar syntax but uses it on the left-hand side of the assignment instead. 
// It defines which values to unpack from the sourced variable.

// The destructuring assignment in JavaScript provides a neat and DRY way to extract values from your arrays and objects.


// ********************************** Array destructure *****************************************************//

// Array destructuring is a unique technique that allows you to neatly extract an array’s value into new variables.

// OLD Way :

// For instance, without using the array destructuring assignment technique, 
// we would copy an array’s value into a new variable like so:

// const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

// const firstName = profile[0];
// const lastName = profile[1];
// const website = profile[2];

// console.log(firstName); // "Oluwatobi"
// console.log(lastName); // "Sofela"
// console.log(website); // "codesweetly.com"

// Notice that the snippet above has a lot of repeated code which is not a DRY (Don’t Repeat Yourself) way of coding.

// Let’s now see how array destructuring makes things neater and DRYer.

// const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

// // destructing 
// const [firstName, lastName, website] = profile
// console.log(firstName, lastName, website);

// Like magic, we’ve cleaned up our code by placing the three new variables (that is, firstName, lastName, and website) 
// into an array object ([...]). Then, we assigned them the profile array's values.

// ***************************** Direct Array Destructuring ******************************** //
// const [firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"]

// console.log(firstName, lastName, website);

// ******************* Array Destructuring to Assign the Rest of an Array Literal to a Variable ********************* //

// JavaScript allows you to use the rest operator(...) within a destructuring array to assign 
// the rest of a regular array to a variable.
// const [firstName, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com"];

// console.log(firstName); // "Oluwatobi"
// console.log(otherInfo); // ["Sofela", "codesweetly.com"]

// Note: Always use the rest operator as the last item of your destructuring array to avoid getting a SyntaxError.

// Now, what if you only want to extract "codesweetly.com"? Let's discuss the technique you can use below.


// ********************** Array Destructuring to Extract Values at Any Index *********************** //

// Here’s how you can use array destructuring to extract values at any index position of a regular array:

// const [, , website] = ["Oluwatobi", "Sofela", "codesweetly.com"];

// console.log(website); // "codesweetly.com"

// In the snippet above, we used commas to skip variables at the destructuring array's first and second index positions.
// By so doing, we were able to link the website variable to the third index value of the regular array 
// on the right side of the assignment operator (that is, "codesweetly.com").
// At times, however, the value you wish to extract from an array is undefined. 
// In that case, JavaScript provides a way to set default values in the destructuring array. 
// Let’s learn more about this below.

// ********************** Array Destructuring to Extract Values from an Array to a Function’s Parameters **************** //
// Here’s how you can use array destructuring to extract an array’s value to a function’s parameter:

// // Define an array with two items:
// const profile = ["Oluwatobi", "Sofela"];

// // Define a function with one destructuring array containing two parameters:
// function getUserBio([firstName, lastName]) {
//   return `My name is ${firstName} ${lastName}.`;
// }

// // Invoke getUserBio while passing the profile array as an argument:
// getUserBio(profile);

// // The invocation above will return:
// "My name is Oluwatobi Sofela."

// In the snippet above, we used an array destructuring parameter to extract 
// the profile array’s values into the getUserBio’s firstName and lastName parameters.

// Note: An array destructuring parameter is typically called a destructuring parameter.

// Here’s another example:

// // Define an array with two string values and one nested array:
// const profile = ["codesweetly.com", "Male", ["Oluwatobi", "Sofela"]];

// // Define a function with two destructuring arrays containing a parameter each:
// function getUserBio([website, , [userName]]) {
//   return `${userName} runs ${website}`;
// }

// // Invoke getUserBio while passing the profile array as an argument:
// getUserBio(profile);

// // The invocation above will return:
// "Oluwatobi runs codesweetly.com"
// In the snippet above, we used two array destructuring parameters to extract 
// the profile array’s values into the getUserBio’s website and userName parameters.

// There are times you may need to invoke a function containing a destructuring parameter without passing 
// any argument to it. In that case, you will need to use a technique that prevents the browser from throwing a TypeError.

// Let’s learn about the technique below.
// Invoke a Function Containing Array Destructuring Parameters Without Supplying Any Argument
// function getUserBio([firstName]) {
//     console.log(
//       "Do something else that does not need the destructuring parameter."
//     );
//     return `My name is ${firstName}.`;
//   }

//   Now, let’s invoke the getUserBio function without passing any argument to its destructuring parameter:
// getUserBio();

// After invoking the getUserBio function above, the browser will throw an error 
// similar to TypeError: undefined is not iterable.

// The TypeError message happens because functions containing a destructuring parameter expect you to supply at least one argument.

// So, you can avoid such error messages by assigning a default argument to the destructuring parameter.

// Here’s an example:

// function getUserBio([firstName] = []) {
//     console.log(
//       "Do something else that does not need the destructuring parameter."
//     );
//     return `My name is ${firstName}.`;
//   }
//   Notice in the snippet above that we assigned an empty array as the destructuring parameter’s default argument.
  
//   So, let’s now invoke the getUserBio function without passing any argument to its destructuring parameter:
  
//   getUserBio();
//   The function will output:
  
//   "Do something else that does not need the destructuring parameter."
//   "My name is undefined."

// Keep in mind that you do not have to use an empty array as the destructuring parameter’s default argument. 
// You can use any other value that is not null or undefined.

// So, now that we know how array destructuring works, let's discuss object destructuring so we can see the differences.

// **************************** Object Destructuring in JavaScript ************************************ //

// Object destructuring is a unique technique that allows us to neatly extract an object’s value into new variables.

//OLD WAY :
// For instance, without using the object destructuring assignment technique, we would extract 
// an object’s value into a new variable like so:

// const profile = {
//     firstName: "Oluwatobi", 
//     lastName: "Sofela", 
//     website: "codesweetly.com"
//   };
  
//   const firstName = profile.firstName;
//   const lastName = profile.lastName;
//   const website = profile.website;
  
//   console.log(firstName); // "Oluwatobi"
//   console.log(lastName); // "Sofela"
//   console.log(website); // "codesweetly.com"

// Notice that the snippet above has a lot of repeated code which is not a DRY (Don’t Repeat Yourself) way of coding.

// Let’s now see how the object destructuring assignment makes things neater and DRY.

// const profile = {
//     firstName: "Oluwatobi", 
//     lastName: "Sofela", 
//     website: "codesweetly.com"
//   };
  
//   const { firstName: firstName, lastName: lastName, website: website } = profile;
  
//   console.log(firstName); // "Oluwatobi"
//   console.log(lastName); // "Sofela"
//   console.log(website); // "codesweetly.com"

// like magic, we’ve cleaned up our code by placing the three new variables 
// into a properties object ({...}) and assigning them the profile object’s values.

// In other words, we instructed the computer to extract the profile object’s values into 
// the variables on the left-hand side of the assignment operator.

// Therefore, JavaScript will parse the profile object and copy its first value ("Oluwatobi") into 
// the destructuring object’s first variable (firstName).

// Likewise, the computer will extract the profile object’s second value ("Sofela") into 
// the destructuring object’s second variable (lastName).

// Lastly, JavaScript will copy the profile object’s third value ("codesweetly.com") into 
// the destructuring object’s third variable (website).

// Keep in mind that in { firstName: firstName, lastName: lastName, website: website }, 
// the keys are references to the profile object’s properties – while the keys’ values represent the new variables. 

// Alternatively, you can use shorthand syntax to make your code easier to read.

// Here’s an example:

// const profile = {
//   firstName: "Oluwatobi", 
//   lastName: "Sofela", 
//   website: "codesweetly.com"
// };

// const { firstName, lastName, website } = profile;

// console.log(firstName); // "Oluwatobi"
// console.log(lastName); // "Sofela"
// console.log(website); // "codesweetly.com"

// In the snippet above, we shortened { firstName: firstName, age: age, gender: gender } to { firstName, age, gender }. 
// You can learn more about the shorthand technique here.

// Observe that the snippets above illustrated how to assign an object’s value to a variable 
// when both the object’s property and the variable have the same name.

// However, you can also assign a property’s value to a variable of a different name. Let’s see how.

// ****************** Object Destructuring When the Property’s Name Differs from That of the Variable **************** //
// JavaScript permits you to use object destructuring to extract a property’s value into a variable 
// even if both the property and the variable’s names are different.

// Here’s an example:

// const profile = {
//   firstName: "Oluwatobi", 
//   lastName: "Sofela", 
//   website: "codesweetly.com"
// };

// const { firstName: forename, lastName: surname, website: onlineSite } = profile;

// console.log(forename); // "Oluwatobi"
// console.log(surname); // "Sofela"
// console.log(onlineSite); // "codesweetly.com"
// console.log(website); // "ReferenceError: website is not defined"

// In the snippet above, the computer successfully extracted the profile object’s values into the 
// variables named forename, surname, and onlineSite—even though the properties and variables are of different names.

// Note: const { firstName: forename } = profile is equivalent to const forename = profile.firstName.

// Here’s another example:

// const profile = {
//   lastName: { familyName: "Sofela" }
// };

// const { lastName: { familyName: surname } } = profile;

// console.log(surname); // "Sofela"

// In the snippet above, the computer successfully extracted the profile object’s value into the surname 
// variable—even though the property and variable are of different names.

// Note: const { lastName: { familyName: surname } } = profile is equivalent to const surname = profile.lastName.familyName.

// Notice that so far, we’ve destructured the profile object by referencing it. However, 
// we can also do direct destructuring of an object. Let’s see how.

// ************************************* Direct Object Destructuring ************************************** //
// JavaScript permits direct destructuring of a properties object like so:

// const { firstName, lastName, website } = {
//   firstName: "Oluwatobi", 
//   lastName: "Sofela", 
//   website: "codesweetly.com"
// };

// console.log(firstName); // "Oluwatobi"
// console.log(lastName); // "Sofela"
// console.log(website); // "codesweetly.com"

// Suppose we prefer to separate your variable declarations from their assignments. In that case, JavaScript has you covered. Let see how.

// ***********Object Destructuring While Separating Variable Declarations from Their Assignments ***************** //

// Whenever you use object destructuring, JavaScript allows you to separate our 
// variable declarations from their assignments.

// Here’s an example:

// // Declare three variables:
// let firstName, lastName, website;

// // Extract values to the three variables above:
// ({ firstName, lastName, website } = {
//   firstName: "Oluwatobi", 
//   lastName: "Sofela", 
//   website: "codesweetly.com"
// });

// // Invoke the three variables:
// console.log(firstName); // "Oluwatobi"
// console.log(lastName); // "Sofela"
// console.log(website); // "codesweetly.com"

// Note:

// Make sure that you encase the object destructuring assignment in parentheses. By so doing, 
// the computer will know that the object destructuring is an object literal, not a block.

// Place a semicolon (;) after the parentheses of an object destructuring assignment. 
// By doing so, you will prevent the computer from interpreting the parentheses as an invocator of a function that 
// may be on the previous line.

// What if you want "Oluwatobi" assigned to the firstName variable—and the rest of the object’s values to 
// another variable? How can you do this? Let’s find out below.

// ********************** Object Destructuring to Assign the Rest of an Object to a Variable *********************** //

// JavaScript allows you to use the rest operator within a destructuring object to assign 
// the rest of an object literal to a variable.

// Here’s an example:

// const { firstName, ...otherInfo } = {
//   firstName: "Oluwatobi",
//   lastName: "Sofela",
//   website: "codesweetly.com"
// };

// console.log(firstName); // "Oluwatobi"
// console.log(otherInfo); // {lastName: "Sofela", website: "codesweetly.com"}

// Note: Always use the rest operator as the last item of your destructuring object to avoid getting a SyntaxError.

// At times, the value you wish to extract from a properties object is undefined. In that case, 
// JavaScript provides a way to set default values in the destructuring object. Let’s learn more about this below.

// ******************** Default Values Work in an Object Destructuring Assignment ************************ //
// Setting a default value can be handy when the value you wish to extract from an object does not exist (or is set to undefined).

// Here’s how you can set one inside a destructuring properties object:

// const { firstName = "Tobi", website = "CodeSweetly" } = {
//   firstName: "Oluwatobi"
// };

// console.log(firstName); // "Oluwatobi"
// console.log(website); // "CodeSweetly"

// In the snippet above, we set "Tobi" and "CodeSweetly" as the default values of the firstName and website variables.

// Therefore, in our attempt to extract the second property’s value from the right-hand side object, 
// the computer defaulted to "CodeSweetly"—because only a single property exists in {firstName: "Oluwatobi"}.

// So, what if you need to swap firstName’s value with that of website? Again, 
// you can use object destructuring to get the job done. Let’s see how below.

// ****************************** Object Destructuring to Swap Values ************************* //
// You can use the object destructuring assignment to swap the values of two or more different variables.

// Here’s an example:

// let firstName = "Oluwatobi";
// let website = "CodeSweetly";

// ({ firstName, website } = {firstName: website, website: firstName});

// console.log(firstName); // "CodeSweetly"
// console.log(website); // "Oluwatobi"

// The snippet above used direct object destructuring to reassign the firstName and website 
// variables with the values of the object literal on the right-hand side of the assignment operator.

// As such, firstName’s value will change from "Oluwatobi" to "CodeSweetly". 
// While website’s content will change from "CodeSweetly" to "Oluwatobi".

// Keep in mind that you can also use object destructuring to extract values from properties 
// to a function’s parameters. Let’s talk more about this below.

// ****************** Object Destructuring to Extract Values from Properties to a Function’s Parameters ************** //

// Here’s how you can use object destructuring to copy a property’s value to a function’s parameter:

// // Define an object with two properties:
// const profile = {
//   firstName: "Oluwatobi",s
//   lastName: "Sofela",
// };

// // Define a function with one destructuring object containing two parameters:
// function getUserBio({ firstName, lastName }) {
//   return `My name is ${firstName} ${lastName}.`;
// }

// // Invoke getUserBio while passing the profile object as an argument:
// getUserBio(profile);

// // The invocation above will return:
// "My name is Oluwatobi Sofela."

// In the snippet above, we used an object destructuring parameter to copy the profile 
// object’s values into getUserBio’s firstName and lastName parameters.

// Note: An object destructuring parameter is typically called a destructuring parameter.

// Here’s another example:

// // Define an object with three-parent properties:
// const profile = {
//   website: "codesweetly.com",
//   gender: "Male",
//   fullName: {
//     firstName: "Oluwatobi",
//     lastName: "Sofela"
//   }
// };

// // Define a function with two destructuring objects containing a parameter each:
// function getUserBio({ website, fullName: { firstName: userName } }) {
//   return `${userName} runs ${website}`;
// }

// // Invoke getUserBio while passing the profile object as an argument:
// getUserBio(profile);

// // The invocation above will return:
// "Oluwatobi runs codesweetly.com"

// In the snippet above, we used an object destructuring parameter to copy the profile 
// object’s values into getUserBio’s firstName and lastName parameters.

// Note: An object destructuring parameter is typically called a destructuring parameter.

// Here’s another example:

// // Define an object with three-parent properties:
// const profile = {
//   website: "codesweetly.com",
//   gender: "Male",
//   fullName: {
//     firstName: "Oluwatobi",
//     lastName: "Sofela"
//   }
// };

// // Define a function with two destructuring objects containing a parameter each:
// function getUserBio({ website, fullName: { firstName: userName } }) {
//   return `${userName} runs ${website}`;
// }

// // Invoke getUserBio while passing the profile object as an argument:
// getUserBio(profile);

// // The invocation above will return:
// "Oluwatobi runs codesweetly.com"


// In the snippet above, we used two destructuring parameters to copy the profile object’s 
// values into getUserBio’s website and userName parameters.

// Note: If you are unclear about the destructuring parameter above, you may grasp it better by reviewing this section.

// There are times you may need to invoke a function containing a destructuring parameter without passing any argument to it.
// In that case, you will need to use a technique that prevents the browser from throwing a TypeError.

// Let’s learn about the technique below.

// ***************** Invoke a Function Containing Destructured Parameters Without Supplying Any Argument ***************** //

// Consider the function below:

// function getUserBio({ firstName }) {
//   console.log(
//     "Do something else that does not need the destructuring parameter."
//   );
//   return `My name is ${firstName}.`;
// }

// Now, let’s invoke the getUserBio function without passing any argument to its destructuring parameter:

// getUserBio();

// After invoking the getUserBio function above, the browser will throw an error similar 
// to TypeError: (destructured parameter) is undefined.

// The TypeError message happens because functions containing a destructuring parameter expect 
// you to supply at least one argument.

// So, you can avoid such error messages by assigning a default argument to the destructuring parameter.

// Here’s an example:

// function getUserBio({ firstName } = {}) {
//   console.log(
//     "Do something else that does not need the destructuring parameter."
//   );
//   return `My name is ${firstName}.`;
// }
// Notice that in the snippet above, we assigned an empty object as the destructuring parameter’s default argument.

// So, let’s now invoke the getUserBio function without passing any argument to its destructuring parameter:

// getUserBio();
// The function will output:

// "Do something else that does not need the destructuring parameter."
// "My name is undefined."

