let x = 3;
const y = 5;

const firstName = "John";
const lastName = "Doe";

x = 4;

const array = [1, 2, 3];
array[1] = 5;
array.push(7);

// array = [2, 4, 6];
array.push("Totally a number")

const weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
}

const kristijan = {
    firstName: "Kristijan",
    lastName: "Lazarov",
}

weko.firstName = "Weko";

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (const element of array) {
    
// }

function greet(person) {
    const nickName = getNickname(person);
    console.log(`You're ${person.firstName} ${person.lastName}. Welcome ${nickName}! `)
}

function getNickname(person) {
    return person.firstName.slice(0, 4);
}
