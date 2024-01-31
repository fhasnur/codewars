function findShort(s) {
  const words = s.split(' ');
  const lengths = words.map((word) => word.length);
  const shortestLength = Math.min(...lengths);

  return shortestLength;
}

console.log(findShort("Let's travel abroad shall we"));