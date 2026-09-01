// Import utility functions
const { add } = require("./add");
const { subtract } = require("./subtract");

// Export utilities from a single module
module.exports = {
  add,
  subtract,
};

console.log("Addition:", add(20, 10));
console.log("Subtraction:", subtract(20, 10));
