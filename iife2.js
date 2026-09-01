// Module-scoped variable
let x = 1000;

const appName = "Node.js Deep Dive";
const version = "1.0.0";

// ============================================
// Global Object
// ============================================

console.log("========== Global Object ==========");

console.log("Global object type:", typeof global);

console.log("Global has setTimeout:", typeof global.setTimeout);

console.log("Global has console:", typeof global.console);

// ============================================
// Module Information
// ============================================

console.log("\n========== Module Information ==========");

console.log("Module ID:", module.id);

console.log("Module filename:", module.filename);

console.log("Is main module:", require.main === module);

// ============================================
// File & Directory Information
// ============================================

console.log("\n========== File Information ==========");

console.log("Current directory:", __dirname);

console.log("Current file:", __filename);

// ============================================
// Module Scope
// ============================================

console.log("\n========== Module Scope ==========");

console.log("x:", x);

console.log("Application:", appName);

console.log("Version:", version);

// `x` is module-scoped, not a global variable.
console.log("Is x global:", global.x !== undefined);

// ============================================
// Global Variable Example
// ============================================

// Avoid creating globals accidentally.
// Explicitly attaching a value to `global` makes it global.

global.projectName = "Node.js CommonJS";

console.log("\n========== Custom Global ==========");

console.log("Global project:", global.projectName);

// ============================================
// Module Exports
// ============================================

module.exports = {
  x,
  appName,
  version,
};

console.log("\n========== Module Exports ==========");

console.log(module.exports);

// --------------------------------------------
// Note:
// `global` belongs to Node.js runtime.
// `module`, `__dirname`, and `__filename`
// are provided in the CommonJS module context.
// --------------------------------------------
