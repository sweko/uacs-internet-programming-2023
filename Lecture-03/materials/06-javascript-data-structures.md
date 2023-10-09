# Class 6: JavaScript Data Structures

## Overview

In this class, we will dive into JavaScript data structures, including arrays, objects, and maps. We'll explore how to work with these data structures effectively, perform various data manipulations, and introduce you to some advanced features introduced in ES6 and beyond.

## Topics Covered

1. **Arrays, Objects, and Maps**
   - Understanding Arrays
   - Working with Objects
   - Introduction to Maps

2. **Iteration and Data Manipulation**
   - Iterating Through Arrays and Objects
   - Data Manipulation with Array Methods (e.g., `map`, `filter`, `reduce`)
   - Modifying and Updating Objects

3. **Introduction to ES6+ Features**
   - Destructuring Assignment
   - Spread and Rest Operators
   - Template Literals

## Prerequisites

- Basic knowledge of JavaScript fundamentals (variables, functions, control structures).
- Familiarity with basic array operations (e.g., iterating through arrays).
- Access to a code editor and a web browser for hands-on exercises.

## Arrays

In JavaScript, data structures are fundamental to organizing and manipulating data effectively. In this section, we'll explore three important data structures: arrays, objects, and maps.

### Understanding Arrays

**Arrays** are ordered collections of values. Each value in an array is identified by an index, starting from 0 for the first element. Arrays can hold a mix of data types, including numbers, strings, objects, and even other arrays. However, it's best to keep arrays homogeneous, meaning that all elements are of the same type.

Key concepts related to arrays:

- **Indexing**: Accessing elements in an array using numeric indices.

```js
// Define an array of fruits
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Access elements using array indexing
const firstFruit = fruits[0]; // "apple"
const secondFruit = fruits[1]; // "banana"
const thirdFruit = fruits[2]; // "cherry"

// Modify an element using array indexing
fruits[3] = "grape"; // Change "date" to "grape"

// Accessing an element out of bounds (undefined)
const tenthFruit = fruits[10]; // undefined

// Finding the length of the array
const numberOfFruits = fruits.length; // 5

// Iterating through the array using a loop
for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    console.log(`Fruit at index ${index}: ${fruit}`);
}

// Output:
// Fruit at index 0: apple
// Fruit at index 1: banana
// Fruit at index 2: cherry
// Fruit at index 3: grape
// Fruit at index 4: elderberry
```

- **Methods**: Built-in array methods for common operations (e.g., `push`, `pop`, `splice`, `forEach`).

```js
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// 1. Array.push() - Add elements to the end of an array
numbers.push(6, 7); // numbers = [1, 2, 3, 4, 5, 6, 7]

// 2. Array.pop() - Remove and return the last element of an array
const lastNumber = numbers.pop(); // lastNumber = 7, numbers = [1, 2, 3, 4, 5, 6]

// 3. Array.unshift() - Add elements to the beginning of an array
numbers.unshift(0); // numbers = [0, 1, 2, 3, 4, 5, 6]

// 4. Array.shift() - Remove and return the first element of an array
const firstNumber = numbers.shift(); // firstNumber = 0, numbers = [1, 2, 3, 4, 5, 6]

// 5. Array.indexOf() - Find the index of a specific element
const indexOfThree = numbers.indexOf(3); // indexOfThree = 2

// 6. Array.slice() - Create a new array by extracting a portion of an existing array
const slicedNumbers = numbers.slice(2, 4); // slicedNumbers = [3, 4]

// 7. Array.splice() - Modify an array by adding, removing, or replacing elements
numbers.splice(2, 2, 'a', 'b'); // numbers = [1, 2, 'a', 'b', 5, 6]

// 8. Array.concat() - Combine two or more arrays to create a new array
const moreNumbers = [7, 8, 9, 10];
const combinedNumbers = numbers.concat(moreNumbers); // combinedNumbers = [1, 2, 'a', 'b', 5, 6, 7, 8, 9, 10]

// 9. Array.join() - Create a string by joining all elements of an array
const numberString = numbers.join(', '); // numberString = "1, 2, a, b, 5, 6"

numbers.push(10); // numbers = [1, 2, 'a', 'b', 5, 6, 10]
numbers.splice(2, 2); // numbers = [1, 2, 5, 6, 10]

// 10. Array.sort() - Sort the elements of an array (in-place)
// This method sorts elements as strings by default, so numbers will be sorted alphabetically - which is not what we want!
// To sort numbers, we need to pass in a compare function
numbers.sort(); // numbers = [1, 10, 2, 5, 6]

numbers.sort(function(a, b) {
    return a - b;
}); // numbers = [1, 2, 5, 6, 10]

// 11. Array.reverse() - Reverse the order of elements in an array (in-place)
numbers.reverse(); // numbers = [10, 6, 5, 2, 1]

// 12. Array.map() - Create a new array by applying a function to each element
const squaredNumbers = numbers.map(function(element) {
    return element * element;
});
// squaredNumbers = [100, 36, 25, 4, 1]

// 13. Array.filter() - Create a new array with elements that pass a test
const evensOnly = numbers.filter(function(element) {
    return element % 2 === 0;
});
// numbersOnly = [10, 6, 2]

// 14. Array.reduce() - Reduce an array to a single value by applying a function
const sumOfNumbers = evensOnly.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// sumOfNumbers = 18

```
- **Iterating**: Looping through array elements for processing.

