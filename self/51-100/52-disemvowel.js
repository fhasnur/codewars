/*
  Disemvowel Trolls
  https://www.codewars.com/kata/52fba66badcd10859f00097e
*/

const disemvowel = str => str.split(/[aeiou]/gi).join('');

console.log(disemvowel("This website is for losers LOL!"));