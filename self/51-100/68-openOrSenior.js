/*
  Categorize New Member
  https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
*/

function openOrSenior(data) {
  let result = []
  data.filter(pair => {
    result.push(pair[0] >= 55 && pair[1] > 7 ? 'Senior' : 'Open')
  })
  return result;
}

console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]));