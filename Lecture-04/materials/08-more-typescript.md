# Class 8: Advanced TypeScript Features

## Objective
In this class, we will dive into advanced TypeScript features. We'll explore Interfaces and Type Aliases, Enums and Generics, Union and Intersection types, Decorators and Advanced Types, and learn how to efficiently use TypeScript in projects spread across multiple files.

## Agenda

1. **Interfaces and Type Aliases**
    - Understanding the purpose and differences between interfaces and type aliases.
    - Practical examples of when to use each.
    - Combining interfaces and type aliases for complex types.

2. **Enums and Generics**
    - In-depth exploration of TypeScript enums.
    - Leveraging generics with enums for reusability and type safety.
    - Practical use cases and best practices.

3. **Union and Intersection Types**
    - Exploring union types to represent values with multiple possible types.
    - Intersection types to combine multiple types into one.
    - Real-world applications of union and intersection types.

4. **Decorators and Advanced Types**
    - Understanding decorators and their role in TypeScript.
    - Creating custom decorators with advanced functionality.
    - Advanced types such as mapped types and conditional types.

5. **Using TypeScript in Multiple Files**
    - Structuring TypeScript code for larger projects.
    - Modules, namespaces, and best practices.
    - Demonstrating how to split code across multiple files.

## Resources
- [TypeScript Handbook: Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Understanding TypeScript's type system](https://www.youtube.com/watch?v=3HWuzEP74Vw)
- [TypeScript Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [TypeScript Handbook: Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)

## Interfaces and Type Aliases

### Interfaces

Interfaces are a core part of TypeScript and are used to define the structure of objects. Interfaces can be used to define the shape of an object, including the property names and types. Interfaces can also be used to define function types, which specify the parameters and return type of a function.

```typescript
// Defining an interface
interface Person {
    name: string;
    age: number;
    greet: (name: string) => void;
}

// Creating an object based on an interface

const person: Person = {
    name: "John",
    age: 30,
    greet(name: string) {
        console.log(`Hello, ${name}! My name is ${this.name}.`);
    }
};

person.greet("Jane"); // Hello, Jane! My name is John.

// Using an interface to define a function type

interface OperatorFunction {
    (a: number, b: number): number;
}

const add: OperatorFunction = (a: number, b: number) => {
    return a + b;
};

add(1, 2); // 3
```

### Type Aliases

Type aliases are another way to define custom types in TypeScript. Type aliases are similar to interfaces, but they are more flexible and can be used to define more complex types. Type aliases can be used to define object types, function types, union types, and more.

```typescript
// Defining a type alias
type Person = {
    name: string;
    age: number;
    greet: (name: string) => void;
};

// Creating an object based on a type alias

const person: Person = {
    name: "John",
    age: 30,
    greet(name: string) {
        console.log(`Hello, ${name}! My name is ${this.name}.`);
    }
};

person.greet("Jane"); // Hello, Jane! My name is John.

// Using a type alias to define a function type

type OperatorFunction = (a: number, b: number) => number;

const add: OperatorFunction = (a: number, b: number) => {
    return a + b;
};

add(1, 2); // 3
```

### Interfaces vs. Type Aliases

Interfaces and type aliases are very similar, but there are some key differences between them. Interfaces are more limited in what they can define, but they are more flexible and can be used to define more complex types. Type aliases are more powerful and can be used to define more complex types, but they are less flexible and can only be used to define certain types.

```typescript
// Interfaces can only be used to define object types
interface Person {
    name: string;
    age: number;
}

// Type aliases can be used to define object types, function types, union types, and more
type Person = {
    name: string;
    age: number;
};

type OperatorFunction = (a: number, b: number) => number;

type NumberOrString = number | string;
```

### Combining Interfaces and Type Aliases

Interfaces and type aliases can be combined to create more complex types. This is useful when you want to define a type that has both object properties and function types. For example, you can define a type that has an object property and a function type, or a type that has multiple object properties and function types.

```typescript
// Combining interfaces and type aliases
interface Person {
    name: string;
    age: number;
}

type OperatorFunction = (a: number, b: number) => number;

type PersonWithGreet = Person & {
    greet: (name: string) => void;
};

type PersonWithAdd = Person & {
    add: OperatorFunction;
};

type PersonWithGreetAndAdd = Person & {
    greet: (name: string) => void;
    add: OperatorFunction;
};
```

## Enums and Generics

### Enums

Enums are a core part of TypeScript and are used to define a set of named constants. Enums are useful for defining a set of related constants that can be used in place of magic numbers or strings. Enums can also be used to define a set of related constants that can be used in place of magic numbers or strings.

```typescript
// Defining an enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// Using an enum

const direction: Direction = Direction.Up;

if (direction === Direction.Up) {
    console.log("Going up!");
} else if (direction === Direction.Down) {
    console.log("Going down!");
} else if (direction === Direction.Left) {
    console.log("Going left!");
} else if (direction === Direction.Right) {
    console.log("Going right!");
}
```

### Generics

Generics are a core part of TypeScript and are used to define a type that can be used with multiple types. Generics are useful for defining a type that can be used with multiple types, such as a function that can be used with multiple types of arrays. Generics can also be used to define a type that can be used with multiple types of arrays, such as a function that can be used with multiple types of arrays.

```typescript

// Defining a generic type
type ArrayType<T> = T[];

// Using a generic type

const numbers: ArrayType<number> = [1, 2, 3];

const strings: ArrayType<string> = ["Hello", "World"];

const booleans: ArrayType<boolean> = [true, false];
```

## Union and Intersection Types

### Union Types

Union types are a core part of TypeScript and are used to define a type that can be one of multiple types. Union types are useful for defining a type that can be one of multiple types, such as a function that can be used with multiple types of arrays. Union types can also be used to define a type that can be one of multiple types of arrays, such as a function that can be used with multiple types of arrays.

```typescript
// Defining a union type
type NumberOrString = number | string;

// Using a union type

const num: NumberOrString = 10;

const str: NumberOrString = "Hello";
```

### Intersection Types

Intersection types are a core part of TypeScript and are used to define a type that is a combination of multiple types. Intersection types are useful for defining a type that is a combination of multiple types, such as a function that can be used with multiple types of arrays. Intersection types can also be used to define a type that is a combination of multiple types of arrays, such as a function that can be used with multiple types of arrays.

```typescript
// Defining an intersection type
type Person = {
    name: string;
    age: number;
};

type Employee = {
    id: number;
    salary: number;
};

type PersonAndEmployee = Person & Employee;

// Using an intersection type

const person: PersonAndEmployee = {
    name: "John",
    age: 30,
    id: 1,
    salary: 100000
};
```

## Decorators and Advanced Types

### Decorators

Decorators are a core part of TypeScript and are used to add metadata to classes, methods, and properties. Decorators are useful for adding metadata to classes, methods, and properties, such as the name of a class, the name of a method, or the type of a property. Decorators can also be used to add metadata to classes, methods, and properties, such as the name of a class, the name of a method, or the type of a property.

```typescript

// Defining a decorator
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with args: ${args.join(", ")}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };
}

// Using a decorator

class Calculator {
    @log
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator();

calculator.add(1, 2); // Calling add with args: 1, 2
                      // Result: 3
```

### Advanced Types

Advanced types are a core part of TypeScript and are used to define a type that is a combination of multiple types. Advanced types are useful for defining a type that is a combination of multiple types, such as a function that can be used with multiple types of arrays. Advanced types can also be used to define a type that is a combination of multiple types of arrays, such as a function that can be used with multiple types of arrays.

```typescript
// Defining a mapped type

type Person = {
    name: string;
    age: number;
};

type PersonWithOptionalProperties = {
    [K in keyof Person]?: Person[K];
};

// Using a mapped type

const person: PersonWithOptionalProperties = {
    name: "John",
    age: 30
};

// Defining a conditional type

type Person = {
    name: string;
    age: number;
};

type PersonWithOptionalProperties<T> = {
    [K in keyof T]?: T[K];
};

type PersonWithOptionalProperties<T> = T extends object ? {
    [K in keyof T]?: T[K];
} : never;

// Using a conditional type

const person: PersonWithOptionalProperties<Person> = {
    name: "John",
    age: 30
};
```

## Using TypeScript in Multiple Files

### Modules

Modules are a core part of TypeScript and are used to organize code into reusable units. Modules are useful for organizing code into reusable units, such as a class that can be used in multiple files. Modules can also be used to organize code into reusable units, such as a class that can be used in multiple files.

```typescript

// Defining a module
export class Person {
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

// Using a module

import { Person } from "./person";

const person: Person = new Person("John", 20);

person.greet(); // Hello, my name is John and I am 20 years old.
```

### Namespaces

Namespaces are a core part of TypeScript and are used to organize code into reusable units. Namespaces are useful for organizing code into reusable units, such as a class that can be used in multiple files. Namespaces can also be used to organize code into reusable units, such as a class that can be used in multiple files.

```typescript

// Defining a namespace
namespace Math {
    export function add(a: number, b: number) {
        return a + b;
    }
}

// Using a namespace

import { Math } from "./math";

Math.add(1, 2); // 3
```

### Best Practices

- Use modules to organize code into reusable units.
- Use namespaces to organize code into reusable units.



