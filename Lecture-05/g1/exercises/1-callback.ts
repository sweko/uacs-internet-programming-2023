const delay = (ms) => new Promise((resolve, _reject) => setTimeout(resolve, ms));

const firstFunction = () => {
    console.log('First function');
}

const secondFunction = () => {
    console.log('Second function');
}


const doTwoStuffs = (first: () => void, second: () => void) => {
    setTimeout(() => {
        first();
        setTimeout(second, 2000);
    }, 2000);
}

doTwoStuffs(firstFunction, secondFunction);