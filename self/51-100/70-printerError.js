/*
  Printer Errors
  https://www.codewars.com/kata/56541980fa08ab47a0000040
*/

const printerError = s => `${s.match(/[^a-m]/g) ? s.match(/[^a-m]/g).length : 0}/${s.length}`;

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));