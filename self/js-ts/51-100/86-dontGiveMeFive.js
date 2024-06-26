/*
  Don't give me five!
  https://www.codewars.com/kata/5813d19765d81c592200001a
*/

function dontGiveMeFive(start, end) {
  return [...Array(end - start + 1)]
    .map((_, i) => start + i)
    .filter(el => !/5/.test(el)).length;
}

console.log(dontGiveMeFive(4, 17));