/*
  Convert number to reversed array of digits
  https://www.codewars.com/kata/5583090cbe83f4fd8c000051
*/

// function digitize(n) {
//   return n.toString().split('').map((item) => +item).reverse();
// }

const digitize = n => n.toString().split('').map((item) => +item).reverse();

console.log(digitize(35231));