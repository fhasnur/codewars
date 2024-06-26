/*
  Credit Card Mask
  https://www.codewars.com/kata/5412509bd436bd33920011bc
*/

const maskify = cc => cc.slice(0, -4).replace(/[0-9a-zA-Z]/g, '#') + cc.slice(-4);

console.log(maskify('4556364607935616'));