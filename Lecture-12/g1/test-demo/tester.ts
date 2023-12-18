import { tests } from './calc-test';

interface Test {
    name: string;
    run: () => void;
}

// Run all tests

const totalTests = tests.length;
let passedTests = 0;

for (const test of tests) {
    try {
        test.run();
        console.log(`\x1b[32mTest "${test.name}" passed\x1b[0m`);
        passedTests++;
    } catch (error: any) {
        console.error(`\x1b[33mTest ${test.name} failed: ${error.message}\x1b[0m`);
    }
}
if (passedTests === totalTests) {
    console.log('\x1b[32mAll tests passed!\x1b[0m');
} else {
    console.log(`\x1b[33m${totalTests - passedTests} tests failed!\x1b[0m`);
}



