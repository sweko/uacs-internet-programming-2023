## Exercise 1: Compiling TypeScript

- Create a TypeScript file named `greet.ts` with a function that accepts a `name` as a parameter and returns a greeting message.
- Compile the `greet.ts` file to JavaScript using the TypeScript compiler (tsc) and run the generated JavaScript file. Verify that it works as expected.
- Create a tsconfig.json file to configure TypeScript compilation options for your project. Make sure it includes outDir, target, and module options.

## Exercise 2: Basic TypeScript Syntax

Create a TypeScript file named `basic.ts` and complete the following tasks:

- Declare a variable of type `number` named `age` and assign it the value 25.
- Declare a string variable named `name` with a type annotation, and set it to your name.
- Create a function named `addNumbers` that takes two parameters, `first` and `second`, both of type `number`, and returns their sum.
- Call this function and store the result in a variable, then log the result to the console.

## Exercise 3: Interfaces and Classes

Create a TypeScript file named `interfaces.ts` and complete the following tasks:

- Define an interface `Person` with properties `name` and `age`, both of type `string`. Create an object of type `Person` and assign values to its properties.
- Create a class `Car` with properties `make`, `model`, and `year`, all of type `string`. Instantiate an object of the `Car` class and set its properties.
- Create an interface named `User` that extends the `Person` interface. It should have a property named `email` of type string. Create an object of type `User` and assign values to its properties.

## Exercise 4: Enums

- Create an enum named `Color` that represents primary colors (e.g., red, green, blue).
- Write a function that accepts a `Color` as an argument and returns a string message mentioning the color.

## Exercise 5: Generics

- Define a generic function that accepts an array of any type and returns the first item in the array. Test it with different types of arrays.
- Define a generic function that accepts an array of any type and a value of the same type. The function should return true if the value exists in the array, and false otherwise. Test it with different types of arrays.
- Advanced: Define a generic function that accepts an array of any type and a function that takes a value of the same type and returns a boolean (i.e. predicate function). The function should return the number of items in the array for which the predicate is true. Test it with different types of arrays and predicates.

## Exercise 6: Union and Intersection Types

- Create a type called `UserProfile` that represents a user's profile. It should have two properties: `name` (string) and `email` (string), where either field can be optional using a union type.
- Create an intersection type named `ExtendedUserProfile` by combining the `UserProfile` type with additional information like an `id` (number).

## Exercise 7: Decorators (Advanced)

- Implement a custom decorator called `logExecutionTime` that logs the time taken for a function to execute.
- Create a class or a function that uses this decorator, and demonstrate its functionality by measuring the execution time of a sample method.

## Exercise 8: Using TypeScript in Multiple Files

Set up a TypeScript project with the following file structure:
```
├── src/
│   ├── main.ts
│   ├── calculator.ts
│   ├── models/
│       ├── user.ts
```
- In `calculator.ts`, define a simple function (e.g., addition). Export this function.
- In `user.ts`, create a class or interface representing a `User` with properties like `id`, `name`, and `age`. Export this class.
- In `main.ts`, import the function from `calculator.ts` and the `User` class from `user.ts`. 
- Use them in your `main.ts` to create two User objects and then add their age together using the function from `calculator.ts`. Log the result to the console.
