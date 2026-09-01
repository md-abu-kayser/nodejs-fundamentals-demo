// --------------------------------------------
// Basic Addition
// --------------------------------------------

const add = (num1, num2) => num1 + num2;

// --------------------------------------------
// Subtraction
// --------------------------------------------

const subtract = (num1, num2) => num1 - num2;

// --------------------------------------------
// Multiplication
// --------------------------------------------

const multiply = (num1, num2) => num1 * num2;

// --------------------------------------------
// Division
// --------------------------------------------

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return num1 / num2;
};

// --------------------------------------------
// Calculate Average
// --------------------------------------------

const average = (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce((sum, number) => sum + number, 0);

  return total / numbers.length;
};

// --------------------------------------------
// Check Even Number
// --------------------------------------------

const isEven = (number) => number % 2 === 0;

// --------------------------------------------
// Check Odd Number
// --------------------------------------------

const isOdd = (number) => number % 2 !== 0;

// --------------------------------------------
// Find Maximum Number
// --------------------------------------------

const max = (...numbers) => Math.max(...numbers);

// --------------------------------------------
// Find Minimum Number
// --------------------------------------------

const min = (...numbers) => Math.min(...numbers);

// ============================================
// Export Utility Functions
// ============================================

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  average,
  isEven,
  isOdd,
  max,
  min,
};
