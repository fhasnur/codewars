// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
//   let result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

/*
@yalasta
Sedikit feedback pak, paramater di map((el, i)) el atau value nya required karena perlu index nya tapi ga pernah di pake, banyak programmer mengganti dengan underscore jadi nya map((_, i))
*/

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

const reverseSeq = (n) => [...Array(n)].map((_, i) => n - i);

console.log(reverseSeq(5));
