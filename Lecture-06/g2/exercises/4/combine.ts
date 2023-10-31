export {};

function combine(mapper: (n:number) => string, operation: (first: string, second: string) => string){
    // TODO: implement this function
};

function toWords(n: number){
    const values = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = "";

    while (n > 0){
        const digit = n % 10;
        const word = values[digit];
        result = word + " " + result;
        n = Math.floor(n / 10);
    }
    return result
}

function concat(first: string, second: string){
    return first + " " + second;
}

const combineWords = combine(toWords, concat);
console.log(combineWords(123, 456));

const square = (n: number) => n * n;
const add = (a: number, b: number) => a + b;
const pythagoras = combine(square, add);
console.log(pythagoras(3, 4));