/*
  Invert values
  https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
*/

// function invert(array) {
//   return array.map((el) => -el);
// }

const invert = array => array.map(el => -el);

console.log(invert([1, -2, 3, -4, 5]));