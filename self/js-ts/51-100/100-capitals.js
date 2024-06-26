/*
  Find the capitals
  https://www.codewars.com/kata/539ee3b6757843632d00026b
*/

const capitals = word => [...Array(word.length).keys()].filter(e => /[A-Z]/.test(word[e]));

console.log(capitals('CodEWaRs'));