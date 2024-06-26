/*
  Fake Binary
  https://www.codewars.com/kata/57eae65a4321032ce000002d
*/

// function fakeBin(x) {
//   return x.split('').map(el => el >= 5 ? 1 : 0).join('');
// }

const fakeBin = x => x.split('').map(el => el >= 5 ? 1 : 0).join('');

console.log(fakeBin('45385593107843568'));