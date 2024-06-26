/*
  Complementary DNA
  https://www.codewars.com/kata/554e4a2f232cdd87d9000038
*/

function dnaStrand(dna) {
  const defaultDna = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  const regex = new RegExp(`[${Object.keys(defaultDna).join("")}]`, 'g');

  return dna.replace(regex, match => defaultDna[match]);
}

console.log(dnaStrand("ATTGC"));