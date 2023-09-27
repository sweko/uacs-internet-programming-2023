# Week 1 Exercises: Introduction to Internet Programming and JavaScript

1. **Setting Up a Development Environment:**
   - In this exercise, students should set up a basic web development environment on their computers. This includes installing a text editor (e.g., Visual Studio Code) and a web browser (e.g., Google Chrome).

2. **Creating a Simple HTML Page:**
   - Have students create a basic HTML webpage with a title, headings, paragraphs, and links. This exercise helps them understand the structure of an HTML document.

3. **JavaScript Console Interaction:**
   - Introduce students to the browser's developer console. Have them experiment with simple JavaScript commands like `console.log()`. This exercise teaches students how to interact with JavaScript in the browser.

4. **Understanding HTTP:**
   - Provide a brief overview of HTTP and how it works. Ask students to use the browser's developer tools to inspect network requests when loading a webpage. They can look at request headers, response headers, and content.

5. **JavaScript Variables and Data Types:**
   - Assign variables and explore different data types (e.g., numbers, strings, booleans, arrays) in JavaScript. Encourage students to experiment with variable assignments and type conversions.

6. **Basic JavaScript Functions:**
   - Introduce students to JavaScript functions. Ask them to create simple functions that perform calculations or manipulate strings. Emphasize the use of parameters and return statements.

7. **DOM Manipulation:**
   - Provide a basic HTML page and ask students to use JavaScript to manipulate the DOM. For example, they can change the text of an HTML element or hide/show elements dynamically.


## 2. **Creating a Simple HTML Page:**

**Objective:** The goal of this exercise is to have students create a basic HTML webpage from scratch. This hands-on activity will help them understand the fundamental structure of an HTML document and become familiar with commonly used HTML elements.

**Instructions:**

1. **Open a Text Editor:** Start by opening a text editor of your choice. The prefered editor is Visual Studio Code, but you may use Sublime Text, Notepad++, Eclipse, Atom or any other editor of choice.

2. **Create a New HTML File:** Create a new file and save it with the ".html" file extension. For example, you can name it "index.html."

3. **Define the HTML Structure:** In your HTML file, begin by defining the basic structure of an HTML document. This includes the following elements:
   
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Your Page Title</title>
    </head>
    <body>
        <!-- Your content goes here -->
    </body>
    </html>
    ```

    - The `<!DOCTYPE html>` declaration defines the document type and version.
    - The `<html>` element is the root element that contains all other HTML elements.
    - The `<head>` element typically contains metadata about the page, including the title.
    - The `<title>` element sets the title of the webpage (this is what appears in the browser tab).
    - The `<body>` element contains the visible content of your webpage.
    - Add Content: Within the `<body>` element, add various HTML elements to create your webpage's content. For example:

    Use `<h1>`, `<h2>`, `<p>`, and `<a>` elements to create headings, paragraphs, and links.
    Experiment with different HTML elements to understand their roles and properties. e.g.
    
    ```html
    <h1>Welcome to My Webpage</h1>
    <p>This is a simple HTML page.</p>
    <h2>Here's a List:</h2>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
    </ul>
    ```

4. **Save and Open in a Browser**: After adding content, save your HTML file. Then, open it in a web browser (e.g., Google Chrome, Mozilla Firefox) to see how your webpage looks. You can do this by double clicking the file or dragging it into the browser window.  

5 **Review and Experiment**: Take a moment to review your webpage's structure and appearance in the browser. Experiment by modifying the content and structure to gain a better understanding of how HTML elements work.  

This exercise serves as an essential starting point for web development, as it introduces you to the basic structure of HTML documents and how HTML elements are used to create web content. Understanding these concepts is fundamental for building more complex web applications and pages.


## 3. **JavaScript Console Interaction**

**Introduction:**

The browser's developer console is a powerful tool that allows developers to interact with JavaScript, test code snippets, and troubleshoot issues. In this exercise, we'll introduce you to the basics of using the developer console and how to experiment with simple JavaScript commands like `console.log()`.

**Accessing the Developer Console:**

To open the developer console in most web browsers, you can press <kbd>F12</kbd> or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> (or <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd> on macOS) to toggle it. Alternatively, right-click anywhere on a web page, select "Inspect" or "Inspect Element," and navigate to the "Console" tab.

**Using `console.log()`:**

`console.log()` is a built-in JavaScript function used to log messages and data to the console. It's invaluable for debugging and understanding how your code is running. Here's how to use it:

```javascript
console.log("Hello, JavaScript!"); // Logs a string
console.log(42); // Logs a number
console.log(true); // Logs a boolean
```

**Experimenting with Data Types:**

You can experiment with different data types using `console.log()`` to observe how they behave:

```javascript
console.log("JavaScript"); // Logs a string
console.log(3.14); // Logs a floating-point number
console.log(true); // Logs a boolean
console.log(null); // Logs null
console.log(undefined); // Logs undefined
```

