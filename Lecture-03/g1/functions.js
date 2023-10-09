const myModule = (function () {
    function addNumbers (a, b = 0) {
        const sum = a + b;
        return sum;
    };

    const result = addNumbers(2, 3);
    console.log(result);

    const add2 = function (a, b) {
        const sum = a + b;
        return sum;
    }

    const add2prime = add2;

    const add3 = (a, b) => a + b;

    const misteryNumber = 7.5;

    const double = a => a * 2;
    console.log(double(2.7));

    const multiplyByMistery = a => a * misteryNumber;

    return {
        add2,
        double,
        multiplyByMistery
    };
})();