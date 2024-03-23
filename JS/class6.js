// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.unshift("watermelon")
// last e element push kore : push method
// First e element inject kore : unshift method

// pop => last element ber kore dibe
// shift => first element ber kore dibe

// fruits.shift()

// fruits.splice(2, 1, "Lemon", "Kiwi");
// let newFruits = fruits.slice(1);

// console.log(newFruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const callBack = function (fruit, index) {
//     console.log(fruit, index);
//   return fruit.toLowerCase();
// };

// const newArray = fruits.map(callBack);

// console.log(fruits);
// console.log(newArray);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const newArray = fruits.map((element, index) => {
//   console.log(element, index);
//   return element.toLowerCase();
// });

// console.log(newArray);

// const newArray = fruits.filter((element, i) => {
//   if (element % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(newArray);

// const numbers = [50, 50, 96, 21, 12];

// function callBack(old, newVal) {
//   return old * newVal;
// }

// const sum = numbers.reduce(callBack,1);

// console.log(sum);

const ages = [3, 10, 18, 20,56];

function checkAge(age) {
  return age > 18;
}

const filtered = ages.filter(checkAge)

console.log(filtered)




