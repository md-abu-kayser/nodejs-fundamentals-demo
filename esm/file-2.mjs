// --------------------------------------------
// Module Constants
// --------------------------------------------

const x = 20;

const moduleName = "ES Module Utilities";

const version = "1.0.0";

// --------------------------------------------
// Arithmetic Operations
// --------------------------------------------

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return num1 / num2;
};

// --------------------------------------------
// Utility Functions
// --------------------------------------------

// Calculate the square of a number
const square = (number) => number ** 2;

// Calculate the average of multiple numbers
const average = (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce((sum, number) => sum + number, 0);

  return total / numbers.length;
};

// Check whether a number is even
const isEven = (number) => number % 2 === 0;

// Check whether a number is odd
const isOdd = (number) => number % 2 !== 0;

// ============================================
// Named Exports
// ============================================

export {
  x,
  multiply,
  subtract,
  divide,
  square,
  average,
  isEven,
  isOdd,
  moduleName,
  version,
};

// ============================================
// Default Export
// ============================================

// `add` is the default export of this module.
export default add;
