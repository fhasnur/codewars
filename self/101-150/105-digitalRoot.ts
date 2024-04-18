/*
  Sum of Digits / Digital Root
  https://www.codewars.com/kata/541c8630095125aba6000c00
*/

export const digitalRoot = (n: number): number => {
  if (n < 10) return n;
  return digitalRoot([...String(n)].reduce((acc, cur) => acc + +cur, 0));
};

console.log(digitalRoot(493193));