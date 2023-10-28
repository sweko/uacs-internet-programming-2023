export {};

const fibbonaci = (() => {
    let cache = new Map<number, number>();

    function fibbonaci(n: number): number {
        if (cache.has(n)) {
            return cache.get(n)!;
        }

        if (n <= 1) {
            return 1;
        }
        const result = fibbonaci(n - 1) + fibbonaci(n - 2);
        cache.set(n, result);
        return result;
    };

    return fibbonaci;
})();

console.log(fibbonaci(10));
console.log(fibbonaci(20));
console.log(fibbonaci(30));
console.log(fibbonaci(40));
console.log(fibbonaci(50));
