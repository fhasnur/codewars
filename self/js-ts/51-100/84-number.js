/*
  Testing 1-2-3
  https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
*/

const number = array => array.map((el, i) => `${i + 1}: ${el}`);

console.log(number(["a", "b", "c"]));