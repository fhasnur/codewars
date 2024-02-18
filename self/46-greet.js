;

// function greet(name) {
//   if (name === "Johnny") return "Hello, my love!";
//   return "Hello, " + name + "!";
// }

const greet = name => name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

console.log(greet("Jim"));