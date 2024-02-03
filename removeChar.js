// const removeChar = str => str.slice(1, -1);

const removeChar = str => str.substring(1, str.length - 1);

console.log(removeChar('eloquent'));