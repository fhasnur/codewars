/*
  Abbreviate a Two Word Name
  https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
*/

const abbrevName = (name) => {
  let result = '';

  name.split(' ').map((el) => result += el.charAt(0));

  return result.split('').join('.').toUpperCase();
}

console.log(abbrevName("Fandi Hasnur"));