/*
  Square Every Digit
  https://www.codewars.com/kata/546e2562b03326a88e000020
*/

const squareDigits = num => Number(String(num).split('').map(el => el * el).join(''));

console.log(squareDigits(3212));