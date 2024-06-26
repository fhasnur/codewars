/*
  String ends with?
  https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
*/

// Cara orang lain lebih singkat :v
// const solution = (str, ending) => str.endsWith(ending);

const solution = (str, ending) => ending !== '' ? str.slice(-ending.length) === ending : true;

console.log(solution('abc', ''));