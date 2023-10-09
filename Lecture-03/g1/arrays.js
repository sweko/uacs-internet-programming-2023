const myArray = [
    1,
    2,
    "apple",
    {
        name: "John",
        age: 30
    },
    [1, 2, 3]
]

const fruits = ["apple", "banana", "orange", "mango", "banana", "apple", "kiwi"];

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    console.log(fruit)
}

console.log("----")

for (const fruit of fruits) {
    console.log(fruit)
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 10];

numbers.sort((a, b) => a - b);

console.log(numbers)

fruits.sort((f, s) => f.localeCompare(s));

console.log(fruits)

const sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumNumbers)

const productNumbers = numbers.reduce((acc, curr) => acc * curr, 1);

console.log(productNumbers)

const fruitsObject = fruits.reduce((acc, curr) => {
    if (acc[curr] !== undefined) {
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    }

    return acc;
}, {});

console.log(fruitsObject);

