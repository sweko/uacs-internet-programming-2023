var weko = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    age: 47,
    skills: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Angular',
        'React',
        'Vue'
    ],
    gender: "male"
};
function getPersonInfo(person) {
    var skills = person.skills.join(', ');
    return "Name: ".concat(person.firstName, " ").concat(person.lastName, ", Age: ").concat(person.age, ", Skills: ").concat(skills);
}
var info = getPersonInfo(weko);
console.log(info);
var nevena = {
    firstName: 'Nevena',
    lastName: 'Stefanovska',
    age: 42,
    skills: [
        'JavaScript',
        'Node.js',
        'Angular',
        'React',
        'Vue'
    ],
    gender: "female"
};
var persons = [weko, nevena];
function getPersonsInfo(persons) {
    return persons.map(getPersonInfo);
}
function procesPerson(persons, processor) {
    return persons.map(processor);
}
