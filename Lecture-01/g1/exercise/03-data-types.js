let a = 3;

const b = "String";

const v = undefined;

a = 4;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr = ["a", "b", "c" ] // not good
arr[7] = 0;
arr[9] = "No Country for old men"

const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski"
};

const nikola = {
    firstName: "Nikola",
    lastName: "Toshich"
};

function fullName(person) {
    return `Hello, your name is ${person.firstName} ${person.lastName}, how are you, ${person.firstName.slice(0, 4)}?`;
}

function fullName(person) {
    const nickname = getNickname(person);
    return `Hello, your name is ${person.firstName} ${person.lastName}, how are you, ${nickname}?`;
}

function getNickname(person) {
    return person.firstName.slice(0, 4);
}


fullName(weko)
//'Wekoslav Stefanovski'
fullName(nikola)
//'Nikola Toshich'
fullName(7)
//'undefined undefined'
fullName([])
//'undefined undefined'
fullName({})
//'undefined undefined'

weko.age = 46;

weko
// {firstName: 'Wekoslav', lastName: 'Stefanovski', age: 46}
weko.age
// 46
nikola.age
// undefined
weko.fristName
//undefined