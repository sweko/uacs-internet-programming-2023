const basePerson = {
    name: 'John',
    age: 30,
    occupation: 'welder',
    toString: function() {
        return `${this.name} (${this.age}) is a ${this.occupation}`;
    }
};

// const weko = Object.create(basePerson, {
//     name: { value: 'Wekoslav' },
//     age: { value: 46 },
//     occupation: { value: 'lecturer' }
// });

const weko = Object.create(basePerson);
weko.name = 'Wekoslav';
weko.age = 46;
weko.occupation = 'lecturer';

// weko.toString = function() {
//     return `${this.name} (${this.age}) is an ${this.occupation} - redefined`;
// }

console.log(weko.toString());

console.log(weko.hasOwnProperty('name'));
console.log(weko.hasOwnProperty('toString'));

export {};
