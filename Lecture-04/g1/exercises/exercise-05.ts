function first<T>(array: T[]) {
    if (array.length === 0) {
        throw new Error("The array is empty");
        // return undefined;
    }
    return array[0];
}

const x = first([1, 2, 3, 4]);
const y = first(["a", "b", "c"]);

