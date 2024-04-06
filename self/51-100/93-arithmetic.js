/*
  Make a function that does arithmetic!
  https://www.codewars.com/kata/583f158ea20cfcbeb400000a
*/

function arithmetic(a, b, operator) {
  if (operator === "add") return a + b;
  if (operator === "subtract") return a - b;
  if (operator === "multiply") return a * b;
  return a / b;
}

console.log(arithmetic(8, 2, "divide"));
