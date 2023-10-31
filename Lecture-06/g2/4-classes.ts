class TwoNumbers {
    private a: number;
    protected b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    sum(): number {
        return this.a + this.b;
    }
}

class ThreeNumbers extends TwoNumbers {
    public c: number;

    constructor(a: number, b: number, c: number) {
        super(a, b);
        this.c = c;
    }

    sum(): number {
        return super.sum() + this.c;
    }
}

const tn = new TwoNumbers(1, 2);
console.log(tn.sum());

const threeNums = new ThreeNumbers(7, 2, 3);
console.log(threeNums.sum());

export {};