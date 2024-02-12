/*
  Beginner Series #2 Clock
  https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
*/

// function past(h, m, s) {
//   return (h * 3600 * 1000) + (m * 60 * 1000) + (s * 1000);
// }

const past = (h, m, s) => 1000 * (h * 3600 + m * 60 + s);

console.log(past(0, 1, 1));