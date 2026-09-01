// Learning Goals:
// 1. Understand non-blocking I/O
// 2. Understand fs.readFile()
// 3. Understand callbacks
// 4. Handle errors properly
// 5. Observe execution order
// 6. Understand multiple async operations
// 7. Practice real-world file processing
// ============================================

const fs = require("node:fs");

// ============================================
// 1. Program Start
// ============================================

console.log("========== PROGRAM START ==========");

console.log("Task - 1: Program started");

// ============================================
// 2. Start Asynchronous File Read
// ============================================

console.log("Task - 2: Starting file read...");

fs.readFile("./hello.txt", "utf8", (err, data) => {
  // ------------------------------------------
  // Error Handling
  // ------------------------------------------

  if (err) {
    console.error("❌ File read failed:", err.message);
    return;
  }

  // ------------------------------------------
  // File Read Completed
  // ------------------------------------------

  console.log("\nTask - 3: File read completed");

  // ------------------------------------------
  // Display File Content
  // ------------------------------------------

  console.log("\n========== FILE CONTENT ==========");

  console.log(data);

  // ------------------------------------------
  // Process File Content
  // ------------------------------------------

  const content = data.trim();

  console.log("\n========== FILE ANALYSIS ==========");

  console.log("Characters:", content.length);

  console.log("Words:", content ? content.split(/\s+/).length : 0);

  console.log("Lines:", content ? content.split("\n").length : 0);

  // ------------------------------------------
  // Check File Content
  // ------------------------------------------

  if (content.includes("Node.js")) {
    console.log("✅ Node.js was found in the file.");
  } else {
    console.log("ℹ️ Node.js was not found in the file.");
  }
});

// ============================================
// 3. Main Execution Continues
// ============================================

console.log("\nTask - 4: Program continues...");

console.log("Task - 5: Main execution completed");

// ============================================
// 4. Another Asynchronous Operation
// ============================================

fs.readFile("./hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("❌ Second read failed:", err.message);
    return;
  }

  console.log("\n========== SECOND READ ==========");

  console.log("File successfully loaded again.");

  console.log("First 10 characters:", data.slice(0, 10));
});

// ============================================
// 5. Final Synchronous Statement
// ============================================

console.log("\nTask - 6: Waiting for asynchronous operations...");

// ============================================
// Expected Execution Flow
// ============================================
//
// Task - 1
// Task - 2
// Task - 4
// Task - 5
// Task - 6
//
// Then asynchronous callbacks execute:
//
// Task - 3
// File Content
// File Analysis
// Second Read
//
// ============================================
//
// IMPORTANT:
//
// fs.readFile() is asynchronous.
//
// Node.js starts the file operation and
// does NOT wait for it to finish.
//
// JavaScript continues executing.
//
// After the file operation completes,
// the callback is executed.
// ============================================
