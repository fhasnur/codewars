/*
  Friend or Foe?
  https://www.codewars.com/kata/55b42574ff091733d900002f
*/

const friend = friends => friends.filter(friend => friend.length == 4);

console.log(friend(["Ryan", "Kieran", "Mark"]));