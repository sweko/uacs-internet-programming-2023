function add(a, b) {
    return a + b;
}

const result = add(1, 2); // 3
console.log(result);

console.log(add(1, 2, 3)); // 3
console.log(add(1)); // NaN
console.log(add("1")); // 1undefined

function addBetter(a, b = 0) {
    return a + b;
}

console.log(addBetter(1)); // NaN
console.log(addBetter("1")); // 1undefined

const addObject = function (a, b) {
    return a + b;
}

const double = function (a) {
    return a * 2;
}

const double2 = a => a * 2;

const fullName = (function () {
    const weko = {
        firstName: 'Wekoslav',
        lastName: 'Stefanovski'
    };

    function fullName() {
        return `${weko.firstName} ${weko.lastName}`;
    }

    return fullName();
})();
