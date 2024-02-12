/*
  Calculate average
  https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
*/

// function findAverage(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result += array[i] / array.length;
//   }
//   return result;
// }

const findAverage = array => !array.length ? 0 : array.reduce((acc, curr) => acc + curr, 0) / array.length;

console.log(findAverage([1, 2, 3, 4]));