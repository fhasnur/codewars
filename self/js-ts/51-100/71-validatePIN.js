/*
  Regex validate PIN code
  https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
*/

const validatePIN = pin => /^[0-9]{4}$|^[0-9]{6}$/.test(pin);

console.log(validatePIN("1234"));