/*
  Valid Braces
  https://www.codewars.com/kata/5277c8a221e209d3f6000b56
*/

export function validBraces(braces: string): boolean {
  const stack: string[] = [];

  for (const brace of braces) {
    if (brace === '(' || brace === '{' || brace === '[') {
      stack.push(brace);
    } else {
      const lastOpen = stack.pop();
      if ((brace === ')' && lastOpen !== '(') ||
        (brace === '}' && lastOpen !== '{') ||
        (brace === ']' && lastOpen !== '[')) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validBraces("(){}[]"));
