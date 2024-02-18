/*
  The Feast of Many Beasts
  https://www.codewars.com/kata/5aa736a455f906981800360d
*/

const feast = (beast, dish) =>
  beast.charAt(0) === dish.charAt(0) &&
  beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1);

console.log(feast("great blue heron", "garlic naan"));