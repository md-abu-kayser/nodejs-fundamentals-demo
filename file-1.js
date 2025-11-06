const var1 = require("./file-2.js");
// Aliasing
const { x: x3, add: add3, multiply: multiply3, y } = require("./file-3.js");

// file 2 work
console.log(var1.x);
console.log(var1.add(10, 10));
console.log(var1.multiply(25, 25));

// file 3 work-------> Aliasing
console.log(x3);
console.log(add3(20, 10, 70));
console.log(multiply3(100, 100));
console.log(y);
