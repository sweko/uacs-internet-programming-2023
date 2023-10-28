# Class 11: Introduction to OOP in TypeScript

## Objective

This class introduces Object-Oriented Programming (OOP) principles and their application in TypeScript, along with an exploration of prototypal inheritance in JavaScript. Students will learn about classes, inheritance, encapsulation, and basic design patterns in the context of TypeScript and understand how these concepts relate to JavaScript's prototypal inheritance.

## Topics

1. **Principles of Object-Oriented Programming**
   - Understanding the core principles of OOP: abstraction, encapsulation, inheritance, and polymorphism.
   - Recognizing the benefits of OOP in software development, including modularity and reusability.

2. **Prototypal Inheritance in JavaScript**
   - Delving into JavaScript's unique inheritance model based on prototypes.
   - Exploring prototype chains, object delegation, and how objects inherit properties and methods from prototypes.

3. **Classes, Inheritance, and Encapsulation in TypeScript**
   - Introduction to TypeScript classes and their role in OOP.
   - Inheritance in TypeScript: creating sub-classes and super-classes.
   - Encapsulation: using access modifiers (public, private, protected) to control class members' visibility and access.

4. **Design Patterns**
   - Introduction to design patterns as reusable solutions to common programming problems.


## Principles of Object-Oriented Programming

Object-Oriented Programming (OOP) is a fundamental programming paradigm that provides a structured and organized approach to software development. This section focuses on understanding the core principles of OOP and recognizing the numerous benefits it offers in software development.

### Abstraction

**Abstraction** is the process of simplifying complex reality by modeling classes based on the essential attributes and behaviors. It allows developers to focus on what an object does, rather than how it does it. Abstraction enables the creation of clear, high-level interfaces that hide the underlying complexity.

- **Example:** In a banking application, an abstract "Account" class defines methods like "deposit" and "withdraw," without revealing the intricacies of the account type.

### Encapsulation

**Encapsulation** refers to the bundling of data (attributes) and methods (functions) that operate on that data into a single unit, known as a class. It ensures data security and restricts access to data, providing control over its modification.

- **Example:** A "Person" class encapsulates attributes like name and age, along with methods like "getAge" and "setName," controlling how data is accessed and modified.

### Inheritance

**Inheritance** is a mechanism that allows one class (the sub-class or derived class) to inherit properties and methods from another class (the super-class or base class). It promotes code reuse and establishes a hierarchical relationship between classes.

- **Example:** A "Vehicle" class may have sub-classes like "Car" and "Bicycle" that inherit common attributes and methods while adding their specific features.

### Polymorphism

**Polymorphism** enables objects of different classes to be treated as objects of a common base class. It allows different classes to provide their own implementations for methods with the same name. Polymorphism fosters flexibility and extensibility in code.

- **Example:** Multiple classes, like "Circle" and "Rectangle," can have a common method "calculateArea," each with its unique implementation to calculate its shape's area.

## Benefits of OOP in Software Development

Object-Oriented Programming offers several advantages in software development, enhancing code quality and maintainability:

- **Modularity:** OOP promotes modular code, allowing developers to break a large application into smaller, manageable components (classes). Each class can be developed, tested, and maintained independently, simplifying the development process.

- **Reusability:** The reusability of classes and objects is a fundamental benefit of OOP. Once a class is defined, it can be used in various parts of an application or in different projects, saving development time and effort.

- **Ease of Maintenance:** OOP's organized structure makes code maintenance more manageable. Changes or bug fixes can often be isolated to specific classes without affecting the entire application, minimizing potential side effects.

- **Scalability:** OOP supports the development of scalable applications. New classes can be added, existing classes can be extended, and the system can grow while maintaining a clear, structured design.

- **Collaboration:** OOP promotes collaboration among development teams. Developers can work on different classes simultaneously, leveraging each other's work while adhering to defined interfaces.

In summary, understanding the core principles of OOP (abstraction, encapsulation, inheritance, and polymorphism) and recognizing the benefits it brings to software development is essential for building structured, maintainable, and scalable applications. OOP promotes modularity, reusability, ease of maintenance, scalability, and collaboration, all of which contribute to the creation of high-quality software.

## Prototypal Inheritance in JavaScript

JavaScript employs a unique and flexible prototypal inheritance model, which differs from traditional class-based inheritance found in some other programming languages. This section delves into the concept of prototypal inheritance, exploring prototype chains, object delegation, and the mechanisms by which objects inherit properties and methods from prototypes.

