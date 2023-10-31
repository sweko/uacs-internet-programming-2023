const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    // toString() {
    //     return `${this.name} (${this.age})`;
    // }
};

const weko = Object.create(person);
weko.name = 'Wekoslav';
weko.age = 46;
weko.hobbies = ['Reading', 'Writing'];

console.log(weko.toString());

for (const key of Object.keys(weko)) {
    console.log(` ${key}: ${weko[key]}`)
}

console.log(weko.role);

