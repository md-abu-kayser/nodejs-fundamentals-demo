// --------------------------------------------
// Module Constants
// --------------------------------------------

const x = 20;

const y = 25;

const moduleName = "ES Module Utilities";

const version = "1.0.0";

// --------------------------------------------
// Arithmetic Operations
// --------------------------------------------

const add = (num1, num2, num3) => num1 + num2 + num3;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return num1 / num2;
};

// --------------------------------------------
// Mathematical Utilities
// --------------------------------------------

// Calculate the square of a number
const square = (number) => number ** 2;

// Calculate the cube of a number
const cube = (number) => number ** 3;

// Calculate the average of multiple numbers
const average = (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce((sum, number) => sum + number, 0);

  return total / numbers.length;
};

// --------------------------------------------
// Number Validation
// --------------------------------------------

const isEven = (number) => number % 2 === 0;

const isOdd = (number) => number % 2 !== 0;

const isPositive = (number) => number > 0;

const isNegative = (number) => number < 0;

// --------------------------------------------
// Comparison Utilities
// --------------------------------------------

const max = (...numbers) => Math.max(...numbers);

const min = (...numbers) => Math.min(...numbers);

// ============================================
// Named Exports
// ============================================

export {
  x,
  y,
  moduleName,
  version,
  add,
  subtract,
  multiply,
  divide,
  square,
  cube,
  average,
  isEven,
  isOdd,
  isPositive,
  isNegative,
  max,
  min,
};
