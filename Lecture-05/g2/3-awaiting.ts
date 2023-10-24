function delay(ms: number): Promise<void> {
    const  promise = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
            //reject("Timeout");
        }, ms);
    });
    return promise;
}

async function logging() {
    try {
        console.log("1. Immediate");
        await delay(3000);
        console.log("2. Within the timeout");
        await delay(2000);
        console.log("4. Within the timeout");
        await delay(2000);
        console.log("5. Within the timeout");
        console.log("3. After timeout");
    } catch (err) {
        console.log("Error: " + err);
    };
}

logging();