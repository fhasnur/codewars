/*
  Bit Counting
  https://www.codewars.com/kata/526571aae218b8ee490006f4
*/

export function countBits(n: number): number {
  return [...n.toString(2)].filter(e => e === '1').length;
}

console.log(countBits(10));