/*
  Is n divisible by x and y?
  https://www.codewars.com/kata/5545f109004975ea66000086
*/

// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

console.log(isDivisible(48, 3, 4));