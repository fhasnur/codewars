// function noSpace(x) {
//   return x.split(" ").filter(item => item != '').join('');
// }

// Cara orang lain
// const noSpace = x => x.split(' ').join('');

// const noSpace = x => x.replaceAll(' ', '');

// const noSpace = x => x.replace(/\s/g, '');

const noSpace = x => x.split(' ').filter(item => item != '').join('');

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));