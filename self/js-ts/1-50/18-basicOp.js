// function basicOp(operation, value1, value2) {
//   return eval(`${value1}${operation}${value2}`);
// }

const basicOp = (operation, value1, value2) => eval(`${value1}${operation}${value2}`);

console.log(basicOp("/", 49, 7));