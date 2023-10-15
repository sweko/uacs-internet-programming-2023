const myself = {
  name: "Wekoslav Stefanovski",
  age: 46,
  address: "Skopje",
}

function describe(person) {
  // TODO: return a string like "My name is ..., I am ... years old and I live in ..."
  return `My name is ${person.name}, I am ${person.age} years old and I live in ${person.address}`;
}

const description = describe(myself);
console.log(description);