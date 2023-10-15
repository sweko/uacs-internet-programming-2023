function getOldest(map) {
    const entries = map.entries();

    let oldestName = '';
    let oldest = Number.NEGATIVE_INFINITY;

    for(const [name, age] of entries) {
        if (age > oldest) {
            oldest = age;
            oldestName = name;
        }
    }

    return oldestName;
}

const map = new Map ();

map.set('John', 30);
map.set('Jane', 29);
map.set('Bob', 31);
map.set('Alice', 28);
map.set('Weko', 46);


const oldestName = getOldest(map);
console.log(`The oldest person is ${oldestName}`);