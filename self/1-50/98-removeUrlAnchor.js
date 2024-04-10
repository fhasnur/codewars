/*
  Remove anchor from URL
  https://www.codewars.com/kata/51f2b4448cadf20ed0000386
*/

const removeUrlAnchor = url => url.split('#')[0];

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));