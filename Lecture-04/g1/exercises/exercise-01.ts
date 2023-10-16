function add(a: number, b: number = 0) {
    return a + b;
}

const result = add(2, 3);

console.log(result); // 5


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, value) => acc + value, 0);

console.log(sum); // 15