## Exercise 1: Create a Class Hierarchy

Define a class hierarchy representing different animals. Start with a base class "Animal" and create subclasses like "Cat," "Dog," "Bird," and "Fish."
Add properties and methods that are relevant to each type of animal. Extend the animal hierarchy by adding new properties and methods to the subclasses. For example, a "Cat" class might have properties like "name" and "breed," and a "meow" method.

## Exercise 2: Library Catalog

Create TypeScript classes to represent a library catalog. Define classes for books, authors, and library patrons.
Implement relationships such as a book being written by an author and borrowed by a patron. Include methods to check out and return books.

## Exercise 3: Higher-Order Functions, `where` and `select`:

1. Create a function called `where` that takes two parameters
   - an array of elements of the some type
   - a function that takes an element of that type and returns a boolean
2. The function should return a new array that contains only the elements for which the function returns true

1. Create a function that `select` takes two parameters
   - an array of elements of the some type
   - a function that takes an element of that type and returns a value of some other type
2. The function should return a new array that contains the values returned by the function for each element of the input array

## Exercise 4: Higher-Order Functions, `combine`:

1. Create a function called `combine` that takes two parameters
   - a function that takes an element of some type and returns a value of some other type
   - a function that takes two values of the second type and returns a value of the second type
2. The function should return a new function that takes two elements of the first type and returns a value of the second type
3. The returned function should apply the first function to each of its arguments and pass the results to the second function, returning the result
4. For example, if the first function is `x => x * x` and the second function is `(x, y) => x + y`, the returned function should take two arguments, apply `x => x * x` to each of them, and then apply `(x, y) => x + y` to the results. So, if the arguments are 3 and 4, the returned function should return 25.

## Exercise 5: Recursive Fibonacci Function:

Develop a recursive TypeScript function that calculates the [Fibonacci number](https://www.wikiwand.com/en/Fibonacci_number) for a given positive integer. Add a counter to the function to track the number of times the function is called.

Then, create a TypeScript function that uses memoization to cache the results of the Fibonacci function. Add a counter to this function as well.

## Exercise 6: Power function

Create a TypeScript function, `powerFunction`, that takes an exponent `n` as an argument and returns a new function. The returned function, when called with a number `x`, calculates and returns `x` raised to the power of `n`.

Requirements
- Implement a function powerFunction that takes an exponent n as an argument.
- powerFunction should return a new function that accepts a number x.
- The returned function should calculate and return x raised to the power of n.
- The returned function should correctly handle both positive and negative exponents.
- The returned function should handle fractional exponents (e.g., x raised to the power of 1/2 should calculate the square root of x).

```js
const square = powerFunction(2);
console.log(square(4)); // Output: 16

const cube = powerFunction(3);
console.log(cube(2)); // Output: 8

const sqrt = powerFunction(1/2);
console.log(sqrt(9)); // Output: 3
```

## Exercise 7: Currying and Partial Application

1. Create a TypeScript function, `fixFirstParameter`, that takes two parameters
   - a function that takes at least one parameter of a specific type
   - a value of that type
2. The function should return a new function that one parameter less than the original function (i.e. it does not take the first parameter)
3. The returned function should call the original function with the fixed value as the first parameter and the remaining parameters passed in order
4. For example, if the original function is `add(x, y)`, the returned function should take one parameter, `y`, and return `add(5, y)`