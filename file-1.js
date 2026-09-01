// Import all exports from file-2
const file2 = require("./file-2.js");

// Import specific exports from file-3 with aliases
const { x: x3, add: add3, multiply: multiply3, y } = require("./file-3.js");

// ============================================
// File 2 - Working with Imported Module
// ============================================

console.log("========== File 2 ==========");

console.log("Value of x:", file2.x);

console.log("Addition:", file2.add(10, 10));

console.log("Multiplication:", file2.multiply(25, 25));

console.log("Subtraction:", file2.subtract(100, 40));

console.log("Division:", file2.divide(100, 5));

// ============================================
// File 3 - Aliasing with Destructuring
// ============================================

console.log("\n========== File 3 - Aliasing ==========");

console.log("Aliased x:", x3);

console.log("Aliased addition:", add3(20, 10, 70));

console.log("Aliased multiplication:", multiply3(100, 100));

console.log("Original y:", y);

// ============================================
// Practical Example
// ============================================

console.log("\n========== Practical Examples ==========");

const price = 1500;
const quantity = 3;

const totalPrice = multiply3(price, quantity);

console.log("Product Price:", price);
console.log("Quantity:", quantity);
console.log("Total Price:", totalPrice);

const number1 = 100;
const number2 = 25;

console.log("Sum:", add3(number1, number2));
console.log("Difference:", file2.subtract(number1, number2));
console.log("Division:", file2.divide(number1, number2));
