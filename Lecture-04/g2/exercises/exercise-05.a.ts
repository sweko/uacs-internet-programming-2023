export function first<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }
    return array[0];
}

const nums = [1, 2, 3];
const firstNum = first(nums);
console.log(firstNum); // 1

const strings = ['a', 'b', 'c'];
const firstString = first(strings);
console.log(firstString); // 'a'

const empty: number[] = [];
const firstEmpty = first(empty);
console.log(firstEmpty); // undefined