/*
  Sum of two lowest positive integers
  https://www.codewars.com/kata/558fc85d8fd1938afb000014
*/

function sumTwoSmallestNumbers(numbers) {
  const shortedNumbers = numbers.sort((a, b) => a - b);
  const firstSmallest = shortedNumbers[0];
  const secondtSmallest = shortedNumbers[1];

  return firstSmallest + secondtSmallest;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));