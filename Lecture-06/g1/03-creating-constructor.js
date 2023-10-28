//export {};

// Take One
// function Person (name, age, occupation) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//     this.toString = function() {
//         return `${this.name} (${this.age}) is a ${this.occupation}`;
//     }
// }

// const weko = new Person('Wekoslav', 46, 'lecturer');

// console.log(weko);

// console.log(weko.hasOwnProperty('name'));
// console.log(weko.hasOwnProperty('toString'));

// const nenad = new Person('Nenad', 22, 'student');

// console.log(nenad.toString());

// console.log(nenad.toString === weko.toString);

// Take Two
function Person (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

Person.prototype.toString = function() {
    return `${this.name} (${this.age}) is a ${this.occupation}`;
}

const weko = new Person('Wekoslav', 46, 'lecturer');

console.log(weko.toString());

console.log(weko.hasOwnProperty('name'));
console.log(weko.hasOwnProperty('toString'));

const nenad = new Person('Nenad', 22, 'student');

console.log(nenad.toString());

console.log(nenad.toString === weko.toString);