// For Loop::
// for(let i= 0; i< 100 ; i++){
//     console.log(i);
// }

// for(let trump = 0; trump < 100; trump++) {
//     console.log("Hello",trump);
// }

// While Loop::

// let i = 0;
// while (i < 10) {
//  console.log(i);
//   i++;
// }

// Switch Statement:

/*
 100
 0 - 32 =F
 33 - 40 = D
 41 - 50 = C
 51 - 60 = B
 61 - 70 = A
 71 - 100 = A+

 Rijon => "Blue",
 Siam => "Green",
 Faisal => "Yellow",
 Anik => "Tomato",
 Tahsin => "Violet"

 */

// const myName = "Tahsin";

// switch (myName) {
//   case "Rijon":
//     console.log("Blue");
//     break;
//   case "Siam":
//     console.log("Green");
//     break;
//   case "Anik":
//     console.log("Tomato");
//     break;
//   case "Tahsin":
//     console.log("Violet");
//     break;
//   default:
//     console.log("Name doesn't match.");
//     break;
// }

// if (myName == "Rijon") {
//   console.log("Blue");
// } else if (myName == "Siam") {
//   console.log("Green");
// } else if (myName == "Anik") {
//   console.log("Tomato");
// } else if (myName == "Tahsin") {
//   console.log("Violet");
// } else {
//   console.log("Name doesn't match.");
// }

// let friendAge = 20;
// let myAge = true;

// myAge >= 18 ? console.log(" I can Vote.") : console.log(" I can not Vote");

// console.log(typeof myAge)

// if (myAge >= 18) {
//   console.log(" I can Vote.");
// } else {
//   console.log(" I can not Vote");
// }

// if(myAge === friendAge) {
//     console.log("Tomar amr Boyosh ek")
// }else{
//     console.log("Tomar amr Boyosh Alada")
// }

//  myAge = myAge + friendAge

const array = [5, 14, 25, 66, 65, 21];
// Find out Biggest and Smallest Number
// Print each element of array

let sum = 0;
for (let i = 0; i < array.length; i++) {
    console.log("sum", sum);
    console.log("Element", array[i]);
    console.log("_______");
  sum = sum + array[i];
}

console.log(sum)

// console.log(array.length)

let biggest = 0;

for (let i = 0; i < array.length; i++) {
  console.log("biggest Num", biggest);
  console.log("Element", array[i]);
  console.log("_______");
  if (biggest < array[i]) {
    biggest = array[i];
  }
}

console.log("Result", biggest);
