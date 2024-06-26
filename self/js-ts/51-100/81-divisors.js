/*
  Find the divisors!
  https://www.codewars.com/kata/544aed4c4a30184e960010f4
*/

function divisors(integer) {
  const result = [...Array(integer).keys()].filter(i => integer % i === 0 && i > 1);
  return result.length > 0 ? result : `${integer} is prime`;
}

console.log(divisors(15));