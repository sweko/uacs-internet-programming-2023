const maybe = function (boolean) {
    // ...
};

maybe(true).then(() => {
    console.log('Yay!');
}).catch(() => {
    console.log("U can't see me!");
});

maybe(false).then(() => {
    console.log("U can't see me!");
}).catch(() => {
    console.log('Nay!');
});