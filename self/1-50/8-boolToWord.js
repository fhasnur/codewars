// function boolToWord(bool) {
//   let result = '';

//   if (bool) {
//     result += 'Yes'
//   } else {
//     result += 'No'
//   }

//   return result;
// }

const boolToWord = (bool) => bool ? 'Yes' : 'No';

console.log(boolToWord(true));