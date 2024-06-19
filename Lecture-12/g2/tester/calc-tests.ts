import { add } from "./calculator";
import { Assert } from "./model";

const testOne = {
    name: "When two numbers are added, the result is the sum of those numbers",
    test: () => {
        // 1. Arrange
        const first = 8;
        const second = 9;
        const expected = 17;

        // 2. Act
        const actual = add(first, second);

        // 3. Assert
        Assert.areEqual(actual, expected);
    }
}

const testTwo = {
    name: "If the first number is zero, the result is the second number",
    test: () => {
        // 1. Arrange
        const first = 0;
        const second = 17;
        const expected = 17;

        // 2. Act
        const actual = add(first, second);

        // 3. Assert
        Assert.areEqual(actual, expected);
    }
}

const testThree = {
    name: "If the second number is zero, the result is the first number",
    test: () => {

        // 1. Arrange
        const first = 17;
        const second = 0;
        const expected = 17;

        // 2. Act
        const actual = add(first, second);

        // 3. Assert
        if (actual !== expected) {
            throw new Error(`Expected ${expected} but got ${actual}`);
        }
    }
}

const testFour = {
    name: "If both numbers are zero, the result is zero",
    test: () => {
        // 1. Arrange
        const first = 0;
        const second = 0;
        const expected = 0;

        // 2. Act
        const actual = add(first, second);

        // 3. Assert
        Assert.areEqual(actual, expected);
    }
}


export const tests = [testOne, testTwo, testThree, testFour];