interface Person {
    firstName: string;
    lastName: string;
}

interface PersonWithAge extends Person {
    age: number;
}

function printPerson(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski"
};
printPerson(weko);

const jane: PersonWithAge = {
    firstName: "Jane",
    lastName: "Doe",
    age: 17
};
printPerson(jane);


interface Operation {
    (a: number, b: number): number;
}

const add: Operation = (a, b) => a + b;
const subtract = (a: number, b: number) => a - b;

function executeOperation(operation: Operation, a: number, b: number) {
    return operation(a, b);
};

console.log(executeOperation(add, 3, 4));
console.log(executeOperation(subtract, 4, 3));


export {};