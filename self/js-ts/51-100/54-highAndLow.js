/*
  Highest and Lowest
  https://www.codewars.com/kata/554b4ac871d6813a03000035
*/

const highAndLow = numbers => {
  const shortedNum = numbers.split(' ').sort((a, b) => b - a);
  const highestNum = shortedNum[0];
  const lowestNum = shortedNum[shortedNum.length - 1];

  return `${highestNum} ${lowestNum}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));