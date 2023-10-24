type Predicate<T> = (item: T) => boolean;

export function countFilter<T>(array: T[], predicate: Predicate<T>) {
    let count = 0;
    for (const item of array) {
        if (predicate(item)) {
            count += 1;
        }
    }
    return count;
}

const nums = [1, 2, 3];
const numCount = countFilter(nums, (n) => n > 1);
console.log(numCount); // 2

const strings = ['a', 'b', 'c'];
const stringCount = countFilter(strings, (s) => s === 'd');
console.log(stringCount); // 0

const empty: number[] = [];
const emptyCount = countFilter(empty, (n) => n > 1);
console.log(emptyCount); // 0