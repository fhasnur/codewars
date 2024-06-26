/*
  Find the odd int
  https://www.codewars.com/kata/54da5a58ea159efa38000836
*/

export const findOdd = (arr: number[]): number => {
  const occurrences = new Map<number, number>();

  arr.forEach(num => {
    occurrences.set(num, (occurrences.get(num) || 0) + 1);
  });

  for (const [num, count] of occurrences.entries()) {
    if (count % 2 !== 0) return num;
  }

  return -1;
};


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));