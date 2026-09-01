((require, module, __dirname, __filename) => {
  // --------------------------------------------
  // Module Scope
  // --------------------------------------------

  let x = 10;

  console.log("========== Module Information ==========");

  console.log("Directory:", __dirname);
  console.log("File:", __filename);

  // --------------------------------------------
  // Block Scope
  // --------------------------------------------

  {
    let x = 20;

    console.log("Block scoped x:", x);
  }

  // The outer x remains unchanged
  console.log("Module scoped x:", x);

  // --------------------------------------------
  // Function Scope
  // --------------------------------------------

  ((name) => {
    const message = `Learning ${name}`;

    console.log("Message:", message);
  })("Node.js");

  // --------------------------------------------
  // CommonJS Objects
  // --------------------------------------------

  console.log("Require type:", typeof require);
  console.log("Module ID:", module.id);
  console.log("Module filename:", module.filename);

  // --------------------------------------------
  // Module Exports
  // --------------------------------------------

  module.exports = {
    x,
    message: "CommonJS module wrapper example",
  };

  console.log("Exported data:", module.exports);
})(require, module, __dirname, __filename);
