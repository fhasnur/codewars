/*
  Stop gninnipS My sdroW!
  https://www.codewars.com/kata/5264d2b162488dc400000001
*/

export function spinWords(words: string): string {
  return words.split(" ")
    .map(el => el.length >= 5 ? el.split("").reverse().join("") : el)
    .join(" ");
}

console.log(spinWords("Just gniddik there is still one more"));