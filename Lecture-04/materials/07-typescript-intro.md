# Class 7: TypeScript Fundamentals

## Objective
In this class, we will introduce TypeScript, a powerful superset of JavaScript. You will learn the basics of TypeScript, including its syntax, type annotations, and how to compile TypeScript code to JavaScript. We will also discuss the benefits of using TypeScript in web development.

## Agenda

1. **Introduction to TypeScript**
    - What is TypeScript?
    - Why use TypeScript in web development?
    
2. **TypeScript Syntax and Type Annotations**
    - Variables and data types
    - Type annotations
    - Functions and return types
    - Interfaces and classes
    
3. **Compiling TypeScript to JavaScript** 
    - Understanding the TypeScript compiler (tsc)
    - Compiling TypeScript code
    - Configuration files (tsconfig.json)
    
4. **Benefits of TypeScript in Web Development**
    - Improved code quality
    - Enhanced tooling and IDE support
    - Static type checking
    - Code maintainability and scalability

## Resources
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)


## What is TypeScript?

TypeScript is a superset of JavaScript that adds optional static typing to the language. It is a strongly typed language that compiles to plain JavaScript. TypeScript is developed and maintained by Microsoft and is open-source and cross-platform.

As TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds new features to JavaScript, including static typing, interfaces, classes, and more. TypeScript code is compiled to plain JavaScript code, which can then be executed in any JavaScript runtime environment.

## Why use TypeScript in web development?

JavaScript is a dynamically typed language, which means that variables are not bound to a specific data type. This can lead to errors and bugs in large codebases. TypeScript adds static typing to JavaScript, which allows developers to specify the data type of variables and function parameters. This helps catch errors at compile-time and improves code quality.

TypeScript also adds support for interfaces and classes, which are not supported in JavaScript. Interfaces allow developers to define the structure of objects, while classes allow developers to define custom types and create objects based on those types. This helps developers write more maintainable and scalable code.

TypeScript also offers enhanced tooling and IDE support, which can help developers write code more efficiently. TypeScript code is compiled to JavaScript, which can then be executed in any JavaScript runtime environment. This means that TypeScript can be used in both client-side and server-side web development.

## Variables and data types

TypeScript supports the same primitive data types as JavaScript, including `number`, `string`, `boolean`, `null`, and `undefined`. TypeScript also supports the `any` type, which can be used to represent any data type. TypeScript also supports arrays and tuples, which are not supported in JavaScript.

```typescript
// Declaring variables
let num: number = 10;
let str: string = "Hello";
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
let anyType: any = "Hello";

// Arrays
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// Tuples
let tuple: [string, number] = ["Hello", 10];
```

## Type annotations

TypeScript supports type annotations, which allow developers to specify the data type of variables and function parameters. Type annotations are optional, but they can help catch errors at compile-time and improve code quality.

```typescript
// Function parameters and return types
function addTwo(a: number, b: number): number {
    return a + b;
}

// Optional parameters
function addTwoOrThree(a: number, b: number, c?: number): number {
    if (c) {
        return a + b + c;
    } else {
        return a + b;
    }
}

// Default parameters
function addTwoOrThree(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

// Calling functions
addTwo(1, 2); // works
addTwo("Hello", "World"); // error
addTwo(1, 2, 3); // error
addTwo(1); // error


addTwoOrThree(1, 2); // works
addTwoOrThree(1, 2, 3); // works
addTwoOrThree(1, 2, "Hello"); // error
```

## Interfaces and classes

TypeScript supports interfaces, which are not supported in JavaScript and classes, which didn't use to be supported in JavaScript. Interfaces allow developers to define the structure of objects, while classes allow developers to define custom types and create objects based on those types. This helps developers write more maintainable and scalable code.

```typescript
// Interfaces
interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: "John",
    age: 20
};

function greet(person: Person) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

greet(person);
```
    
```typescript
// Classes
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person: Person = new Person("John", 20);

person.greet();
```

## Compiling TypeScript code

TypeScript code is compiled to JavaScript code, which can then be executed in any JavaScript runtime environment. The TypeScript compiler (tsc) can be used to compile TypeScript code to JavaScript. The TypeScript compiler can be installed using npm:

```bash
npm install -g typescript
```

The TypeScript compiler can be used to compile TypeScript code to JavaScript:

```bash
tsc index.ts
```

The TypeScript compiler can also watch for changes in TypeScript files and automatically compile them to JavaScript:

```bash
tsc index.ts --watch
```

## Configuration files (tsconfig.json)

The TypeScript compiler can be configured using a `tsconfig.json` file. The `tsconfig.json` file can be used to specify the root files and compiler options for a TypeScript project. The `tsconfig.json` file can be created using the `tsc --init` command:

```bash
tsc --init
```

The `tsconfig.json` file can be used to specify the root files and compiler options for a TypeScript project:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    },
    "include": [
        "./src/**/*"
    ]
}
```

## Benefits of TypeScript in Web Development

### Improved code quality

TypeScript adds static typing to JavaScript, which allows developers to specify the data type of variables and function parameters. This helps catch errors at compile-time and improves code quality.

### Enhanced tooling and IDE support

TypeScript offers enhanced tooling and IDE support, which can help developers write code more efficiently. TypeScript code is compiled to JavaScript, which can then be executed in any JavaScript runtime environment. This means that TypeScript can be used in both client-side and server-side web development.

### Static type checking

TypeScript adds static typing to JavaScript, which allows developers to specify the data type of variables and function parameters. This helps catch errors at compile-time and improves code quality.

### Code maintainability and scalability

TypeScript supports interfaces and classes, which are not supported in JavaScript. Interfaces allow developers to define the structure of objects, while classes allow developers to define custom types and create objects based on those types. This helps developers write more maintainable and scalable code.

