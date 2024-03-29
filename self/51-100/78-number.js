/*
  Number of People in the Bus
  https://www.codewars.com/kata/5648b12ce68d9daa6b000099
*/

function number(busStops) {
  let result = 0;

  for (let i = 0; i < busStops.length; i++) {
    for (let j = 0; j < busStops[i].length; j++) {
      if (j === 0) result += +busStops[i][j]
      else result -= busStops[i][j]
    }
  }

  return result;
}

console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));