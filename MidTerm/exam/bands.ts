import {metalBands} from './bands.json';

console.log(metalBands.length);

// for (const band of metalBands) {
//     console.log(band.name);
//     console.log(`\t${band.albums.length} albums`);
//     console.log(`\t${band.members.length} members`);
// }

const groupBy = <T, TKey>(array: T[], keySelector: (item: T) => TKey) => {
    const map = new Map<TKey, T[]>();
    for (const item of array) {
        const key = keySelector(item);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(item);
    }
    return Array.from(map.entries()).map(([key, value]) => ({key, value}));
}

// const groupsByName = groupBy(metalBands, band => band.name);

// console.log(`\nThere are ${groupsByName.length} unique bands`);

// for (const group of groupsByName) {
//     if (group.value.length > 1) {
//         console.log(`${group.key} has ${group.value.length} entries`);
//     }
// }

// const groupsByGenre = groupBy(metalBands, band => band.subgenre);
// for (const group of groupsByGenre) {
//     if (group.value.length > 1) {
//         console.log(`${group.key} has ${group.value.length} entries`);
//     }
// }
