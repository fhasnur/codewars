/*
  Multiples of 3 or 5
  https://www.codewars.com/kata/514b92a657cdc65150000006
*/

function multiplesOfThreeOrFive(number: number): number {
  return number > 0 ?
    [...Array(number).keys()]
      .filter(e => e % 3 === 0 || e % 5 === 0)
      .reduce((acc, curr) => acc + curr, 0)
    : 0;
}

console.log(multiplesOfThreeOrFive(10));