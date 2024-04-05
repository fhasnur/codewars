/*
  Count the Digit
  https://www.codewars.com/kata/566fc12495810954b1000030
*/

const nbDig = (n, d) =>
  [...Array(n + 1)]
    .map((_, i) => (i ** 2).toString()).join('')
    .match(new RegExp(d, 'g')).length;

console.log(nbDig(5750, 0));