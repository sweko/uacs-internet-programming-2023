function addTwo(a:number, b:number) {
    return a + b;
}

const result = addTwo(1, 2);
console.log(result.toFixed(2));

// addTwo(7, 9, 11);
// addTwo(7);
// addTwo("7", 9);


function addThree(a:number, b:number, c?:number) {
    if (c === undefined) {
        return a + b;
    }
    return a + b + c;
}

addThree(1, 2, 3);
addThree(1, 2);

function addThreeTakeTwo(a:number, b:number, c:number = 0) {
    return a + b + c;
}