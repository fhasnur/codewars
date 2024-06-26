/*
  Jaden Casing Strings
  https://www.codewars.com/kata/5390bac347d09b7da40006f6
*/

String.prototype.toJadenCase = function () {
  const words = this.split(" ");

  return words.map(el => {
    return el.charAt(0).toUpperCase() + el.slice(1)
  }).join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());