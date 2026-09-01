// Synchronous I/O is blocking.
// The next line waits until the current
// file-system operation has completed.

// --------------------------------------------
// Import File System Module
// --------------------------------------------

const fs = require("fs");

// --------------------------------------------
// Task 1 - Program Start
// --------------------------------------------

console.log("Task - 1: Program started");

// --------------------------------------------
// Task 2 - Write File
// --------------------------------------------

const text = "I'm Learning Node.js";

fs.writeFileSync("./hello.txt", text, {
  encoding: "utf8",
});

console.log("Task - 2: File written successfully");

// --------------------------------------------
// Task 3 - Append Additional Content
// --------------------------------------------

fs.appendFileSync(
  "./hello.txt",
  "\nI'm learning synchronous file operations.",
  {
    encoding: "utf8",
  },
);

console.log("Task - 3: Additional content appended");

// --------------------------------------------
// Task 4 - Read File
// --------------------------------------------

const data = fs.readFileSync("./hello.txt", {
  encoding: "utf8",
});

console.log("Task - 4: File read successfully");

// --------------------------------------------
// Display File Content
// --------------------------------------------

console.log("\n========== File Content ==========");

console.log(data);

// --------------------------------------------
// File Information
// --------------------------------------------

const stats = fs.statSync("./hello.txt");

console.log("\n========== File Information ==========");

console.log("File size:", stats.size, "bytes");

console.log("Is file:", stats.isFile());

console.log("Is directory:", stats.isDirectory());

// --------------------------------------------
// Final Task
// --------------------------------------------

console.log("\nTask - 5: Program completed");
