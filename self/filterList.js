function filterList(l) {
  // Return a new array with the strings filtered out
  let newArray = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      newArray.push(l[i]);
    }
  }
  return newArray;
}