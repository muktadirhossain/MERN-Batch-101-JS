// const person = {
//   lastName: "Doe",
//   firstName: "John",
//   age: 20,
//   number: 1740451306,
//   hobbies: ["cricket", "cinema", "music"],
//   isAdult: function () {
//     if (this.age >= 18) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   fullName: function () {
//     return this.firstName+ " " + this.lastName;
//   },
// };

// Nan = Not a number

// Primitive Data type => Number, Boolean, String, null,undefined
// Reference: DataType => Object , Array

// * if you want to use this keyword do not use an anonymous arrow function.
// * Function inside Object is called a method.

// console.log(person.isAdult());
// console.log(person.fullName());
// console.log(person.hobbies);

//! Regular Function::
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// !Function Expression
// const isAdult = function(age){
//     if (age >= 18) {
//         return true;
//       } else {
//         return false;
//       }
// }

// ! Arrow Function::
// const isAdult =(age)=>{
//     if (age >= 18) {
//         return true;
//       } else {
//         return false;
//       }
// }

//! Anonymous  Function::

// function (age){
//     if (age >= 18) {
//         return true;
//       } else {
//         return false;
//       }
// }

// const myObj = new Object();
// myObj.name ="Rijon";
// myObj.age =30;

// const str = new String("yy")

// console.log(str)

// console.log(myObj)

// ! String Method::
// const str = "ccc country";
// const trimStr = str.trim();
// const upperStr = str.toUpperCase();
// const lowerStr = str.toLowerCase();
// const replaceStr = str.replace("cou", "dty");
// const replaceAllStr = str.replaceAll(" ", "_");

// seperate first 3 latter
// first 3 letter in capital
// last latter are small letters

// console.log(replaceStr)

// console.log(lowerStr)
// console.log(upperStr)
// console.log(str.length)
// console.log(trimStr.length)

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);

// const string = "ccc country";

// function myStringFunction(string) {
//   const subString = string.substr(0, 3).toUpperCase();
//   const remainingLetters = string.slice(4, 12);

//   const finalResult = subString.concat(" ", remainingLetters);
//   return finalResult
// }

// console.log(finalResult);
// console.log(remainingLetters);

// // console.log(part)
// console.log(subString);


// ! Template Literals::
let name = "Shawon"
name ="Akash"
name ="Anik"
const str = `Hello Mr. ${name}` 
console.log(str)



