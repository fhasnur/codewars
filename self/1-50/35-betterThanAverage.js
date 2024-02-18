/*
  How good are you really?
  https://www.codewars.com/kata/5601409514fc93442500010b
*/

// function betterThanAverage(classPoints, yourPoints) {
//   let result = 0;
//   for (let i = 0; i < classPoints.length; i++) {
//     result += classPoints[i] / classPoints.length;
//   }
//   return yourPoints > result;
// }

const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((acc, curr) => acc + curr) / classPoints.length;

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));