// interface PersonGen1 {
//     id: number;
//     firstName: string;
//     lastName: string;
// }

// interface PersonGen2 {
//     id: string;
//     firstName: string;
//     lastName: string;
// }

// function printPerson1(person: PersonGen1) {
//     console.log(`${person.id}: ${person.firstName} ${person.lastName}`);
// }

// function printPerson2(person: PersonGen2) {
//     console.log(`${person.id}: ${person.firstName} ${person.lastName}`);
// }

interface PersonGen<T> {
    id: T;
    firstName: string;
    lastName: string;
}

function printPerson<T>(person: PersonGen<T>) {
    console.log(`${person.id}: ${person.firstName} ${person.lastName}`);
}

const weko: PersonGen<number> = {
    id: 1,
    firstName: "Wekoslav",
    lastName: "Stefanovski"
};

const jane: PersonGen<string> = {
    id: "two",
    firstName: "Jane",
    lastName: "Doe"
};

printPerson(weko);
printPerson(jane);

type WeirdId = [number, string];

const weirdId: PersonGen<WeirdId> = {
    id: [20, "F"],
    firstName: "Weird",
    lastName: "Id"
};

printPerson(weirdId);

export {};