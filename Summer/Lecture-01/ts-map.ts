const numbers = [1, 2, 3, 4, 5];

const doubles: number[] = getMultiples(numbers, 2);
console.log(doubles);
console.log(getMultiples(numbers, 3));

function getMultiples(numbers: number[], multiplier: number) {
    const multiples: number[] = [];

    for (const number of numbers) {
        const result = number * multiplier;
        multiples.push(result);
    }

    return multiples;
}

function getAddeds(numbers: number[], additor: number) {
    const multiples: number[] = [];

    for (const number of numbers) {
        const result = number + additor;
        multiples.push(result);
    }

    return multiples;
}

function processNumbers(numbers: number[], processor: (number: number) => number) {
    const processed: number[] = [];

    for (const number of numbers) {
        const result = processor(number);
        processed.push(result);
    }

    return processed;
}

console.log(processNumbers(numbers, n => n * 2));
console.log(processNumbers(numbers, n => n + 3));
console.log(processNumbers(numbers, n => n * n));
console.log(processNumbers(numbers, n => Math.sin(n)));

console.log(numbers.map(n => n * 2));
console.log(numbers.map(n => n + 3));
console.log(numbers.map(n => n * n));
console.log(numbers.map(n => Math.sin(n)));

