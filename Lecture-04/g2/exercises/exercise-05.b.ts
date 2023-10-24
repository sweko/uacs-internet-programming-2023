export function contains<T>(array: T[], candidate: T): boolean {
    for (const item of array) {
        if (item === candidate) {
            return true;
        }
    }
    return false;
}

const nums = [1, 2, 3];
const hasOne = contains(nums, 1);
console.log(hasOne); // true

const strings = ['a', 'b', 'c'];
const hasD = contains(strings, 'd');
console.log(hasD); // false

const empty: number[] = [];
const hasEmpty = contains(empty, 1);
console.log(hasEmpty); // false

