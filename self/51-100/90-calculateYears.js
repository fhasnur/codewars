/*
  Money, Money, Money
  https://www.codewars.com/kata/563f037412e5ada593000114
*/

function calculateYears(principal, interest, tax, desired) {
  let year = 0;

  while (principal < desired) {
    const interestEarned = principal * interest;
    const taxDeducted = interestEarned * tax;
    principal += interestEarned - taxDeducted;
    year++;
  }

  return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));