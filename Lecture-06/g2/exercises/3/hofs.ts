const uascSelect = (array: number[], selector: (a: number) => number) => {
    const result: number[] = [];
    for (const item of array) {
        const value = selector(item);
        result.push(value);
    }
    return result;
}

const uacsWhere = (array: number[], predicate: (a: number) => boolean) => {
    const result: number[] = [];
    for (const item of array) {
        const bool = predicate(item);
        if (bool) {
            result.push(item);
        }
    }
    return result;
}