### Prototype Chains

In JavaScript, every object has a prototype, except for the root object, called `Object.prototype`. When you access a property or method on an object, JavaScript checks the object itself for the property. If it doesn't find it, it looks in the object's prototype, and so on. This chain of prototypes is known as the **prototype chain**.

There are several ways to create objects in JavaScript, each with its own prototype:

#### 1. Create an object using object literal syntax

```javascript
const person = {
    name: 'John',
    age: 30
};
```

In this case, the object's prototype is `Object.prototype`, which is the default prototype for objects created using object literal syntax.

#### 2. Create an object using the Object.create() method

```javascript
const parent = {
    name: 'John',
    age: 30
};

const person = Object.create(parent);
```

In this case, the object's prototype is the `parent` object.

#### 3. Create an object using a constructor function

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('John', 30);
```

In this case, the object's prototype is the `Person.prototype` object.

#### 4. Create an object using the class syntax

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('John', 30);
```

In this case, the object's prototype is the `Person.prototype` object.

### Object Delegation

JavaScript uses **object delegation** to implement inheritance and code reuse. When you access a property or method on an object, JavaScript first checks the object itself for the property. If it doesn't find it, it looks in the object's prototype, and so on. This chain of prototypes is known as the **prototype chain**.

```javascript
const person = {
    name: 'John',
    age: 30
};

console.log(person.name); // Output: John

console.log(person.toString()); // Output: [object Object]
```

In this example, the `person` object has a `name` property, which is accessed directly from the object. The `person` object doesn't have a `toString` method, so JavaScript looks for it in the object's prototype, which is `Object.prototype`. The `Object.prototype` object has a `toString` method, so it's used to return the string representation of the object.

A more complicated example:

```javascript
const parent = {
    name: 'John',
    age: 30
};

const person = Object.create(parent);
person.age = 20;

console.log(person.age); // Output: 20

console.log(person.name); // Output: John

console.log(person.toString()); // Output: [object Object]
```

In this example, the `person` object has an `age` property, which is accessed directly from the object.  
The `person` object doesn't have a `name` property, so JavaScript looks for it in the object's prototype, which is the `parent` object. The `parent` object has a `name` property, so it's used to return the value of the `name` property.  
The `person` object doesn't have a `toString` method, so JavaScript looks for it in the object's prototype, which is the `parent` object. The `parent` object doesn't have a `toString` method, so JavaScript looks for it in the object's prototype, which is `Object.prototype`. The `Object.prototype` object has a `toString` method, so it's used to return the string representation of the object.

### Constructor function specifics

JavaScript offers a flexible way to create objects using constructor functions and prototypes. This approach allows you to define shared methods for multiple instances of an object while avoiding method duplication.

#### Constructor Functions

A constructor function is a JavaScript function used to create and initialize objects. These functions are typically named with an initial uppercase letter to distinguish them from regular functions. To define a constructor function, use the `this` keyword to set properties on the newly created object.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person('John', 30);
const jane = new Person('Jane', 25);
```

In this example, the `Person` constructor function creates instances with `name` and `age` properties.

#### Prototypes for Methods
While constructor functions define object properties, methods can be defined on the object's prototype. This is a memory-efficient way to share methods among all instances of the object. Prototype methods are accessible to all instances created from the constructor function.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Define a method on the prototype
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

console.log(john.greet()); // Output: Hello, my name is John and I'm 30 years old.
console.log(jane.greet()); // Output: Hello, my name is Jane and I'm 25 years old.
```

In this example, the `greet` method is defined on the `Person` prototype. This method is accessible to all instances created from the `Person` constructor function. 

Using constructor functions and prototypes is a foundational concept in JavaScript for creating reusable, memory-efficient objects with shared methods. It's a fundamental technique in object-oriented JavaScript programming.

However, in modern JavaScript, the class syntax is often used instead of constructor functions and prototypes. The class syntax is syntactic sugar over the constructor function and prototype syntax, providing a more familiar syntax for developers coming from other programming languages. As it was, the class syntax was first introduced by TypeScript and later adopted by JavaScript.

## Classes, Inheritance, and Encapsulation in TypeScript

In this section, we explore how TypeScript, a statically typed superset of JavaScript, supports the object-oriented programming (OOP) paradigm through classes, inheritance, and encapsulation.

### What Are Classes in TypeScript?

