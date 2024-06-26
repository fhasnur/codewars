/*
  Vowel Count
  https://www.codewars.com/kata/54ff3102c1bad923760001f3
*/

const getCount = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(getCount("abracadabra"));