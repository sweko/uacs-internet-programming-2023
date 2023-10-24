function delay(ms: number): Promise<void> {
    const  promise = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            reject("Timeout");
        }, ms);
    });
    return promise;
}

console.log("1. Immediate");

delay(3000).then(() => {
    console.log("2. Within the timeout");
    return delay(2000);
}).then(() => {
    console.log("4. Within the timeout");
    return delay(2000);
}).then(() => {
    console.log("5. Within the timeout");
}).catch((err) => {
    console.log("Error: " + err);
});

console.log("3. After timeout");