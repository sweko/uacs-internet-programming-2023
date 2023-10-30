const delay = (milliseconds: number) => {
    const result = new Promise<void>(
        (resolve, reject) => {
            setTimeout(() => {
                const r = Math.random();
                console.log(r);
                if (r < 1/3) {
                    return reject("BOOM, you lost russian rulet");
                }
                return resolve();
            }, milliseconds);
        }
    );
    return result;
}

console.log("One");

delay(2000)
    .then(() => {
        console.log("Two");
        return delay(2000);
    }).then(() => {
        console.log("Three");
        return delay(2000);
    }).then(() => {
        console.log("Four");
        return delay(2000);
    }).then(() => {
        console.log("Five");
    }).catch((error) => {
        console.error(`ERROR OCURED: ${error}`);
    })
