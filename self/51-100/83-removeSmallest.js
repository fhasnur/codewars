/*
  Remove the minimum
  https://www.codewars.com/kata/563cf89eb4747c5fb100001b
*/

function removeSmallest(numbers) {
  const numbersCopy = numbers.slice();
  if (numbersCopy.length <= 1) return [];

  const smallest = Math.min(...numbersCopy);
  const index = numbersCopy.indexOf(smallest);
  numbersCopy.splice(index, 1);

  return numbersCopy;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));