// Asynchronous
// ----------------------------->
// 2. file read -> single thread -> event loop -> thread pool -> task completed

const fs = require("fs");

console.log("Task - 1");

fs.readFile("./hello.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log("Something Went Wrong", err);
    return;
  }
  console.log(data);
});

console.log("Task - 4");
