export interface Person {
    firstName: string;
    lastName: string;
}

interface Idable {
    id: number;
}

type PersonWithId = Person & Idable;

const weko: PersonWithId = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
    id: 1
};