**Interpolating Variables:**

`console.log()`` allows you to interpolate variables within strings using template literals (introduced in ES6):

```javascript
const name = "Alice";
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);
```

**Using the Console for Debugging:**

One of the primary uses of the developer console is for debugging your code. You can add `console.log()`` statements to track variable values and control flow:

```javascript
function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
}

const result = add(5, 3);
console.log(`Result: ${result}`);
```

**Interactive Experimentation:**

The console is an interactive environment. You can type JavaScript expressions directly into the console and see the immediate results. Try entering mathematical calculations, manipulating arrays or objects, or testing functions:

```javascript
5 + 3; // Try mathematical operations
const fruits = ["apple", "banana", "cherry"];
fruits.length; // Accessing properties
```

**Errors and Debugging:**

The console is also where you'll see error messages when your code encounters issues. Understanding how to read and interpret these error messages is a crucial part of debugging.

## 4. Understanding HTTP

### Using Developer Tools for Inspection

Understanding how HTTP works often involves inspecting the actual network requests and responses when loading a webpage. Here's how to use your browser's developer tools for this purpose:

1. **Open Developer Tools:** Most browsers have developer tools that can be accessed by pressing `F12`, `Ctrl + Shift + I` (or `Cmd + Option + I` on macOS), or right-clicking on a webpage and selecting "Inspect" or "Inspect Element."

2. **Navigate to the Network Tab:** Within the developer tools, navigate to the "Network" tab. This tab displays a list of all network requests made by the webpage.

3. **Load a Webpage:** Go ahead and load a webpage by entering a URL or clicking on a link. As the page loads, you'll see a list of network requests being made in the "Network" tab.

4. **Inspect Requests and Responses:** Click on a specific request to inspect its details. You can view request headers, response headers, content, and more. This allows you to see the data being sent and received between your browser and the web server.

5. **Use Filters and Search:** Developer tools often provide filters and search functionality to help you quickly find specific requests or resources.

By inspecting network requests, you can gain insights into how web pages are constructed, which resources are being loaded, and whether there are any errors or performance issues.

### Conclusion

Understanding HTTP is fundamental for anyone working with web development. It's the protocol that enables the web to function, and knowing how to inspect network requests and responses using developer tools is a valuable skill for debugging, optimizing, and troubleshooting web applications.

## 5. JavaScript Variables and Data Types

### Introduction to Variables and Data Types

In JavaScript, variables are used to store and manage data. Understanding how to work with variables and different data types is fundamental to writing JavaScript code effectively. In this section, we'll introduce you to variables and explore various data types, including numbers, strings, booleans, and arrays. You'll have the opportunity to assign variables and experiment with different data types, including type conversions.

### Variables in JavaScript

A variable is a named container that can hold different types of data. Variables are declared using keywords like `var`, `let`, or `const`. Here's a brief overview of these variable declaration keywords:

- **`var`:** Historically used for variable declaration, but it has some scope-related issues. Variables declared with `var` are function-scoped or globally scoped, and they can be redeclared within the same scope.

- **`let`:** Introduced in ES6 (ECMAScript 2015), `let` is block-scoped, allowing better control over variable scope. Variables declared with `let` can be reassigned within the same scope but not redeclared.

- **`const`:** Also introduced in ES6, `const` is used for variables whose values should not change after assignment. It is block-scoped like `let` but cannot be reassigned once a value is assigned.

### Exploring Data Types

JavaScript supports various data types, and it's essential to understand how each type works. Here are some commonly used data types in JavaScript:

- **Numbers:** Represents both integers and floating-point numbers. For example:
  ```javascript
  let age = 25;
  let temperature = 98.6;
  ```

- **Strings:** Represents text data enclosed in single or double quotes. For example:

   ```javascript
   let name = 'Alice';
   let message = "Hello, JavaScript!";
   let greeting = `Hi, ${name}!`;
   ```

- **Booleans:** Represents true or false values, often used (and generated by) in conditional statements. For example:

   ```javascript
   let isStudent = true;
   let isLoggedIn = false;
   ```

- **Arrays:** Represents ordered lists of values, which can be of different data types. For example:

   ```javascript
   let fruits = ['apple', 'banana', 'cherry'];
   let mixedData = [42, 'JavaScript', true];
   ```

### Assigning Variables and Type Conversions
As you work with variables, you'll often need to assign values and perform type conversions. Here are some examples of variable assignments and type conversions:

- Assigning Values: You can assign values to variables using the assignment operator (=):

   ```javascript
   let score = 95;
   let greeting = 'Hello!';
   ```

- Type Conversions: JavaScript performs type conversion (coercion) when necessary. For example, it can convert a number to a string and vice versa:

   ```javascript
   let num = 42;
   let str = String(num); // Convert number to string
   let anotherNum = Number(str); // Convert string to number
   ```

