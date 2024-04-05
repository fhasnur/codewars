/*
  Breaking chocolate problem
  https://www.codewars.com/kata/534ea96ebb17181947000ada
*/

function breakChocolate(n, m) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i !== 1 || j !== 1) result.push([i, j]);
    }
  }

  return result.length;
}

console.log(breakChocolate(5, 5));