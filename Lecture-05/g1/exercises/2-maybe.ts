/*
- Write a function `maybeDoStuff` that accepts a boolean argument `shouldDoStuff`. It should return a promise that invokes the `resolve` function after 2 seconds if `shouldDoStuff` is `true`, and invokes the `reject` function otherwise.
- Test your function by calling it and chaining a `.then` method that logs a message to the console, and a `.catch` method that logs an error message to the console.
*/

function maybeDoStuff(shouldDoStuff: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldDoStuff) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

maybeDoStuff(true)
    .then(() => console.log('Stuff done!'))
    .catch(() => console.log('SHOULD NOT HAPPEN!'));

maybeDoStuff(false)
    .then(() => console.log('SHOULD NOT HAPPEN!'))
    .catch(() => console.log('Stuff not done!'));