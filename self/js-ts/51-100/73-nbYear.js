/*
  Growth of a Population
  https://www.codewars.com/kata/563b662a59afc2b5120000c6
*/

// let year = 0;

// function nbYear(p0, percent, aug, p) {
//   let result = p0 + p0 * percent * 0.01 + aug;
//   if (result < p) {
//     year++;
//     nbYear(result, percent, aug, p);
//   } else {
//     Math.floor(result);
//   }
//   return year + 1;
// }

function nbYear(p0, percent, aug, p) {
  let year = 0;

  do {
    p0 = Math.floor(p0 + p0 * percent * 0.01 + aug);
    year++;
  } while (p0 < p);

  return year;
}

console.log(nbYear(1500000, 0.25, 1000, 2000000));