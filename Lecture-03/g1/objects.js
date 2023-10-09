const fruits = { 
    apple: 2, 
    banana: 2, 
    kiwi: 1, 
    mango: 1, 
    orange: 1 
};

for (const fruit in fruits) {
    console.log(`${fruit} - ${fruits[fruit]}`);
}

const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

for (const key in weko) {
    console.log(`${key} - ${weko[key]}`);
}


for (const key of Object.keys(weko)) {
    console.log(`${key} - ${weko[key]}`);
}
