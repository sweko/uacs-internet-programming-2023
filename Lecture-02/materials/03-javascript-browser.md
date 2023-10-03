# Class 3: Javascript in the Browser

## Connecting HTML and JavaScript

### Introduction

One of the fundamental aspects of web development is connecting HTML (Hypertext Markup Language) and JavaScript. JavaScript is a versatile scripting language that allows you to add interactivity and dynamic behavior to your web pages. To achieve this, you need to know how to integrate JavaScript code with your HTML documents. In this class, we'll explore different methods for connecting HTML and JavaScript, from inline script tags to external script files.

### Inline JavaScript

Inline JavaScript refers to including JavaScript code directly within an HTML document. This is the simplest way to connect JavaScript with HTML. You can place JavaScript code within `<script>` tags in the HTML file. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Inline JavaScript Example</title>
</head>
<body>
    <h1>Hello, World!</h1>
    
    <script>
        // Inline JavaScript code
        alert("This is an inline JavaScript alert!");
    </script>
</body>
</html>
```

In this example, the JavaScript code is embedded directly within the HTML file using the `<script>` tags.

### External JavaScript Files

For larger JavaScript applications or for better code organization, it's common to store JavaScript code in separate external files with a .js extension. You can then reference these external files in your HTML documents using the `<script>` tag's src attribute. Here's how it works:

1. Create an external JavaScript file, e.g., `script.js`, with your JavaScript code:

```javascript
// script.js
function greet() {
    alert("Hello from an external JavaScript file!");
}
```

2. Reference the external JavaScript file in your HTML document. We do that by adding a `<script>` tag with the src attribute. We could add the `<script>` tag in the `<head>` or `<body>` section of the HTML document, but it's best practice to add it in the `<head>` section ([opinions differ, though](https://levelup.gitconnected.com/all-about-script-87fea475b976#)) . Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>External JavaScript Example</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Hello, World!</h1>
    
    <button onclick="greet()">Click me</button>
</body>
</html>
```

In this example, the script.js file is linked to the HTML document using the `<script>` tag's src attribute. The `onclick` attribute of the button element calls the `greet()` function defined in the external JavaScript file. Using external JavaScript files is a common practice in web development.

### Asynchronous Loading

When including external JavaScript files, you can specify whether the script should be loaded asynchronously or synchronously. Asynchronous loading allows the HTML page to continue rendering while the script is being fetched. To load a script asynchronously, you can add the async attribute to the `<script>` tag:

```html
<script src="script.js" async></script>
```

### Defer Attribute

Another way to control the order in which scripts are executed is by using the defer attribute on the `<script>` tag. When a script is deferred, it will be executed after the HTML content has been parsed but before the `DOMContentLoaded` event is fired. This can be useful for ensuring that scripts do not block page rendering. Here's an example:

```html
<script src="script.js" defer></script>
```

The difference between synchronous and asynchronous loading is illustrated in the following diagram:

![Synchronous vs Asynchronous Loading](https://www.josefzacek.cz/wp-content/uploads/2018/03/whats-the-difference-between-async-vs-defer-attributes.jpg)

## Exploring Browser Developer Tools

**Browser Developer Tools** are an indispensable part of a web developer's toolkit. They provide a suite of features that empower developers to inspect, debug, and optimize web pages. In this class, we'll delve into the world of Browser Developer Tools, exploring their capabilities and understanding how they aid in web development.

### Introduction to Developer Tools

Browser Developer Tools are integrated into modern web browsers and serve as a powerhouse for web developers. They offer a range of features that allow you to inspect the structure of web pages, debug JavaScript code, analyze network requests, and much more.

### Using the JavaScript Console

The **JavaScript Console** is a critical component of Developer Tools. It provides an interactive environment for executing JavaScript code and debugging. Here are some key aspects of using the JavaScript Console:

- **Logging Messages:** You can use `console.log()` to output messages, variables, and debugging information to the console. This helps you understand the flow of your code and inspect variable values.

- **Interactive Testing:** The console allows you to interactively test JavaScript expressions and functions. You can directly type JavaScript commands and see immediate results.

- **Error Handling:** When your code encounters errors, the console displays detailed error messages, including the error type, location, and stack trace. This information is invaluable for identifying and fixing issues.

### Inspecting and Debugging Web Pages

Browser Developer Tools provide a set of tools for inspecting and debugging web pages. Here are some key features:

- **Element Inspection:** You can inspect and manipulate HTML elements on the page. Hover over elements in the Elements panel to highlight them on the page, view and edit HTML and CSS, and experiment with changes in real-time.

- **Network Analysis:** The Network panel allows you to monitor network requests made by the page. You can inspect request and response headers, view the content of resources, and analyze load times. This is vital for optimizing web performance.

- **JavaScript Debugging:** The Sources panel provides a full-fledged JavaScript debugger. You can set breakpoints, step through code, and inspect variables. Understanding how to use the debugger is crucial for finding and fixing JavaScript bugs.

- **Performance Profiling:** Developer Tools include performance profiling tools that help you identify bottlenecks in your web applications. You can analyze CPU usage, memory consumption, and rendering performance.

### Hands-On Practice

To get the most out of this class, hands-on practice is essential. Here are some exercises to reinforce your learning:

1. **Inspect and Modify Elements:** Open Developer Tools, navigate to the Elements panel, and inspect various elements on a webpage. Experiment with modifying the HTML and CSS of the page in real-time.

2. **JavaScript Debugging:** Use the debugger in the Sources panel to step through and debug a JavaScript function. Set breakpoints, watch variable values, and understand how to diagnose issues in your code.

3. **Network Analysis:** Visit a webpage and open the Network panel to analyze the network requests made by the page. Pay attention to request headers, response data, and load times.

4. **Performance Profiling:** Profile the performance of a web page using the Performance panel. Identify areas where improvements can be made to enhance page load times.

### Conclusion

Mastering Browser Developer Tools is a key milestone in becoming an effective web developer. These tools empower you to inspect, debug, and optimize web pages with precision. By gaining proficiency in Developer Tools, you'll be better equipped to create high-performance and error-free web applications.
