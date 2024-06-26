/*
  Array.diff
  https://www.codewars.com/kata/523f5d21c841566fde000009
*/

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(item => b.indexOf(item) === -1);
}

console.log(arrayDiff([1, 2, 3], [1, 2]));