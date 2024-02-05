// function countSheeps(sheep) {
//   return sheep.filter(item => item).reduce((acc, curr) => acc + curr, 0);
// }

// Cara orang lain
// const countSheeps = sheep => sheep.filter(Boolean).length;

// const countSheeps = sheep => sheep.filter(s => s).length;

const countSheeps = sheep => sheep.filter(item => item).reduce((acc, curr) => acc + curr, 0);

console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));