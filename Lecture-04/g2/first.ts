let x: number = 3;
let hello: string = "hello";
let isDone: boolean = false;
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];
let n = null;
let u = undefined;

let anything: any = 3;

anything = "hello";
anything = true;
anything = [1, 2, 3];
anything = {};

numbers.push(4);
// numbers.push("a");

const value = numbers[0];
console.log(value.toFixed());

const value2 = strings[0];
console.log(value2.toUpperCase());

const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x2E
}

const wekoAge: [string, number] = ["age", weko.age];

console.log(wekoAge[0].toUpperCase());
console.log(wekoAge[1].toExponential());