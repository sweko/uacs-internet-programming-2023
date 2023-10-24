console.log("1. Immediate");

const start = performance.now();

setTimeout(() => {
    console.log("2. Within the timeout");
    console.log(`Time passed: ${performance.now() - start}ms`);
    setTimeout(() => {
        setTimeout(() => {
            console.log("5. Within the timeout");
            console.log(`Time passed: ${performance.now() - start}ms`);
        }, 2000);
        console.log("4. Within the timeout");
        console.log(`Time passed: ${performance.now() - start}ms`);
    }, 2000);
}, 3000);

console.log("3. After timeout");