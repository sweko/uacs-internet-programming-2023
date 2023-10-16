interface Person {
    firstName: string;
    lastName: string;
}

type PersonWithAge = Person & {
    id: number;
}

const weko: PersonWithAge = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    id: 1
};