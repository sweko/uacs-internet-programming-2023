import { Assert } from "./asserts";
import { add } from "./calc";

const testOne = {
    name: 'checks whether the sum of two numbers is correct',
    run: () => {
        // 1. Arrange
        const first = 4;
        const second = 5;
        const expected = 9;

        // 2. Act
        const actual = add(first, second);

        // 3. Assert
        Assert.areEqual(actual, expected);
    }
}

const testTwo = {
    name: 'checks whether if the first argument is zero, the result is the second argument',
    run: () => {
        // 1. Arrange
        const first = 0;
        const second = 9;
        const expected = 9;

        // 2. Act
        const actual = add(first, second);

        // 3. Assert
        Assert.areEqual(actual, expected);
    }
}

const testThree = {
    name: 'checks whether if the second argument is zero, the result is the first argument',
    run: () => {
        // 1. Arrange
        const first = 9;
        const second = 0;
        const expected = 9;

        // 2. Act
        const actual = add(first, second);

        // 3. Assert
        Assert.areEqual(actual, expected);
    }
}

const testFour = {
    name: 'checks whether if both arguments are zero, the result is zero',
    run: () => {
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
