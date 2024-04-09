/*
  Sum of a sequence
  https://www.codewars.com/kata/586f6741c66d18c22800010a
*/

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  let result = 0;
  for (let i = begin; i <= end; i += step) {
    result += i;
  }
  return result;
};

console.log(sequenceSum(2, 6, 2));