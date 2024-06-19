import { tests } from "./calc-tests";

for (const test of tests) {
    try {
        test.test();
        console.log(`Test "${test.name}" passed`);
    } catch (e) {
        console.log(`Test "${test.name}" failed`);
        console.log(e);
    }
}