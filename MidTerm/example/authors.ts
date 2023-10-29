import { log, error } from 'console';
import fs from 'fs';

const authors = fs.readFileSync('./authors.txt', 'utf8').split('\r\n');

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

const duplicates = groupBy(authors, line => line).filter(group => group.value.length > 1);

log(`There are ${duplicates.length} duplicate authors`);
for (const duplicate of duplicates) {
    log(`${duplicate.key} has ${duplicate.value.length} entries`);
}

const authorsData: any[] = [];

fs.readdir('./authors', (err, files) => {
    if (err) {
        error(err);
        return;
    }

    const types = new Map<string, number>();
    const nationalities = new Map<string, number>();
    for (const fileName of files) {
        const authorData = JSON.parse(fs.readFileSync(`./authors/${fileName}`, 'utf8'));

        authorsData.push(authorData);
        // book types
        const authorTypes = groupBy(authorData.author.bibliography, (b:any) => b.type)
            .map(g => ({ key: g.key, count: g.value.length }));
        for (const type of authorTypes) {
            types.set(type.key, (types.get(type.key) || 0) + type.count);
        }
        // author nationality
        nationalities.set(
            authorData.author.nationality, 
            (nationalities.get(authorData.author.nationality) || 0) + 1
        );

        // duplicates within author
        const duplicates = groupBy(authorData.author.bibliography, (b:any) => b.name)
            .filter(g => g.value.length > 1);

        if (duplicates.length > 0) {
            log(`${authorData.author.name} has ${duplicates.length} duplicate books`);
            for (const duplicate of duplicates) {
                log(`  ${duplicate.key} has ${duplicate.value.length} entries`);
            }
        }
    }

    console.log("===========================================")

    // book types
    log(`There are ${types.size} types of publications`);
    for (const type of types) {
        log(`  ${type[0]} with ${type[1]} entries`);
    }

    // nationalities
    log(`There are ${nationalities.size} nationalities`);
    for (const nationality of nationalities) {
        log(`  ${nationality[0]} with ${nationality[1]} entries`);
    }

    log(`There are ${files.length} authors total`);

    // duplicates across authors
    const duplicates = groupBy(authorsData.flatMap(a => a.author.bibliography), (b:any) => b.name)
        .filter(g => g.value.length > 1);

    log(`There are ${duplicates.length} duplicate books`);
    for (const duplicate of duplicates) {
        log(`  ${duplicate.key} has ${duplicate.value.length} entries`);
    }
});