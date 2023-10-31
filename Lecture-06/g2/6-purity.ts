// function add(a: number, b: number) {
//     return a + b;
// }


// const result = add(1, 2);

// console.log(`${result} is the result`);
// console.log(`The result is ${result}`);

function add(a: number, b: number) {
    console.log(a + b);
    return a + b;
}

let first = 7;

function addToFirst(a: number) {
    first += a;
    return first;
}

console.log(addToFirst(3));
addToFirst(3);
addToFirst(3);
addToFirst(3);
console.log(first);

console.log("-------------------------");

let counter = 0;

// const fibonacci = (n: number): number => {
//     counter++;
//     if (n <= 1) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = (() => {
    const fibCache: { [key: number]: number } = {};

    const fibonacci = (n: number): number => {
        counter++;
        if (n <= 1) {
            return 1;
        }
        if (fibCache[n]) {
            return fibCache[n];
        }
        const result = fibonacci(n - 1) + fibonacci(n - 2);
        fibCache[n] = result;
        return result;
    }

    return fibonacci;
})();

// const fibonacciSlow = (n: number): number => {
//     counter++;
//     if (n <= 1) {
//         return 1;
//     }
//     return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
// }

// const memoize = (fn: (n: number) => number) => {
//     const cache: { [key: number]: number } = {};

//     const memoized = (n: number): number => {
//         counter++;
//         if (cache[n]) {
//             return cache[n];
//         }
//         const result = fn(n);
//         cache[n] = result;
//         return result;
//     }

//     return memoized;
// }

// const fibonacci = memoize(fibonacciSlow);

console.log(fibonacci(10));
console.log(counter);
console.log(fibonacci(20));
console.log(counter);
console.log(fibonacci(30));
console.log(counter);
console.log(fibonacci(40));
console.log(counter);
console.log(fibonacci(45));
console.log(counter);
