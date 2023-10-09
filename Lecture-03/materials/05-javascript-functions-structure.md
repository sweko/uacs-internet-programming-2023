# Class 5: Functions and Control Structures

## Overview

In this class, we will explore essential programming constructs in JavaScript, including conditional statements, loops, functions, and error handling. These foundational concepts are crucial for controlling program flow, implementing logic, and handling exceptions.

## Topics Covered

1. **Conditional Statements (if, else, switch)**
   - Understanding Conditional Logic
   - The `if` Statement
   - The `else` Statement
   - The `switch` Statement

2. **Loops (for, while)**
   - Iteration and Repetition
   - The `for` Loop
   - The `while` Loop
   - Loop Control Statements (e.g., `break` and `continue`)

3. **Working with Functions**
   - Function Declarations vs. Expressions
   - Parameters and Arguments
   - Returning Values from Functions

4. **Error Handling**
   - Handling Exceptions with `try...catch`
   - Throwing Custom Errors
   - Best Practices in Error Handling

## Prerequisites

- Basic knowledge of JavaScript fundamentals (variables, data types, and operators).
- Familiarity with basic programming concepts such as variables and expressions.
- Access to a code editor and a web browser for hands-on exercises.


## Conditional Statements

**Conditional statements** are essential for controlling the flow of a program. They allow your code to make decisions and execute different branches of code based on specific conditions.

### if Statement

The `if` statement is the fundamental building block of conditional logic. It allows you to execute a block of code if a condition evaluates to `true`.

```javascript
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

### else Statement
The `else` statement is often used in conjunction with `if`. It provides an alternative code block to execute when the condition in the `if` statement evaluates to `false`.

### switch Statement
The `switch` statement is used when you have multiple possible conditions to check against a single value. It provides a more structured way to handle such scenarios.

```javascript
switch (value) {
    case condition1:
        // Code to execute if value matches condition1
        break;
    case condition2:
        // Code to execute if value matches condition2
        break;
    default:
        // Code to execute if none of the conditions match
}
```

## Loops
**Loops** are used to execute a block of code repeatedly. They are crucial for automating tasks and iterating through collections of data.

### The basic `for` Loop
The `for` loop is commonly used for iterating over a range of values or elements in an array. It consists of three parts: *initialization*, *condition*, and *update*.

```javascript
for (let i = 0; i < length; i++) {
    // Code to execute in each iteration
}
```

### The `for...in` Loop
The `for...in` loop is used to iterate over the properties of an object. It is suitable for enumerating the properties of an object or array.

```javascript
const person = {
    name: 'John',
    age: 30
};

for (const key in person) {
    console.log(key, person[key]);
}
```

### The `for...of` Loop

The `for...of` loop is used to iterate over the elements of an array. It is suitable for iterating over the elements of an array.

```javascript
const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
    console.log(fruit);
}
```

### `while` Loop
The `while` loop repeats a block of code as long as a specified condition is `true`. It is suitable when you don't know the number of iterations in advance.

```javascript
while (condition) {
    // Code to execute as long as the condition is true
}
```

### `do...while` Loop
The `do...while` loop is similar to the `while` loop, except that it always executes the block of code at least once, even if the condition is `false`.

```javascript
do {
    // Code to execute at least once
} while (condition);
```

### Loop Control Statements
Loop control statements allow you to control the execution of loops. They can be used to terminate a loop early or skip the current iteration.

#### `break` Statement

The `break` statement is used in JavaScript to exit or terminate the execution of a loop prematurely. It is often used inside loops (such as `for` or `while`) to control the flow of the program. When a break statement is encountered, the program immediately exits the loop, and execution continues with the next statement after the loop.

```javascript
const numbers = [1, 2, 3, 4, 5];
const target = 3;
for (let i = 0; i < numbers.length; i++) {
    console.log(`Visiting index ${i}`);
    if (numbers[i] === target) {
        console.log(`Target found at index ${i}`);
        break;
    }
}
```

#### `continue` Statement

The continue statement is also used in loops, but it serves a different purpose. When a continue statement is encountered inside a loop, it skips the current iteration of the loop and moves to the next iteration. In other words, it allows you to bypass the remaining code in the current iteration and proceed with the next iteration of the loop.

```javascript
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(numbers[i]); // Print odd numbers
    // Do other stuff
}

