/*
  Find the middle element
  https://www.codewars.com/kata/545a4c5a61aa4c6916000755
*/

const gimme = triplet => triplet.indexOf(triplet.slice().sort((a, b) => a - b)[1]);

console.log(gimme([2, 3, 1])); // return 0;