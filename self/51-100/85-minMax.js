/*
  The highest profit wins!
  https://www.codewars.com/kata/559590633066759614000063
*/

function minMax(arr) {
  const arrShorted = arr.sort((a, b) => a - b);
  const smallest = arrShorted.slice(0, 1);
  const highest = arrShorted.slice(-1);
  return smallest.concat(highest);
}

console.log(minMax([1, 2, 3, 4, 5]));