```js
// Define an array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// 1. Using a for loop for iteration
console.log("Using a for loop:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 2. Using a forEach loop for iteration - the professor does not like this one, because it's just like a for...of loop, but less explicit. 
// A function should return something, but forEach does not - it's explicitly used for side effects, which is not a good practice.

console.log("Using a forEach loop:");
names.forEach(function(name) {
    console.log(name);
});

// 3. Using a for...of loop for iteration (ES6+ feature) - this is the preferred way of iterating through an array
console.log("Using a for...of loop:");
for (const name of names) {
    console.log(name);
}

// 4. Using a map function for iteration and transformation
console.log("Using a map function for iteration and transformation:");
const nameLengths = names.map(function(name) {
    return name.length;
});
console.log(nameLengths);

// 5. Using a filter function for conditional iteration
console.log("Using a filter function for conditional iteration:");
const shortNames = names.filter(function(name) {
    return name.length <= 4;
});
console.log(shortNames);

// 6. Using a reduce function for cumulative iteration - it's ok if this looks complicated, because it is. Feel free to use a for loop instead - it's more readable, and it's not that much slower.
console.log("Using a reduce function for cumulative iteration:");
const nameConcatenation = names.reduce(function(accumulator, currentValue) {
    return accumulator + " and " + currentValue;
});
console.log(nameConcatenation);

// 7. Using a while loop for iteration with a condition
console.log("Using a while loop:");
const i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}
```

## Working with Objects

**Objects** are collections of key-value pairs, where each key (also called a property) is associated with a value. Objects are versatile and can represent complex data structures.

Key concepts related to objects:

- **Creation**: Creating objects using object literal notation or a constructor.
- **Properties**: Storing and accessing data using object properties.
- **Methods**: Functions defined within objects to perform actions or calculations.

### Object Creation

