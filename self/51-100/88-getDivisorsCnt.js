/*
  Count the divisors of a number
  https://www.codewars.com/kata/542c0f198e077084c0000c2e
*/

// const getDivisorsCnt = n => [...Array(n + 1).keys()].filter(i => n % i === 0).length;

const getDivisorsCnt = n => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count += (i * i === n) ? 1 : 2;
    }
  }
  return count;
};

console.log(getDivisorsCnt(30));