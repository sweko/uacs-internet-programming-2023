type Gender = "male" | "female" | "other";

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    skills: string[];
}

const weko: Person = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 47,
    skills: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Angular',
        'React',
        'Vue'
    ],
    gender: "male"
}

function getPersonInfo(person: Person) {
    const skills = person.skills.join(', ');
    return `Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, Skills: ${skills}`;
}

const info = getPersonInfo(weko);
console.log(info);

const nevena: Person = {
    firstName: 'Nevena',
    lastName: 'Stefanovska',
    age: 42,
    skills: [
        'JavaScript',
        'Node.js',
        'Angular',
        'React',
        'Vue'
    ],
    gender: "female"
}

const persons = [weko, nevena];

function getPersonsInfo(persons: Person[]) {
    return persons.map(getPersonInfo);
}

function procesPerson<T>(persons: Person[], processor: (person: Person) => T) {
    return persons.map(processor);
}
