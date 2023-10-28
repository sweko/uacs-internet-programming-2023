export {}

const add = (a: number, b: number) => a + b;

const increaseByThree = (a: number) => add(a, 3);
const increaseByFive = (a: number) => add(a, 5);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// const increasedByThree = numbers.map(increaseByThree);
const uascMap = (array: number[], modifier: (a: number) => number) => {
    const result: number[] = [];
    for (const item of array) {
        result.push(modifier(item));
    }
    return result;
}

const increasedByThree = uascMap(numbers, increaseByThree);
console.log(increasedByThree);

const increasedByFour = uascMap(numbers, n => n + 4);
console.log(increasedByFour);


// const increaseBySomeValue = function(someValue: number) {
//     return function(n: number) {
//         return add(n, someValue);
//     }
// }

const increaseBySomeValue = (someValue: number) => (n: number) => add(n, someValue);

const increaseBySeven = increaseBySomeValue(7);
const increasedBySeven = uascMap(numbers, increaseBySeven);
console.log(increasedBySeven);

// off the deep end
const increaseArrayBySomeValue = (someValue: number) => (array: number[]) => uascMap(array, increaseBySomeValue(someValue));
const operateOnArray = (array: number[], operation: (array: number[]) => number[]) => operation(array);