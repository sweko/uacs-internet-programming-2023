export const Assert = {
    areEqual: (actual: number, expected: number) => {
        if (actual !== expected) {
            throw new Error(`Expected ${expected} but got ${actual}`);
        }
    }
}