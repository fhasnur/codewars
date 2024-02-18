// function repeatStr(n, s) {
//   let result = '';

//   for (let i = 0; i < n; i++) {
//     result += s;
//   }

//   return result;
// }

// Solusi kebanyaan orang lain
// const repeatStr = (n, s) => s.repeat(n);

const repeatStr = (n, s) => [...Array(n)].map(() => `${s}`).join('');

console.log(repeatStr(5, "#"));