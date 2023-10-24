const maybe = function (boolean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (boolean) {
                resolve(17);
            } else {
                reject("We've broken the promise!");
            }
        }, 1000);
    });
};

maybe(true).then((value) => {
    console.log(`Yay! value=${value}`);
}).catch(() => {
    console.log("U can't see me!");
});

maybe(false).then(() => {
    console.log("U can't see me!");
}).catch((error) => {
    console.log(`Nay! error=${error}`);
});

Promise.all([maybe(true), maybe(true)]).then((values) => {
    console.log(`Yay! values=${values}`);
}).catch(() => {
    console.log("U can't see me!");
});

Promise.all([maybe(true), maybe(false)]).then((values) => {
    console.log("U can't see me!");
}).catch((error) => {
    console.log(`Nay! error=${error}`);
});

Promise.race([maybe(true), maybe(true)]).then((value) => {
    console.log(`Yay! value=${value}`);
}).catch(() => {
    console.log("U can't see me!");
});

Promise.race([maybe(true), maybe(false)]).then((value) => {
    console.log(`Yay! value=${value}`);
}).catch(() => {
    console.log("U can't see me!");
});

Promise.race([maybe(false), maybe(false)]).then((values) => {
    console.log("U can't see me!");
}).catch((error) => {
    console.log(`Nay! error=${error}`);
});