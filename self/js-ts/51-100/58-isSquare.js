/*
  You're a square!
  https://www.codewars.com/kata/54c27a33fb7da0db0100040e
*/

// const isSquare = n => {
//   const x = Math.sqrt(n);

//   if (n < 0) return false;
//   if (Number.isInteger(x)) return true;
//   return false;
// }

const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log(isSquare(25));
