const EventEmitter = require("node:events");

// --------------------------------------------
// Create Custom EventEmitter Class
// --------------------------------------------

class SchoolBell extends EventEmitter {}

// --------------------------------------------
// Create EventEmitter Instances
// --------------------------------------------

const schoolBell = new SchoolBell();

// ============================================
// Ring Event
// ============================================

schoolBell.on("ring", () => {
  console.log("🔔 Ring! Yahoo! School class is over.");
});

schoolBell.on("ring", () => {
  console.log("🎉 Students are leaving the classroom.");
});

// ============================================
// One More Class Event
// ============================================

schoolBell.on("oneMoreClass", () => {
  console.log("📚 Wait! One more class is left.");
});

// ============================================
// Broken Bell Event
// ============================================

schoolBell.on("broken", () => {
  console.log("⚠️ The school bell is broken!");
});

// ============================================
// Error Event
// ============================================

schoolBell.on("error", (error) => {
  console.log("❌ Bell Error:", error.message);
});

// ============================================
// Emit Events
// ============================================

console.log("========== School Bell System ==========");

console.log("\n1. Ringing bell...");
schoolBell.emit("ring");

console.log("\n2. Checking today's schedule...");
schoolBell.emit("oneMoreClass");

console.log("\n3. Checking bell condition...");
schoolBell.emit("broken");

console.log("\n4. School bell system completed.");
