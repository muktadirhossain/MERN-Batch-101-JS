// let age = 18 ;

// if(age > 18){
//     console.log("I can vote")
// }else if (age == 18){
//     // ! this block is executed::
//     console.log("Yes ! I am 18 now & I can vote.")
// }else{
//     console.log("I can't vote")
// }

// * JS Function::
// write a function to add two numbers:

// let num1 = 50;
// let num2 = 10;

// function sum() {
//   let result = num1 + num2;
//   console.log("The sum is:",result);
// }
// sum();

function sum(numOne, numTwo) {
  let result = numOne + numTwo;
  return result;
}
// dui vai 15, 10
// baba ma 40, 35

// let parentAge = sum(40, 35);
// console.log("P A:", parentAge);
// let ChildrenAge = sum(15, 10);
// console.log("C A:", ChildrenAge);

// let totalAge = sum(parentAge, ChildrenAge);
// console.log("Total age", totalAge);

// sum(500,5000);
// sum(33,44);
// sum(2,4);
// let mySum = sum(2,4)
// let yourSum = sum(20,40)
// console.log("The sum is:",mySum);
// console.log("Your Sum:",yourSum);

// ! Create a Function for measuring the Area of a room::

function calculateArea(length, width) {
  let result = length * width;
  return result;
}

// * This is Arrow Function:

// let calculateArea = (length, width) => {
//   let result = length * width;
//   return result;
// };

let result = calculateArea(10, 5);

// console.log(result);

function calculateTriangleArea() {
  // area = (height * base) /2
}

// Variables
// Function
// Conditions
// Loop =>  For Loop
// Array

//* একই কাজ কে বার বার করা কে লুপ বলেঃঃ

for (let i = 0; i < 10; i++) {
  console.log("Hello world!", i);
}
