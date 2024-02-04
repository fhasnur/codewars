const squareSum = numbers => numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);

console.log(squareSum([0, 3, 4, 5]));