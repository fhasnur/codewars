/*
  Find The Parity Outlier
  https://www.codewars.com/kata/5526fc09a1bbd946250002dc
*/

export function findOutlier(integers: number[]): number {
  const evenNum: number[] = [];
  const oddNum: number[] = [];

  integers.forEach(el => {
    el % 2 === 0
      ? evenNum.push(el)
      : oddNum.push(el);
  });

  return evenNum.length > oddNum.length
    ? oddNum[0]
    : evenNum[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));