Objects can be created using object literal notation or by using a constructor and the `new` keyword (which we won't cover right now).

```js
// Using object literal notation
const person = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 46,
    isStudent: false
};
```

### Accessing Properties

Properties can be accessed using dot notation or bracket notation.

```js
// Using dot notation
const firstName = person.firstName; // "Wekoslav"
const lastName = person.lastName; // "Stefanovski"

// Using bracket notation
const age = person["age"]; // 46
const isStudent = person["isStudent"]; // false
```

### Modifying Properties

Properties can be modified by assigning a new value to the property.

```js
// Modify an existing property
person.age = 31; // person.age is now 31

// Add a new property

person["isMarried"] = true; // person.isMarried is now true

// Remove a property
delete person.isStudent; // person.isStudent is now undefined
```

### Checking for Property Existence

The `in` operator can be used to check if an object has a specific property.

```js
// Check if a property exists
const hasAge = "age" in person; // true

// Check if a property does not exist

const hasOccupation = "occupation" in person; // false
```

Alternatively, the `hasOwnProperty` method can be used to check if an object has a specific property.

```js
// Check if a property exists
const hasAge = person.hasOwnProperty("age"); // true

// Check if a property does not exist
const hasOccupation = person.hasOwnProperty("occupation"); // false
```


### Iterating Through Properties

Objects can be iterated using a `for...in` loop.

```js

// Iterate through properties

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Output:

// firstName: Wekoslav
// lastName: Stefanovski
// age: 31
// isMarried: true
```

### Nested Objects

Of course, since objects are values, that means that the properties of an object can be other objects or arrays, or even, arrays of objects.

```js
const user = {
    username: "jsmith",
    email: "jsmith@example.com",
    isAdmin: false,
    profile: {
        fullName: "John Smith",
        age: 35
    },
    hobbies: ["reading", "gardening"]
};
```

### Object Methods
In JavaScript, object methods are functions defined within objects. These methods can perform actions or calculations related to the object's data. Object methods are a powerful way to encapsulate functionality and behavior within objects, making them more self-contained and reusable.

#### Defining Object Methods
To define an object method, you add a function as a property of an object.

```js
const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
```

In this example, `getFullName` is a method of the `person` object. It is a function that returns the full name by accessing the object's properties.

#### Accessing Object Methods
You can access object methods in the same way you access object properties, using dot notation.

```js
console.log(person.getFullName()); // Output: "John Doe"
```

#### Using `this` in Object Methods

Inside an object method, you can use the `this` keyword to refer to the current object. It allows you to access other properties and methods of the same object.

```js
const calculator = {
    value: 0,
    add: function(x) {
        this.value += x;
    },
    subtract: function(x) {
        this.value -= x;
    }
};

calculator.add(5);
console.log(calculator.value); // Output: 5
calculator.subtract(2);
console.log(calculator.value); // Output: 3
```

In this example, the `add` and `subtract` methods use the `this` keyword to access and modify the `value` property of the `calculator` object.

## Introduction to Maps

**Maps** are a modern addition to JavaScript data structures, introduced in ES6. They are similar to objects but offer advantages in certain scenarios. Maps allow any data type as keys and maintain the order of key-value pairs.

Key concepts related to maps:

- **Key-Value Pairs**: Storing data as pairs, where each key maps to a corresponding value.
- **Map Methods**: Built-in methods like `set`, `get`, `has`, and `delete` for efficient data manipulation.
- **Iterating**: Looping through map entries using `forEach` or other iteration methods.

### Creating Maps

Maps can be created using the `new` keyword and the `Map` constructor.

```js
// Create an empty map
const map = new Map();

// Create a map with initial values
const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);
```

### Adding and Updating Entries

Entries can be added to a map using the `set` method. If the key already exists, the value will be updated.

```js
// Add a new entry
map.set("key4", "value4");

// Update an existing entry
map.set("key1", "updated value1");
```

### Accessing Entries

Entries can be accessed using the `get` method.

```js
const value = map.get("key1");
```

### Checking for Entry Existence

The `has` method can be used to check if a map has a specific entry.

```js
const hasKey = map.has("key1");
```

### Removing Entries

Entries can be removed using the `delete` method.

```js
map.delete("key1");
```

## New Features in ES6+

JavaScript is not a static language. It is constantly evolving, with new features being added to the language every year. In this section, we'll explore some of the new features introduced in ES6 and beyond. These features are supported by all modern browsers and Node.js, so you can use them in your projects today. We'll cover the following features:

- **Destructuring Assignment**: A convenient way to extract values from arrays and objects.
- **Spread and Rest Operators**: Powerful operators for working with arrays and objects.
- **Template Literals**: A new way to create strings.

### Destructuring Assignment

**Destructuring assignment** is a convenient way to extract values from arrays and objects. It allows you to assign values to multiple variables at once, using a single statement.

**Destructuring an Array**

```js
// Using traditional array assignment
const colors = ["red", "green", "blue"];

const firstColor = colors[0];
const secondColor = colors[1];

// Using destructuring assignment
const [first, second] = colors;
console.log(first); // Output: "red"
console.log(second); // Output: "green"
```

**Destructuring an Object**

```js
// Using traditional object assignment
const person = { firstName: "John", lastName: "Doe" };
const firstName = person.firstName;
const lastName = person.lastName;

// Using destructuring assignment
const { firstName, lastName } = person;
console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"
```

**Destructuring Nested Objects**

```js
const person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "North 1st Street",
        city: "San Jose",
        state: "CA",
        country: "USA"
    }
};

// Using traditional object assignment
const street = person.address.street;
const city = person.address.city;
const state = person.address.state;
const country = person.address.country;

// Using destructuring assignment
const { street, city, state, country } = person.address;

console.log(street); // Output: "North 1st Street"
```

**Destructuring Function Parameters**

```js
// Using traditional function parameters
function printFullName(person) {
    const firstName = person.firstName;
    const lastName = person.lastName;
    console.log(`${firstName} ${lastName}`);
}

// Using destructuring assignment
function printFullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
}
```

### Spread and Rest Operators

The **spread operator** (`...`) and **rest operator** (`...`) are powerful operators for working with arrays and objects. They are similar in syntax but have different use cases. The spread operator is used to expand an array or object, while the rest operator is used to collect multiple elements into an array. Let's explore these operators in more detail.

**Spread Operator**

The spread operator is used to expand an array or object. It can be used to create a copy of an array or object, or to combine multiple arrays or objects into a single array or object. It can also be used to convert an iterable (like a string) into an array.

```js
// Copy an array
const colors = ["red", "green", "blue"];
const copyOfColors = [...colors];

// Combine arrays

const primaryColors = ["red", "green", "blue"];
const secondaryColors = ["orange", "purple", "green"];
const allColors = [...primaryColors, ...secondaryColors];

// Copy an object
const person = { firstName: "John", lastName: "Doe" };
const copyOfPerson = { ...person };

// Combine objects
const person = { firstName: "John", lastName: "Doe" };
const address = { street: "North 1st Street", city: "San Jose", state: "CA", country: "USA" };
const personWithAddress = { ...person, ...address };

// Convert a string to an array
const name = "John Doe";
const nameArray = [...name]; // ["J", "o", "h", "n", " ", "D", "o", "e"]
```

**Rest Operator**

The rest operator is used to collect multiple elements into an array. It can be used to collect the remaining elements of an array or object destructuring pattern, or to collect function arguments into an array.

```js
// Collect remaining elements of an array destructuring pattern
const colors = ["red", "green", "blue"];
const [firstColor, ...restColors] = colors;

// Collect remaining properties of an object destructuring pattern
const person = { firstName: "John", lastName: "Doe", age: 35 };
const { age, ...personInfo } = person;

// Collect function arguments into an array
function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

sum(1, 2, 3); // 6
```

### Template Literals

**Template literals** are a new way to create strings. They are enclosed by backticks (`` ` ``) instead of single or double quotes. Template literals support interpolation, allowing you to embed expressions within a string.

```js
// Using traditional string concatenation
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

// Using template literals
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
```

Template literals also support multi-line strings, which can be created without using escape characters.

```js
// Using traditional string concatenation
const address = "North 1st Street\nSan Jose, CA\nUSA";

// Using template literals
const address = `North 1st Street
San Jose, CA
USA`;
```

## Summary

In this class, we explored JavaScript data structures, including arrays, objects, and maps. We learned how to work with these data structures effectively, perform various data manipulations, and introduced you to some advanced features introduced in ES6 and beyond. Here are some key takeaways from this class:

- Arrays are ordered collections of values, identified by numeric indices.
- Objects are collections of key-value pairs, where each key maps to a corresponding value.
- Maps are similar to objects but offer advantages in certain scenarios.
- Destructuring assignment is a convenient way to extract values from arrays and objects.

By understanding arrays, objects, and maps, you'll have a solid foundation for organizing and working with data in JavaScript, enabling you to build more powerful and efficient applications.

## Best Practices

- Choose the appropriate data structure based on your data and use case.
- Familiarize yourself with built-in methods for efficient data manipulation.
- Practice good naming conventions for keys and variables.