```

## Working with Functions
Functions are reusable blocks of code that perform specific tasks. They help organize code, improve maintainability, and promote code reuse.

### Function Declaration
A **Function Declaration** in JavaScript is a way to define a named function that can be called and reused throughout your code. It is one of the fundamental building blocks of JavaScript programming, allowing you to encapsulate a block of code into a named entity for better organization and reusability.

The syntax for a Function Declaration consists of the `function` keyword followed by the function name, a pair of parentheses for parameters (if any), and a block of code enclosed in curly braces `{}`. Here's a basic example:

```javascript
function functionName(parameter1, parameter2) {
    // Code to execute
    return result;
}
```

- `function`: The function keyword is used to declare a function.
- `functionName`: This is the name you choose for your function. It should be a meaningful and descriptive name that represents what the function does.
- `(parameter1, parameter2)`: Inside the parentheses, you can specify parameters (input values) that the function accepts. Parameters are optional, and you can have none, one, or multiple parameters. If a function accepts parameters, they are specified as a comma-separated list inside the parentheses.
- `{ /* Code to be executed */ }`: The block of code inside the curly braces {} defines the function's behavior. This code will run when the function is called.
- `return result` - Functions often use the return statement to send a value back to the code that called the function. The return statement specifies the result or output of the function.

### Function Invocation
To execute or "call" a Function Declaration, you simply use its name followed by parentheses, optionally passing arguments (values) for the parameters defined in the function declaration.

```javascript
const result = functionName(arg1, arg2);
```

- `functionName`: The name of the function to call. If the function was declared with the `function` keyword, you can simply use the function name. If the function was defined with a function expression, you can use the variable name that the function was assigned to.
- `(arg1, arg2)`: Arguments (values) to pass to the function. If the function accepts parameters, the arguments are specified as a comma-separated list inside the parentheses. If the function has more parameters than arguments, the remaining parameters will be set to `undefined`. If the function has fewer parameters than arguments, the extra arguments will be ignored (aside from functions with the `...rest` parameter, which we'll cover later).
- `result`: The result of the function call. If the function returns a value, you can store it in a variable. If the function doesn't return anything, the result will be `undefined`.

### Function Expression
Function expressions are another way to define functions. They can be anonymous or named and are often assigned to variables.

```javascript
const myFunction = function(parameter) {
    // Code to execute
};
```

### Anonymous Functions
Anonymous functions are functions that are not named. They are often used as callback functions or immediately invoked.

```javascript
document.addEventListener('click', function() {
    // Code to execute
});
```

### Arrow Functions
Arrow functions provide a concise syntax for defining functions. They are especially useful for simple, one-line functions.

```javascript
const add = (a, b) => a + b;

// Equivalent to:
const add = function (a, b) {
    return a + b;
}
```

### IIFE (Immediately Invoked Function Expression)

IIFE, pronounced "iffy," stands for Immediately Invoked Function Expression. It is a common JavaScript design pattern that encapsulates a function within parentheses and immediately invokes it. This pattern is used to create a private scope for variables and functions, preventing them from polluting the global scope.

#### Basic Syntax

Here's the basic syntax of an IIFE:

```javascript
(function() {
    // Code to be executed immediately
})();
```

Benifits of IIFE:
- Encapsulates variables and functions
- Prevents pollution of the global scope

### Recursion

Recursion in JavaScript refers to a programming technique where a function calls itself to solve a problem or perform a task. It's a fundamental concept in computer science and is often used when a problem can be broken down into smaller, similar subproblems. Recursive functions have two main components:

- ***Base Case***: A termination condition or base case is a condition that stops the recursion. When the base case is met, the function stops calling itself and starts returning values.

- ***Recursive Case***: The recursive case is where the function calls itself with modified arguments to solve a smaller instance of the same problem. This process continues until the base case is reached.

Here's a simple example of a recursive function in JavaScript:

```js
function factorial(n) {
    // Base case: If n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case: Multiply n by the factorial of (n-1)
    return n * factorial(n - 1);
}

