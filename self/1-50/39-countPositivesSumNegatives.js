/*
  Count of positives / sum of negatives
  https://www.codewars.com/kata/576bb71bbbcf0951d5000044
*/

// function countPositivesSumNegatives(input) {
//   let sum = 0;
//   let count = 0;
//   let result = [];

//   if (input == null || input.length == 0) {
//     return result;
//   } else {
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] > 0) sum++;
//       if (input[i] < 0) count += input[i]
//     }
//     result.push(sum, count);
//     return result;
//   }
// }

const countPositivesSumNegatives = input => {
  let sum = 0;
  let count = 0;
  let result = [];

  if (input == null || input.length == 0) {
    return result;
  } else {
    input.map((el) => el > 0 ? sum++ : count += el)
    result.push(sum, count);
    return result;
  }
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));