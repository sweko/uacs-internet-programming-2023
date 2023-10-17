export function add(a: number, b: number): number {
    console.log("add called from one.ts");
    return a + b;
}

const hidden = 7;

export const addHidden = (value: number) => {
    return value + hidden;
}