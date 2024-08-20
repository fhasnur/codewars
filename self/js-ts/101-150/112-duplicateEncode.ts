/*
  Duplicate Encoder
  https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
*/

export function duplicateEncode(word: string) {
  const chars = word.toLowerCase().split("");
  const results: string[] = [];

  chars.map(el => {
    const result = chars.indexOf(el) === chars.lastIndexOf(el) ? "(" : ")"
    results.push(result);
  })

  return results.join("");
}

console.log(duplicateEncode("recede"));