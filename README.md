# Node.js Fundamentals Demo

> A practical, code-first repository for understanding Node.js fundamentals, module systems, runtime behavior, event-driven programming, filesystem APIs, scope, and asynchronous I/O.

<p align="center">

  <a href="https://nodejs.org/docs/latest/api/" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-24%20LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js 24 LTS" />
  </a>

  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://img.shields.io/badge/JavaScript-ES2024%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES2024+" />
  </a>

  <a href="https://nodejs.org/docs/latest/api/modules.html" target="_blank">
    <img src="https://img.shields.io/badge/CommonJS-Supported-0A0A0A?style=for-the-badge" alt="CommonJS" />
  </a>

  <a href="https://nodejs.org/docs/latest/api/esm.html" target="_blank">
    <img src="https://img.shields.io/badge/ESM-Supported-0A0A0A?style=for-the-badge" alt="ES Modules" />
  </a>

  <a href="https://opensource.org/license/mit" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-2E7D32?style=for-the-badge" alt="MIT License" />
  </a>

</p>

<p align="center">
  <strong>Learn Node.js by reading, running, modifying, and understanding real code.</strong>
</p>

---

## Table of Contents

- [About](#about)
- [Why This Repository Exists](#why-this-repository-exists)
- [Learning Goals](#learning-goals)
- [Topics Covered](#topics-covered)
- [Repository Architecture](#repository-architecture)
- [Project Structure](#project-structure)
- [Module Systems](#module-systems)
  - [CommonJS](#commonjs)
  - [ES Modules](#es-modules)

- [Node.js Runtime Fundamentals](#nodejs-runtime-fundamentals)
- [Scope and Execution Context](#scope-and-execution-context)
- [IIFE and Encapsulation](#iife-and-encapsulation)
- [Event-Driven Programming](#event-driven-programming)
- [File System Programming](#file-system-programming)
  - [Synchronous I/O](#synchronous-io)
  - [Asynchronous I/O](#asynchronous-io)

- [Reusable Utility Modules](#reusable-utility-modules)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Examples](#running-examples)
- [Example Code](#example-code)
- [Recommended Learning Order](#recommended-learning-order)
- [Development Conventions](#development-conventions)
- [Common Mistakes](#common-mistakes)
- [Troubleshooting](#troubleshooting)
- [What You Will Learn](#what-you-will-learn)
- [Use Cases](#use-cases)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## About

**Node.js Fundamentals Demo** is a hands-on learning repository focused on the foundational concepts required to work effectively with Node.js.

Instead of depending entirely on frameworks and abstractions, this project focuses on the underlying runtime and core APIs that developers encounter when building backend applications.

The repository demonstrates concepts such as:

- CommonJS modules
- ES Modules
- `require()` and `module.exports`
- `import` and `export`
- Node.js module scope
- Block and function scope
- Global runtime objects
- `__dirname` and `__filename`
- IIFE patterns
- `EventEmitter`
- Event-driven programming
- Synchronous filesystem operations
- Asynchronous filesystem operations
- Reusable utility modules
- Export/import composition
- Runtime execution behavior

The goal is simple:

> **Understand Node.js fundamentals before relying heavily on frameworks.**

---

## Why This Repository Exists

Modern backend development often involves frameworks and tools such as Express.js, NestJS, Fastify, TypeScript, PostgreSQL, Prisma, Docker, and cloud platforms.

However, strong backend development begins with understanding the runtime underneath those abstractions.

This repository was created to provide a focused environment for learning the fundamentals first.

Understanding these concepts makes it easier to reason about:

- how Node.js executes JavaScript
- how modules communicate with each other
- how files are loaded
- how scope behaves inside Node.js
- how events are emitted and handled
- how filesystem operations work
- why asynchronous programming matters
- how backend applications are structured

---

# Learning Goals

This repository is designed around six primary goals.

### 1. Understand the Node.js Runtime

Learn how JavaScript behaves outside the browser and understand important Node.js runtime features.

### 2. Master Module Systems

Understand both major module patterns used in Node.js:

- CommonJS
- ES Modules

### 3. Understand Scope

Explore:

- module scope
- function scope
- block scope
- global scope

### 4. Learn Core Node.js APIs

Work directly with built-in modules such as:

- `node:events`
- `fs`

### 5. Understand Event-Driven Programming

Learn how event emitters work and why the event-driven architecture is important in Node.js.

### 6. Build Strong Backend Foundations

Use these fundamentals as preparation for more advanced backend technologies.

---

# Topics Covered

| Topic        | Concepts                                       |
| ------------ | ---------------------------------------------- |
| Modules      | CommonJS, ESM, imports, exports                |
| Runtime      | `global`, `module`, `__dirname`, `__filename`  |
| Scope        | Module, function, block, global                |
| Functions    | Reusability, exports, execution                |
| IIFE         | Encapsulation and isolated execution           |
| Events       | `EventEmitter`, listeners, emitted events      |
| Filesystem   | Read, write, append, metadata                  |
| Async I/O    | Callback-based non-blocking operations         |
| Utilities    | Reusable arithmetic modules                    |
| Architecture | Separation of concerns and module organization |

---

# Repository Architecture

The repository is intentionally organized around individual learning concepts rather than a production framework.

The structure separates:

```text
Runtime Examples
       │
       ├── CommonJS
       │
       ├── ES Modules
       │
       ├── Scope
       │
       └── IIFE

Core Node.js APIs
       │
       ├── EventEmitter
       │
       └── File System

Reusable Modules
       │
       ├── add.js
       ├── subtract.js
       └── index.js
```

This makes each concept independently executable and easier to study.

---

# Project Structure

```text
nodejs-fundamentals-demo/
│
├── esm/
│   ├── file-1.mjs
│   ├── file-2.mjs
│   └── file-3.mjs
│
├── module-2/
│   ├── asynchronous.js
│   ├── event.js
│   └── fs.js
│
├── utils/
│   ├── add.js
│   ├── index.js
│   └── subtract.js
│
├── file-1.js
├── file-2.js
├── file-3.js
│
├── iife.js
├── iife2.js
├── main.js
│
├── LICENSE
├── README.md
└── package.json
```

> `package.json` may be introduced or expanded as the repository grows.

---

# Module Systems

Node.js supports multiple module systems. This repository demonstrates both CommonJS and ES Modules.

---

## CommonJS

CommonJS is traditionally associated with:

```js
require();
module.exports;
exports;
```

### Example

```js
const { add, subtract } = require("./utils");

console.log(add(12, 10));
console.log(subtract(42, 10));
```

A module can expose functionality using:

```js
module.exports = {
  add,
  subtract,
};
```

### Why This Matters

Understanding CommonJS helps developers understand:

- how Node.js modules are loaded
- how dependencies are shared
- how exports are composed
- how multiple files communicate

---

## ES Modules

ES Modules use the standardized JavaScript module syntax:

```js
import
export
export default
```

### Named Export

```js
export const x = 10;

export const multiply = (a, b) => a * b;
```

### Default Export

```js
export default function add(a, b) {
  return a + b;
}
```

### Importing

```js
import add, { x, multiply } from "./file-2.mjs";

console.log(x);
console.log(add(3, 100));
console.log(multiply(10, 20));
```

### Concepts Demonstrated

The ESM examples show:

- named exports
- default exports
- importing multiple values
- module boundaries
- modern JavaScript module syntax

---

# Node.js Runtime Fundamentals

One important objective of this repository is to understand that Node.js provides a runtime environment with its own APIs and execution behavior.

Examples explore runtime-level objects such as:

```js
global;
module;
__dirname;
__filename;
```

These values help demonstrate how JavaScript executed by Node.js differs from JavaScript executed directly in a browser.

---

## `global`

Node.js provides a global object that can be accessed through:

```js
global;
```

For example:

```js
console.log(global);
```

This demonstrates the runtime-level environment in which Node.js executes JavaScript.

---

## `__filename`

`__filename` represents the path of the current module file in CommonJS.

Example:

```js
console.log(__filename);
```

---

## `__dirname`

`__dirname` represents the directory containing the current CommonJS module.

Example:

```js
console.log(__dirname);
```

These values are especially useful when working with:

- filesystem operations
- file paths
- configuration
- local resources

---

# Scope and Execution Context

Understanding scope is essential when working with Node.js modules.

This repository demonstrates several levels of scope.

### Module Scope

Variables declared within a Node.js module are normally local to that module.

```js
const message = "Hello Node.js";

console.log(message);
```

Other files do not automatically receive access to that variable.

---

### Function Scope

Variables declared using `var` inside a function belong to that function's scope.

```js
function example() {
  var message = "Hello";
  console.log(message);
}

example();
```

---

### Block Scope

Variables declared using `let` and `const` are block-scoped.

```js
if (true) {
  const message = "Inside block";
  console.log(message);
}
```

---

### Global Scope

Values attached to the Node.js global environment have broader visibility.

The repository compares these scopes to make their runtime behavior easier to understand.

---

# IIFE and Encapsulation

An **Immediately Invoked Function Expression**, commonly known as an IIFE, is a function that is defined and executed immediately.

Example:

```js
(function () {
  console.log("IIFE executed");
})();
```

An arrow-function version can also be written as:

```js
(() => {
  console.log("IIFE executed");
})();
```

## Why Study IIFE?

Although modern JavaScript modules provide stronger native encapsulation, IIFEs remain useful for understanding:

- private execution contexts
- variable isolation
- function expressions
- immediate execution
- JavaScript execution patterns

Examples are available in:

```text
iife.js
iife2.js
```

---

# Event-Driven Programming

Node.js is heavily associated with an event-driven programming model.

This repository introduces the concept using Node.js's built-in:

```js
node: events;
```

module.

---

## EventEmitter

Example:

```js
const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("School bell rang!");
});

schoolBell.emit("ring");
```

### How It Works

The example contains three important operations:

```text
Create EventEmitter
       ↓
Register Listener
       ↓
Emit Event
       ↓
Execute Listener
```

The listener:

```js
schoolBell.on("ring", callback);
```

waits for the event.

The emitter:

```js
schoolBell.emit("ring");
```

triggers the event.

---

## Why EventEmitter Matters

Event-driven patterns appear throughout Node.js applications.

Understanding `EventEmitter` provides a foundation for understanding:

- event-based APIs
- asynchronous workflows
- streams
- server architecture
- framework internals
- real-time application patterns

Example file:

```text
module-2/event.js
```

---

# File System Programming

Node.js provides filesystem functionality through the built-in `fs` module.

This repository demonstrates basic file operations without relying on external packages.

---

## Synchronous I/O

A synchronous filesystem operation blocks execution until the operation completes.

Example:

```js
const fs = require("fs");

fs.writeFileSync("./hello.txt", "Node.js learning");

const data = fs.readFileSync("./hello.txt", "utf8");

console.log(data);
```

Execution follows this general flow:

```text
Write File
   ↓
Wait for Completion
   ↓
Read File
   ↓
Wait for Completion
   ↓
Print Result
```

This makes synchronous operations simple to understand, but blocking behavior is an important consideration in server-side applications.

---

## Asynchronous I/O

Asynchronous filesystem APIs allow the application to continue executing while the I/O operation is being processed.

Example:

```js
const fs = require("fs");

fs.readFile("./hello.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
});
```

This introduces an important backend development principle:

> **I/O operations should generally avoid unnecessary blocking in application request paths.**

Example file:

```text
module-2/asynchronous.js
```

---

# Reusable Utility Modules

The `utils` directory demonstrates how functionality can be separated into smaller reusable modules.

```text
utils/
├── add.js
├── subtract.js
└── index.js
```

---

## Example

### `add.js`

```js
const add = (num1, num2) => num1 + num2;

module.exports = {
  add,
};
```

### `subtract.js`

```js
const subtract = (num1, num2) => num1 - num2;

module.exports = {
  subtract,
};
```

### `index.js`

```js
const { add } = require("./add");
const { subtract } = require("./subtract");

module.exports = {
  add,
  subtract,
};
```

### Consuming the Utilities

```js
const { add, subtract } = require("./utils");

console.log(add(20, 10));
console.log(subtract(20, 10));
```

---

# Separation of Concerns

One of the important lessons from the utility examples is that functionality does not need to exist in one large file.

Instead:

```text
Application
    │
    └── Utilities
          ├── add
          ├── subtract
          └── future operations
```

This approach helps with:

- maintainability
- readability
- testing
- reusability
- debugging
- code organization

The same principles become significantly more important in larger backend applications.

---

# Prerequisites

Before running the repository, make sure the following are installed.

### Node.js

Recommended:

```text
Node.js 18+
```

Verify installation:

```bash
node --version
```

### npm

Verify npm:

```bash
npm --version
```

### Git

Verify Git:

```bash
git --version
```

---

# Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/md-abu-kayser/nodejs-fundamentals-demo.git
```

---

## 2. Navigate to the Project

```bash
cd nodejs-fundamentals-demo
```

---

## 3. Install Dependencies

If the project contains dependencies:

```bash
npm install
```

This repository primarily focuses on Node.js built-in functionality, so external dependencies may be minimal or unnecessary.

---

# Running Examples

## Main Example

```bash
node main.js
```

---

## CommonJS Examples

```bash
node file-1.js
node file-2.js
node file-3.js
```

---

## IIFE Examples

```bash
node iife.js
node iife2.js
```

---

## ES Module Examples

```bash
node esm/file-1.mjs
node esm/file-2.mjs
node esm/file-3.mjs
```

---

## Event Example

```bash
node module-2/event.js
```

---

## Filesystem Examples

```bash
node module-2/fs.js
```

```bash
node module-2/asynchronous.js
```

---

# Example Code

## CommonJS

```js
const { add, subtract } = require("./utils");

console.log(add(12, 10));
console.log(subtract(42, 10));
```

---

## ES Modules

```js
import add, { x, multiply } from "./file-2.mjs";

console.log(x);
console.log(add(3, 100));
console.log(multiply(10, 20));
```

---

## EventEmitter

```js
const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("School bell rang!");
});

schoolBell.emit("ring");
```

---

## Filesystem

```js
const fs = require("fs");

fs.writeFileSync("./hello.txt", "Node.js learning");

const data = fs.readFileSync("./hello.txt", "utf8");

console.log(data);
```

---

# Recommended Learning Order

For the best learning experience, study the repository in the following order.

### Stage 1 — JavaScript Fundamentals

Review:

```text
Functions
Variables
Objects
Destructuring
Arrow Functions
Scope
Closures
```

### Stage 2 — CommonJS

Study:

```text
require()
module.exports
exports
module scope
```

### Stage 3 — ES Modules

Study:

```text
import
export
default export
named export
```

### Stage 4 — Node.js Runtime

Explore:

```text
global
module
__dirname
__filename
```

### Stage 5 — Event-Driven Programming

Study:

```text
EventEmitter
event listeners
event emission
callbacks
```

### Stage 6 — File System

Study:

```text
read
write
append
metadata
synchronous I/O
asynchronous I/O
```

### Stage 7 — Reusable Architecture

Finally, understand:

```text
module separation
utility modules
index modules
dependency composition
```

---

# Development Conventions

The examples in this repository follow several practical conventions.

### Prefer Clear Module Boundaries

Keep individual responsibilities in separate files.

### Use Descriptive Names

Prefer:

```js
const calculateAverage = () => {};
```

over:

```js
const fn = () => {};
```

### Keep Examples Focused

Each example should demonstrate one or a small group of related Node.js concepts.

### Prefer Built-In Node APIs for Fundamentals

This repository intentionally avoids unnecessary dependencies so developers can understand Node.js itself.

### Use Modern Syntax

Examples generally use:

- `const`
- `let`
- arrow functions
- destructuring
- modern module syntax where appropriate

---

# Common Mistakes

## Mixing CommonJS and ESM Incorrectly

CommonJS:

```js
const module = require("./module");
```

ES Modules:

```js
import module from "./module.js";
```

These systems have different semantics and configuration expectations.

---

## Forgetting Export Statements

Defining a function does not automatically make it accessible from another module.

You must explicitly export it.

```js
module.exports = {
  add,
};
```

or:

```js
export const add = (a, b) => a + b;
```

---

## Blocking the Event Loop Unnecessarily

Synchronous filesystem operations can block execution.

Understand the difference between:

```js
fs.readFileSync(...)
```

and:

```js
fs.readFile(...)
```

before using them in larger applications.

---

## Confusing Scope

A variable declared inside a function or block is not automatically available outside that scope.

Always identify:

```text
Where was the variable declared?
What scope contains it?
Who can access it?
```

---

# Troubleshooting

## `node` Command Not Found

Verify Node.js installation:

```bash
node --version
```

If the command does not work, install Node.js and restart the terminal.

---

## Module Not Found

Check:

```text
File path
Filename
Extension
Directory location
Import/require statement
```

For example:

```js
require("./utils");
```

must point to the intended module location.

---

## ES Module Errors

When using ESM, verify:

- file extensions
- import syntax
- export syntax
- package configuration
- Node.js version

`.mjs` files can be used to explicitly mark files as ES Modules.

---

## Filesystem Errors

When working with files, check:

- current working directory
- file permissions
- file existence
- relative paths
- spelling

To inspect the current location:

```js
console.log(process.cwd());
```

---

# What You Will Learn

After working through this repository, you should be able to explain:

### Runtime

- What Node.js provides beyond browser JavaScript
- How Node.js executes modules
- What `global` represents
- What `__dirname` and `__filename` represent

### Modules

- How CommonJS works
- How ESM works
- The difference between `require()` and `import`
- Named versus default exports
- How modules share functionality

### Scope

- Module scope
- Function scope
- Block scope
- Global scope

### Events

- What an event emitter is
- How listeners are registered
- How events are emitted
- Why event-driven architecture matters

### Filesystem

- How files are written
- How files are read
- How content is appended
- How synchronous I/O differs from asynchronous I/O
- Why blocking operations matter

### Architecture

- Why code should be separated into modules
- How utilities can be reused
- How modules can be composed into larger systems

---

# Why These Fundamentals Matter

Framework knowledge changes quickly.

Fundamental runtime concepts remain useful across technologies.

For example, understanding Node.js modules helps when working with:

```text
Express.js
NestJS
Fastify
Next.js
CLI applications
Testing frameworks
Build tools
Server-side TypeScript
```

Understanding asynchronous execution helps when working with:

```text
HTTP requests
Databases
File systems
APIs
Streams
Queues
WebSockets
```

Understanding modules and separation of concerns helps developers design systems that are easier to maintain as they grow.

---

# Use Cases

This repository can be used for:

- Node.js beginners
- JavaScript developers transitioning to backend development
- Computer science students
- Self-taught developers
- Backend interview preparation
- Node.js revision
- Teaching and training
- Understanding Node.js runtime behavior
- Preparing for Express.js or other backend frameworks

---

# Future Improvements

Planned areas for expansion may include:

- Promises
- `async/await`
- Node.js path module
- Node.js OS module
- Node.js URL module
- Node.js process object
- environment variables
- Buffers
- Streams
- HTTP server fundamentals
- custom events
- error handling
- callback patterns
- Promise-based filesystem APIs
- package management
- `package.json`
- npm scripts
- Node.js testing
- debugging techniques
- performance fundamentals

The repository may gradually evolve from basic runtime demonstrations into a broader Node.js fundamentals reference.

---

# Contributing

Contributions are welcome.

Before submitting a contribution, make sure the change:

1. Demonstrates a meaningful Node.js concept.
2. Keeps the example easy to understand.
3. Follows the existing project structure.
4. Uses clear naming and formatting.
5. Does not introduce unnecessary dependencies.
6. Includes documentation when appropriate.

### Suggested Workflow

```bash
git clone https://github.com/md-abu-kayser/nodejs-fundamentals-demo.git

cd nodejs-fundamentals-demo

git checkout -b feature/your-feature
```

Make your changes, test the examples, then create a commit:

```bash
git add .
git commit -m "feat: add new Node.js fundamentals example"
```

Push the branch:

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

---

# Code Quality Philosophy

This repository follows a simple principle:

> **Code should be easy to read before it is clever.**

The examples prioritize:

```text
Clarity
   ↓
Correctness
   ↓
Consistency
   ↓
Maintainability
```

rather than unnecessary abstraction.

The objective is not to build the most complicated project possible.

The objective is to understand **why the code works**.

---

# License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

# Author

**Md. Abu Kayser**

GitHub: [@md-abu-kayser](https://github.com/md-abu-kayser)

---

# Final Note

Node.js becomes significantly easier to understand once the underlying runtime concepts are clear.

This repository is designed to provide that foundation through small, executable examples rather than abstract explanations alone.

Read the source.

Run the code.

Modify the examples.

Break things.

Fix them.

Repeat.

> **Strong backend development starts with strong fundamentals.**

---

<p align="center">
  Built with Node.js and JavaScript for learning, experimentation, and continuous improvement.
</p>

<p align="center">
  <sub>Learning the runtime. Understanding the architecture. Building better software.</sub>
</p>
