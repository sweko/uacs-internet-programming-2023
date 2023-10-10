const reducefactorial = n => Array.from({length: n}, (_, i) => i + 1).reduce((a, b) => a * b, 1);

console.log(reducefactorial(5)); // 120
console.log(reducefactorial(4)); // 24
console.log(reducefactorial(6)); // 720
console.log(reducefactorial(10)); // 3628800
console.log("--------------------------------------------------");

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(6)); // 720
console.log(factorial(10)); // 3628800
console.log("--------------------------------------------------");

function factorialRecursive(n) {
    if (n === 1) {
        // console.log(`Base case: ${n}`);
        return 1;
    }
    // console.log(`Before recursion: ${n}`);
    const result = n * factorialRecursive(n - 1);
    // console.log(`After recursion: ${n}`);
    return result;
}

console.log(`The factorial of 5 is ${factorialRecursive(5)}`); // 120
console.log(`The factorial of 4 is ${factorialRecursive(4)}`); // 24
console.log(`The factorial of 6 is ${factorialRecursive(6)}`); // 720
console.log(`The factorial of 10 is ${factorialRecursive(10)}`); // 3628800
console.log("--------------------------------------------------");