In TypeScript, a **class** is a blueprint for creating objects with shared properties and methods. Classes serve as the foundation for creating objects and organizing code in an object-oriented manner. They define the structure and behavior of objects, encapsulating data and functionality within a single unit.

### Creating Sub-Classes and Super-Classes

**Inheritance** is a fundamental concept in OOP and TypeScript. It allows for the creation of new classes (sub-classes) that inherit properties and methods from existing classes (super-classes). Sub-classes can add their own properties and methods, extending or specializing the behavior of the super-class.

```typescript
class Vehicle {
    constructor(public make: string) {}
    drive() {
        console.log("Vehicle is moving.");
    }
}

class Car extends Vehicle {
    wheels: number;
    constructor(make: string, wheels: number) {
        super(make);
        this.wheels = wheels;
    }
    drive() {
        console.log(`Car with ${this.wheels} wheels is moving.`);
    }
}
```

In this example, the `Car` class extends the `Vehicle` class, inheriting its `make` property and `drive` method. The `Car` class adds its own `wheels` property and overrides the `drive` method to specialize the behavior of the `Vehicle` class.

### Access Modifiers

Encapsulation is the practice of hiding the internal details of a class and controlling access to its members. TypeScript provides three access modifiers:

- **public:** Members with this modifier are accessible from anywhere.
- **private:** Members with this modifier are only accessible within the class where they are defined.
- **protected:** Members with this modifier are accessible within the defining class and its sub-classes.

```typescript
class Employee {
    private salary: number;
    constructor(salary: number) {
        this.salary = salary;
    }
    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(salary: number) {
        super(salary);
    }
    // Attempting to access salary directly would result in an error
    getSalaryWithBonus(bonus: number): number {
        return this.getSalary() + bonus;
    }
}
```

In this example, the `salary` property in the `Employee` class is marked as private, making it inaccessible from outside the class. Sub-classes like `Manager` can use the `getSalary` method to access the salary.

## Design Patterns

Design patterns are reusable solutions to common problems that occur during software design and development. They provide established templates for structuring code to address specific challenges, promote code maintainability, and improve software architecture. Design patterns are not specific implementations but rather general guidelines that help developers solve recurring issues efficiently and consistently. They serve as a shared vocabulary for software engineers to communicate best practices and well-tested approaches for creating high-quality, scalable, and maintainable software systems.

## Common Criticisms of Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a widely used programming paradigm, but it's not without its criticisms. Here are some of the common criticisms of OOP:

1. **Complexity**: OOP can lead to complex and intricate class hierarchies, making code difficult to understand and maintain. Inheritance hierarchies, in particular, can become convoluted and challenging to manage.

2. **Verbosity**: OOP code can be more verbose compared to other paradigms like functional programming. Writing classes, constructors, getters, and setters can result in a significant amount of boilerplate code.

3. **Overhead**: OOP languages often come with some performance overhead. The creation of objects, dynamic dispatch, and the management of class hierarchies can impact execution speed and memory usage.

4. **Rigid Structure**: Once a class hierarchy is defined, making changes can be challenging. OOP can lead to a rigid structure that resists modifications, which can be problematic in rapidly evolving projects.

5. **Inheritance Issues**: While inheritance is a core concept of OOP, it can lead to problems such as tight coupling between classes, fragile base class issues, and difficulties in understanding the behavior of a class due to multiple levels of inheritance.

6. **Difficulty in Testing**: Testing OOP code can be complex because of its reliance on object instantiation and inter-object dependencies. Mocking and testing isolated components can be challenging.

7. **State and Mutability**: OOP often involves mutable state, which can lead to bugs related to shared state and side effects. Managing and tracking state changes can be a source of errors.

8. **Lack of Reusability**: Reusability is one of the promises of OOP, but in practice, it can be challenging to achieve. Inheritance hierarchies might not always lead to code reusability as expected.

9. **Scalability Issues**: OOP can face scalability issues when applied to large codebases. As the codebase grows, it becomes more challenging to manage and navigate through classes and objects.

10. **Conceptual Overhead**: Learning and understanding OOP concepts, such as classes, objects, and polymorphism, can be daunting for beginners and may require a steep learning curve.

It's important to note that while OOP has its criticisms, it remains a widely used and effective paradigm for many software development scenarios. The choice of a programming paradigm should consider the specific requirements and constraints of the project, as well as the preferences and expertise of the development team.

