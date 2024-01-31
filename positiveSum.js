// function positiveSum(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) result += arr[i];
//   }

//   return result;
// }

const positiveSum = (arr) => arr.reduce((acc, curr) => curr > 0 ? acc + curr : acc, 0);

console.log(positiveSum([-1, 2, 3, 4, -5]));