/*
  Counting Duplicates
  https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
*/

export function duplicateCount(text: string): number {
  text = text.toLowerCase();
  let counts = 0;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[i] === text[j] && i < j) {
        counts++;
        break;
      }
    }
    text = text.replace(new RegExp(text[i], 'g'), '');
    i--;
  }

  return counts;
}

console.log(duplicateCount("Indivisibilities")); 