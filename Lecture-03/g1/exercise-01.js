console.log("Hello World!");

// function factorial(n) {
//     return Array
//         .from({ length: n }, (_, i) => i + 1)
//         .reduce((acc, curr) => acc * curr, 1);
// }

console.log(`The factorial of 5 is ${factorial(5)}`);
console.log(`The factorial of 6 is ${factorial(6)}`);
console.log(`The factorial of 10 is ${factorial(10)}`);

// function factorial(n) {
//     let product = 1;
//     for (let index = 1; index <= n; index++) {
//         product *= index;
//     }
//     return product;
// }

function factorial(n) {
    // console.log(n);
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}