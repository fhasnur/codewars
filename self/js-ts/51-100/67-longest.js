/*
  Two to One
  https://www.codewars.com/kata/5656b6906de340bd1b0000ac
*/

function longest(s1, s2) {
  const setOne = new Set(s1);
  const setTwo = new Set(s2);

  const result = Array.from(new Set([...setOne, ...setTwo]));

  return result.sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"));