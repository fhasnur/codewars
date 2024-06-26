/*
  Exes and Ohs
  https://www.codewars.com/kata/55908aad6620c066bc00002a
*/

// function XO(str) {
//   str = str.toLowerCase();

//   let countX = 0;
//   let countO = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'x') {
//       countX++;
//     }
//     else if (str[i] === 'o') {
//       countO++;
//     }
//   }

//   return countX === countO;
// }

const XO = str => {
  str = str.toLowerCase();

  let countX = 0;
  let countO = 0;

  str.split('').map(el => el === 'x' ? countX++ : el === 'o' ? countO++ : null);

  return countX === countO;
}

console.log(XO("xxOo"));