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
    ]
};
function getPersonInfo(person) {
    var skills = person.skills.join(', ');
    return "Name: ".concat(person.firstName, " ").concat(person.lastName, ", Age: ").concat(person.age, ", Skills: ").concat(skills);
}
var info = getPersonInfo(weko);
console.log(info);
