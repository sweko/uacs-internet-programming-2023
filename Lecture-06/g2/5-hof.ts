export {}

const add = (a: number, b: number) => a + b;

const increaseByThree = (a: number) => add(a, 3);
console.log(increaseByThree(5));

const increaseByFive = (a: number) => add(a, 5);
console.log(increaseByFive(5));

// const increaseByNumber = (number: number) => {
//     const increaser = (value: number) => {
//         return add(value, number);
//     };
//     return increaser;
// }

const increaseByNumber = (number: number) => (value: number) => add(value, number);


const increaseByFour = increaseByNumber(4);
console.log(increaseByFour(10));

console.log("============================");

const numbers = [1, 2, 3, 4, 5, 6];

//const inc3Numbers = numbers.map(n => increaseByThree(n));
const inc3Numbers = numbers.map(increaseByThree);

console.log(inc3Numbers);

const uascSelect = (array: number[], selector: (a: number) => number) => {
    const result: number[] = [];
    for (const item of array) {
        const value = selector(item);
        result.push(value);
    }
    return result;
}

const inc3NumbersTwo = uascSelect(numbers, increaseByThree);
console.log(inc3NumbersTwo);

