/*
  Sum of the first nth term of Series
  https://www.codewars.com/kata/555eded1ad94b00403000071
*/

const SeriesSum = n => {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += 1 / (1 + i * 3);
  }
  return result.toFixed(2);
};

console.log(SeriesSum(4));