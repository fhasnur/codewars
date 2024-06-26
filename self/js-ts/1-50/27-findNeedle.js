/*
  A Needle in the Haystack
  https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
*/

// function findNeedle(haystack) {
//   let result = '';

//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === 'needle') result += `found the needle at position ${i}`;
//   }

//   return result;
// }

// const findNeedle = haystack => {
//   const needleIndex = haystack.findIndex(item => item === 'needle');
//   return `found the needle at position ${needleIndex}`;
// }

const findNeedle = haystack => `found the needle at position ${haystack.findIndex(item => item === 'needle')}`;

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));