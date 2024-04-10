/*
  Anagram Detection
  https://www.codewars.com/kata/529eef7a9194e0cbc1000255
*/

const isAnagram = (test, original) => {
  if (test.length !== original.length) return false;

  const sortedTest = test.toLowerCase().split('').sort().join('');
  const sortedOriginal = original.toLowerCase().split('').sort().join('');

  return sortedTest === sortedOriginal;
};

console.log(isAnagram("foefet", "toffee"));