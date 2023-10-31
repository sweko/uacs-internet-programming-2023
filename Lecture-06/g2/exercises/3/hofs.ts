const uascSelect = (array: number[], selector: (a: number) => number) => {
    const result: number[] = [];
    for (const item of array) {
        const value = selector(item);
        result.push(value);
    }
    return result;
}

const uacsWhere = (array: number[], predicate: (a: number) => boolean) => {
    // todo: implement
}