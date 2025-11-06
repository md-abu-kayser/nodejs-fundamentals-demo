// Synchronous
// ------------------------------------------------->
// 1. file read / I/o / intensive task ---> single thread ----> not go single thread pool---->

const fs = require("fs");

console.log("Task - 1");

const text = "I'm Learning Node.js";

fs.writeFileSync("./hello.txt", text);

console.log("Task - 2");

const data = fs.readFileSync("./hello.txt", { encoding: "utf8" });

console.log("Task - 4");

console.log(data);
