let x: number = 3;
const weko = "Wekoslav";

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
let boolean = false;
let string = "Wekoslav";
let object = { name: "Wekoslav", surname: "Stefanovski" };
let nnn = null
let undef = undefined;

let literallyAnything : any = 3;
literallyAnything = "Wekoslav";
literallyAnything = true;
literallyAnything = { name: "Wekoslav", surname: "Stefanovski" };

let value = numbers[0];
console.log(value.toFixed(2));

let evens: number[] = [2, 4, 6, 8];

let tuple: [string, number] = ["age", 46];

tuple[0] = "name";
tuple[1] = 17;


function addTwo (a: number, b: number) {
    return a + b;
}

console.log(addTwo(3, 4) * 2);

addTwo(3, 4);
// addTwo(3, 4, 5);
// addTwo(3);


function addThree (a: number, b: number, c: number = 0) {
    return a + b + c;
}

addThree(3, 4, 5);
addThree(3, 4);

function addTwoOrThree (a: number, b: number, c?: number) {
    if (c === undefined) {
        return a + b;
    }
    return a + b + c;
}

export {};