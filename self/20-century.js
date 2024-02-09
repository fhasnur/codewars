// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

/* 
1-100
101-200
201-300
...
1901-2000
2001-2100
*/

// function century(year) {
//   const result = (year + 99) / 100;
//   return Math.floor(result);
// }

// CO
// const century = year => Math.ceil(year / 100);

const century = year => Math.floor((year + 99) / 100);

console.log(century(1999));