/*
  Find the stray number
  https://www.codewars.com/kata/57f609022f4d534f05000024
*/

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

console.log(stray([17, 17, 3, 17, 17, 17, 17]));