const doStuffLater = (callback) => {
    setTimeout(callback, 2000);
};

const f1 = function () {
    console.log('f1');
};

const f2 = function () {
    console.log('f2');
};

const doTwoStuffs = function (firstCallback, secondCallback) {
    doStuffLater(() => {
        firstCallback();
        doStuffLater(secondCallback);
    });
};

doTwoStuffs(f1, f2);

