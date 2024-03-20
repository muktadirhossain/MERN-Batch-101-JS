// let num1 = 3.32

// console.log(Math.round(num1))
// console.log(Math.floor(num1))
// console.log(Math.ceil(num1))
// console.log(Math.trunc(num1))

// let negNum = -1000

// console.log(Math.abs(negNum))

// console.log(Math.floor(Math.random() * 6))

// ! JS Date::

/* 

from floor 1-10 : 12,000
from floor 11-15: 10,000 
from 16 - above : 9,000 

12 = 10*12000 + 2 * 10000

14 = 10*12000 + 4*10000

20 = (10*120000 +5*1000) +5*9000

*/
function brickCalculator(floor) {
  if (floor <= 10) {
    return floor * 12000;
  } else if (floor > 10 && floor <= 15) {
    let first10Floor = 10 * 12000;
    let remainingFloor = floor - 10;
    let totalBrick = first10Floor + remainingFloor * 10000;
    // totalBrick = 10*12000 + floor - 10*10000
    return totalBrick;
  } else {
    let forFirst15Floors = 10 * 12000 + 5 * 10000;
    let remainingFloor = floor - 15 * 9000;
    let totalBrick = forFirst15Floors + remainingFloor;
    return totalBrick;
  }
}
