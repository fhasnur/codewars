/*
  Get the Middle Character
  https://www.codewars.com/kata/56747fd5cb988479af000028
*/

const getMiddle = s => {
  const middleIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 0) return `${s[middleIndex - 1]}${s[middleIndex]}`;
  else return `${s[middleIndex]}`;
}

console.log(getMiddle("funday")); 