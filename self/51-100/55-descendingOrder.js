/*
  Descending Order
  https://www.codewars.com/kata/5467e4d82edf8bbf40000155
*/

// const descendingOrder = n => Number(String(n).split('').reverse().join(''));

const descendingOrder = n => Number(String(n).split('').sort((a, b) => b - a).join(''));

console.log(descendingOrder(123456789));