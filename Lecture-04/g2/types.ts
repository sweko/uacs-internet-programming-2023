type Name = string;

export interface Person {
    firstName: Name;
    lastName: Name;
}

type PersonType = {
    firstName: Name;
    lastName: Name;
}

const weko : PersonType = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
};

interface PersonWithAge extends Person {
    age: number;
}

const jdoe : PersonWithAge = {
    firstName: "Jane",
    lastName: "Doe",
    age: 32
}

type numberOrString = number | string;

var x:numberOrString = 3;
var y:numberOrString = "house";

x = "house";
y = 3;

// function addNumberOrString(a: numberOrString, b: numberOrString) {
//     return a + b;
// }

