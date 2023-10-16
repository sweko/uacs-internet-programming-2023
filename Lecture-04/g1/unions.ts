type NumberOrString = number | string;

function toNumber(value: NumberOrString) {
    if (typeof value === "string") {
        return parseInt(value);
    }
    else if (typeof value === "number") {
        return value;
    }
}

console.log(toNumber("3"));
console.log(toNumber(3));

type OneToFive = 1 | 2 | 3 | 4 | 5;

function toNumber2(value: OneToFive) {
    return value;
}
console.log(toNumber2(3));
// console.log(toNumber2(6));

type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move("up");
// move("backwards");

export {};