### Experimentation and Exploration
Feel free to create variables, assign different values, and explore how JavaScript handles various data types and type conversions. Experimentation is an excellent way to deepen your understanding of JavaScript's behavior.

## 6. Basic JavaScript Functions

### Introduction to JavaScript Functions

JavaScript functions are essential building blocks in web development. They allow you to encapsulate reusable blocks of code, which can perform specific tasks, accept inputs (parameters), and return results. In this section, we'll introduce you to JavaScript functions and guide you through creating simple functions that perform calculations, manipulate strings, and understand the use of parameters and return statements.

### Creating JavaScript Functions

To create a JavaScript function, you use the `function` keyword, followed by a name for the function and a set of parentheses that may contain parameters (input values). Here's the basic syntax of a JavaScript function:

   ```javascript
   function functionName(parameter1, parameter2, ...) {
      // Function body - code to be executed
      // ...
      // Optional return statement
      return result;
   }
   ```

### Using Parameters and Return Statements
Parameters are placeholders for values that you pass into a function when you call it. Functions can also include a return statement to send a value back as the result of the function's execution.

Here's an example of a simple function that adds two numbers and returns the result:

   ```javascript
   function addNumbers(num1, num2) {
      let sum = num1 + num2;
      return sum;
   }
   ```
You can call this function by passing two numbers as arguments:

   ```javascript
   let result = addNumbers(5, 3); // result will be 8
   ```
### Functions with and without Return Values
Functions in JavaScript can either return a value or not return anything (in which case they implicitly return undefined). For example, a function that displays a message but doesn't return a value:

   ```javascript
   function showMessage(message) {
      console.log(message);
   }
   ```
Calling this function:

   ```javascript
   showMessage("Hello, JavaScript!"); // This function logs the message to the console but doesn't return a value.
   ```
### Function Expressions
In addition to the traditional function declaration syntax, JavaScript also supports function expressions. These are often used when you need to assign a function to a variable or pass a function as an argument to another function.

Here's an example of a function expression:

   ```javascript
   const multiply = function (num1, num2) {
      return num1 * num2;
   };
   ```
###  Experimenting with Functions
To deepen your understanding of JavaScript functions, experiment with the following tasks:

1. Create a function that calculates the area of a rectangle given its width and height as parameters.

2. Write a function that takes a string as input and returns the reversed string.

3. Explore functions without return statements. Create a function that displays a welcome message with the user's name as input.

## 7. DOM Manipulation

### Introduction to DOM (Document Object Model)

The Document Object Model (DOM) is a vital concept in web development, as it represents the structured content of an HTML document and allows JavaScript to interact with and manipulate the page dynamically. In this section, we'll introduce you to DOM manipulation and guide you through using JavaScript to modify elements within a basic HTML page.

### Understanding the DOM

The DOM is a hierarchical tree-like structure that represents the elements of an HTML document. Each HTML element (e.g., headings, paragraphs, images) is represented as a node in the DOM tree. JavaScript can access and modify these nodes, enabling developers to create interactive and dynamic web pages.

### Basic HTML Structure

To get started with DOM manipulation, let's create a basic HTML page with some elements to work with:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation Example</title>
</head>
<body>
    <h1 id="mainHeading">Welcome to DOM Manipulation</h1>
    <p>This is a paragraph.</p>
    <button id="changeTextButton">Change Text</button>
</body>
</html>
```
### Accessing DOM Elements
You can access DOM elements using JavaScript by selecting them based on their tag name, class, ID, or other attributes. Here's how to select elements by ID and store them in variables:

```javascript
// Get elements by ID and store them in variables
const headingElement = document.getElementById('mainHeading');
const buttonElement = document.getElementById('changeTextButton');
```
### Modifying DOM Elements
Once you have selected DOM elements, you can modify their properties, attributes, and content dynamically. Here's an example of changing the text of an HTML element when a button is clicked:

```javascript
// Add a click event listener to the button
buttonElement.addEventListener('click', function() {
    // Change the text of the heading
    headingElement.textContent = 'Text Changed!';
});
```
### Hiding and Showing Elements
You can also manipulate the visibility of elements. Here's an example of hiding and showing a paragraph element:

```javascript
// Hide the paragraph initially
document.querySelector('p').style.display = 'none';

// Add a click event listener to the button
buttonElement.addEventListener('click', function() {
    // Toggle the visibility of the paragraph
    const paragraph = document.querySelector('p');
    paragraph.style.display = (paragraph.style.display === 'none') ? 'block' : 'none';
});
```
### Experiment and Explore
To gain a deeper understanding of DOM manipulation, experiment with the following tasks:

1. Create a function that adds new HTML elements dynamically to the page (e.g., adding new paragraphs or images).

2. Implement a form that allows users to input text and dynamically create new elements or modify existing ones based on user input.

3. Explore other DOM manipulation methods, such as adding or removing classes, changing attributes, or reordering elements.