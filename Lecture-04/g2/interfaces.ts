export interface Person {
    firstName: string;
    lastName: string;
}

const weko: Person = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
};

function greet({firstName, lastName} :Person) {
    console.log(`${firstName} ${lastName}`);
}

greet(weko);

const jdoe = {
    firstName: "Jane",
    lastName: "Doe",
    age: 32
}

greet(jdoe);

interface NumberOperation {
    (first:number, second: number):number;
}

const add: NumberOperation = (a, b) => a + b;
const subtract = (a: number, b: number) => a - b;

function executeOperation(operation: NumberOperation, first: number, second: number) {
    return operation(first, second);
}

console.log(executeOperation(add, 6, 4));
console.log(executeOperation(subtract, 6, 4));
