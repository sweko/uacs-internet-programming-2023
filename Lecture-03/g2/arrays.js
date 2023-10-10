const abomination = [
    1,
    2, 
    3,
    "four",
    {
        value: "five"
    },
    function() {
        console.log("six");
    },
    true,
    null,
    [7, 8, 9]
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[200]);
// console.log(numbers.length);
// console.log(numbers[numbers.length - 1]);

for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    console.log(number);
}

console.log("----");

for (const number of numbers) {
    console.log(number);
}

console.log("----");

numbers.unshift(10);

// numbers.sort((first, second) => {
//     if (first > second) {
//         return 1;
//     }
//     if (first < second) {
//         return -1;
//     }
//     return 0;
// });

numbers.sort((first, second) => second - first);

console.log(numbers);

console.log("----");

const students = [
    {
        firstName: "Kristina",
        lastName: "Ristovska",
    },
    {
        firstName: "Mihela",
        lastName: "Taseska",
    },
    {
        firstName: "Filip",
        lastName: "Zikovski",
    },
    {
        firstName: "Filip",
        lastName: "Petrovski",
    }
]

students.sort((first, second) => {
    const fcompare = first.firstName.localeCompare(second.firstName);
    if (fcompare !== 0) {
        return fcompare;
    }
    return first.lastName.localeCompare(second.lastName);
});

console.log(students);

console.log("----");

numbers.map(n => n * 2)
students.map(s => s.firstName)
numbers.filter(n => n % 2 !== 0)

numbers.filter(n => n % 2 !== 0).map(n => n *2)

students.find(s => s.firstName === "Mihela")
students.findIndex(s => s.firstName === "Mihela")

students.find(s => s.firstName === "Filip")
students.findLast(s => s.firstName === "Filip")

numbers.reduce((accumulator, current) => accumulator + current, 0)

const fruits = ["apple", "banana", "orange", "apple", "banana", "apple", "kiwi"];

// const fruitMap = {
//     apple: 3,
//     banana: 2,
//     orange: 1,
//     kiwi: 1,
// }

const fruitMap = fruits.reduce((accumulator, current) => {
    if (accumulator[current] === undefined) {
        accumulator[current] = 0;
    }
    accumulator[current]++;
    return accumulator;
}, {});

// function sum(numbers) {
//     let accumulator = 0;
//     for (const number of numbers) {
//         accumulator = accumulator + number;
//     }
// }