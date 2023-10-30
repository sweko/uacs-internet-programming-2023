const delay = (milliseconds: number) => {
    const result = new Promise<void>(
        (resolve, reject) => {
            setTimeout(() => {
                const r = Math.random();
                console.log(r);
                if (r < 1 / 6) {
                    return reject("BOOM, you lost russian rulet");
                }
                return resolve();
            }, milliseconds);
        }
    );
    return result;
}

async function method() {
    try {
        console.log("One");
        await delay(2000);
        console.log("Two");
        await delay(2000);
        console.log("Three");
        await delay(2000);
        console.log("Four");
        await delay(2000);
        console.log("Five");
    } catch (error) {
        console.error(`ERROR OCURED: ${error}`);
    };
}

method();