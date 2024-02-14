/*
  Sum Arrays
  https://www.codewars.com/kata/53dc54212259ed3d4f00071c
*/

// function sum(numbers) {
//   if (numbers.length === 0) return 0;
//   let result = 0
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// };

const sum = numbers => numbers.length ? numbers.reduce((acc, curr) => acc + curr) : 0;

console.log(sum([1, 5.2, 4, 0, -1]));