/*
  Mumbling
  https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
*/

// function accum(s) {
//   const textSplit = s.toLowerCase().split('');
//   let result = '';

//   for (let i = 0; i <= textSplit.length - 1; i++) {
//     if (i === 0) result += textSplit[i].charAt(0).toUpperCase()
//     else result += '-' + textSplit[i].repeat(i + 1);
//   }

//   return result.split('-').map(el => el.charAt(0).toUpperCase() + el.substring(1)).join('-');
// }

function accum(s) {
  const textSplit = s.toLowerCase().split('');
  let result = '';

  textSplit.map((el, i) => {
    if (i === 0) result += el.charAt(0).toUpperCase();
    else result += '-' + el.repeat(i + 1);
  });

  return result.split('-').map(el => {
    return el.charAt(0).toUpperCase() + el.substring(1);
  }).join('-');
}

console.log(accum("ZpglnRxqenU"));