// --------------------------------------------
// Subtraction
// --------------------------------------------

const subtract = (num1, num2) => num1 - num2;

// --------------------------------------------
// Subtract Multiple Numbers
// --------------------------------------------

const subtractMany = (initialValue, ...numbers) => {
  return numbers.reduce((result, number) => result - number, initialValue);
};

// --------------------------------------------
// Absolute Difference
// --------------------------------------------

const difference = (num1, num2) => Math.abs(num1 - num2);

// --------------------------------------------
// Check Which Number Is Greater
// --------------------------------------------

const greaterDifference = (num1, num2) => {
  if (num1 === num2) {
    return 0;
  }

  return Math.abs(num1 - num2);
};

// --------------------------------------------
// Percentage Decrease
// --------------------------------------------

const percentageDecrease = (original, current) => {
  if (original === 0) {
    throw new Error("Original value cannot be zero.");
  }

  return ((original - current) / original) * 100;
};

// ============================================
// Export Utility Functions
// ============================================

module.exports = {
  subtract,
  subtractMany,
  difference,
  greaterDifference,
  percentageDecrease,
};
