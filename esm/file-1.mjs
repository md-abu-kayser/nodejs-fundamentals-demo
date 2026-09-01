// --------------------------------------------
// File 2 - Named & Default Imports
// --------------------------------------------

import { x, multiply } from "./file-2.mjs";

import add from "./file-2.mjs";

// --------------------------------------------
// File 3 - Named Imports with Aliasing
// --------------------------------------------

import {
  x as X3,
  add as ADD3,
  multiply as MULTIPLY3,
  y as Y3,
} from "./file-3.mjs";

// ============================================
// File 2 - Working with Imports
// ============================================

console.log("========== File 2 ==========");

console.log("Exported x:", x);

console.log("Addition:", add(3, 100));

console.log("Multiplication:", multiply(10, 20));

console.log("Default add:", add(50, 150));

// ============================================
// File 3 - Aliased Imports
// ============================================

console.log("\n========== File 3 - Aliasing ==========");

console.log("Aliased x:", X3);

console.log("Aliased y:", Y3);

console.log("Aliased addition:", ADD3(20, 10, 70));

console.log("Aliased multiplication:", MULTIPLY3(100, 100));

// ============================================
// Practical Examples
// ============================================

console.log("\n========== Practical Examples ==========");

const price = 1500;
const quantity = 4;

const totalPrice = MULTIPLY3(price, quantity);

console.log("Product price:", price);

console.log("Quantity:", quantity);

console.log("Total price:", totalPrice);

// --------------------------------------------
// Calculate multiple values
// --------------------------------------------

const firstNumber = 25;
const secondNumber = 75;

const sum = add(firstNumber, secondNumber);

console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);
console.log("Sum:", sum);

// --------------------------------------------
// Combining imported functions
// --------------------------------------------

const baseValue = X3;
const additionalValue = Y3;

const combinedValue = ADD3(baseValue, additionalValue, 100);

console.log("Combined value:", combinedValue);

// ============================================
// ES Module Import Summary
// ============================================

console.log("\n========== ES Module Summary ==========");

console.log("Named import:", x);

console.log("Default import:", add);

console.log("Aliased import:", X3);

console.log("Aliased function:", ADD3);
