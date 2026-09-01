// Module constants
const x = 20;
const y = 25;

// ============================================
// Arithmetic Operations
// ============================================

const add = (num1, num2, num3) => num1 + num2 + num3;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return num1 / num2;
};

// ============================================
// Utility Functions
// ============================================

// Calculate the square of a number
const square = (number) => number ** 2;

// Calculate the cube of a number
const cube = (number) => number ** 3;

// Check whether a number is positive
const isPositive = (number) => number > 0;

// Check whether a number is negative
const isNegative = (number) => number < 0;

// Find the maximum value
const max = (...numbers) => Math.max(...numbers);

// Find the minimum value
const min = (...numbers) => Math.min(...numbers);

// ============================================
// Export Module Members
// ============================================

module.exports = {
  x,
  y,
  add,
  subtract,
  multiply,
  divide,
  square,
  cube,
  isPositive,
  isNegative,
  max,
  min,
};

// console.log(module);

// --------------------------------->