// Lots of recursive functions can be rewritten as iterative functions, which are often longer and can look more complicated.
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }

// Example usage:
var result = factorial(5); // Calculates 5! (5 factorial)
console.log(result); // Output: 120
```


## Error Handling
Error handling is a critical aspect of software development in any programming language, including JavaScript. It serves several important purposes that help improve the reliability and robustness of software systems. 

### Why we need error handling?


1. Graceful Failure  
Errors and unexpected situations can occur in software for various reasons, such as invalid input, network issues, or system failures. Without proper error handling, these issues can lead to program crashes or unpredictable behavior, negatively affecting user experience. Error handling allows software to fail gracefully by handling errors in a controlled manner, preventing crashes, and providing meaningful feedback to users.

2. Debugging and Troubleshooting  
Error handling provides valuable information for debugging and troubleshooting. When an error occurs, error messages and stack traces can help developers identify the root cause of the issue quickly. This information assists in diagnosing problems, understanding where and why they occurred, and ultimately fixing them.

3. Maintaining Data Integrity  
In applications that involve data manipulation or storage, error handling is crucial for maintaining data integrity. Handling errors during data transactions, such as database operations or file I/O, ensures that data remains consistent and accurate, even in the presence of unexpected issues.

4. Security  
Proper error handling is a security best practice. Failing to handle errors can create vulnerabilities that malicious actors can exploit. For example, not validating user input or not handling authentication errors can lead to security breaches. Error handling helps identify and mitigate security risks.

5. Enhancing User Experience  
User-friendly error messages and handling can significantly improve the user experience. Instead of displaying cryptic error messages or crashing, well-designed error handling provides clear and informative feedback to users. This helps users understand the problem and often suggests actions to resolve it, reducing frustration and increasing user confidence.

6. Predictable Behavior  
Error handling ensures that software behaves predictably in adverse conditions. When errors are not handled, the program's behavior becomes unpredictable, making it challenging to maintain, test, and predict outcomes.

7. Robustness  
Robust software can withstand unforeseen circumstances and continue functioning. Error handling contributes to the robustness of software systems by allowing them to handle exceptions, recover gracefully, and continue to execute important tasks.

8. Reporting and Auditing  
Proper error handling also facilitates reporting and auditing, as errors and exceptions are logged and tracked for analysis and compliance purposes.

### `try`...`catch` Statement
The `try`...``catch` statement is used to catch and handle exceptions (errors) that occur within a block of code.

```javascript
try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
}
```

### throw Statement
The `throw` statement allows you to create and throw custom errors in your code. This can be useful for signaling exceptional conditions.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
```

### The `try...finally` Statement in JavaScript

The `try...finally` statement is a powerful error-handling construct in JavaScript that allows you to define code that should always be executed, regardless of whether an exception (error) was thrown within a `try` block. It ensures that certain cleanup or finalization tasks are performed, making it particularly useful for resource management.

The `try...finally` statement consists of two main parts:

- `try` block: This is where you place the code that you want to monitor for exceptions. If an exception occurs within this block, it is caught, and the control flow jumps to the `finally` block.

- `finally` block: This block contains code that will be executed no matter what happens in the `try` block. Even if an exception is thrown and caught, the `finally` block will run.

Here's the basic syntax:

```javascript
try {
    // Code that may throw an exception
} finally {
    // Code to be executed regardless of exceptions
}
```

The primary use case for `try...finally` is to ensure that resources are properly released or that specific cleanup actions are taken, even in the presence of exceptions. For example, when working with files or network connections, you can use `try...finally` to guarantee that the resources are closed or released:

```javascript
let file = openFile();

try {
    // Code that may throw an exception while working with the file
} finally {
    // Ensure the file is always closed, even if an exception occurs
    closeFile(file);
}
```