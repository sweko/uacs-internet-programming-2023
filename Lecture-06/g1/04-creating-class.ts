export {};

class Person
{
    public name: string;
    private age: number;
    protected occupation: string;

    constructor(name: string, age: number, occupation: string)
    {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    toString() {
        return `${this.name} (${this.age}) is a ${this.occupation}`;
    }
}

class Student extends Person
{
    public id: number;

    constructor(name: string, age: number, id: number)
    {
        super(name, age, 'student');
        this.id = id;
    }

    toString() {
        return `${super.toString()} with id ${this.id}`;
    }
}

const weko = new Person('Wekoslav', 46, 'lecturer');

console.log(weko.toString());
console.log(weko.hasOwnProperty('name'));
console.log(weko.hasOwnProperty('toString'));

const nenad = new Student('Nenad', 22, 1234);

console.log(nenad.toString());
console.log(nenad.toString === weko.toString);