function pureAdd(x: number, y: number): number {
  return x + y;
}

for (let index = 0; index < 10; index++) {
    const result = pureAdd(2, 3);
}

function impureAdd(x: number, y: number) {
  console.log('Adding', x, y, x+y);
}

for (let index = 0; index < 3; index++) {
  impureAdd(2, 3);
}


let counter = 0;

function increment() {
    counter++;
}

function pureIncrement(value: number) {
    return value + 1;
}

const random = (Math.random() * 100) | 0;
// for (let index = 0; index < random; index++) {
//   increment();
// }
// console.log(counter);

for (let index = 0; index < random; index++) {
  pureIncrement(counter);
}
console.log(counter);