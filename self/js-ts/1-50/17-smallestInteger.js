// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

const sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));