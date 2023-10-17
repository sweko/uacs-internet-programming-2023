// interface MaybeString {
//     value: string;
//     isValid: boolean;
// }

// function printMaybeString(maybeString: MaybeString) {
//     if (maybeString.isValid) {
//         console.log(maybeString.value);
//     } else {
//         console.log("Invalid string");
//     }
// }

// const maybeString: MaybeString = { isValid: true, value: "Hello" };
// const maybeNull: MaybeString = { isValid: false, value: "" };

// interface MaybeNumber {
//     value: number;
//     isValid: boolean;
// }

// function printMaybeNumber(maybeNumber: MaybeNumber) {
//     if (maybeNumber.isValid) {
//         console.log(maybeNumber.value);
//     } else {
//         console.log("Invalid number");
//     }
// }

// const maybeNumber: MaybeNumber = { isValid: true, value: 7 };
// const maybeNullNumber: MaybeNumber = { isValid: false, value: -1 };

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// interface MaybePerson {
//     value: Person;
//     isValid: boolean;
// }

// interface MaybeDate {
//     value: Date;
//     isValid: boolean;
// }

export interface Maybe<T> {
    value: T;
    isValid: boolean;
}

function printMaybe<T>(maybe: Maybe<T>) {
    if (maybe.isValid) {
        console.log(maybe.value);
    } else {
        console.log("Invalid value");
    }
}

const maybeString: Maybe<string> = { isValid: true, value: "Hello" };
const maybeNull: Maybe<string> = { isValid: false, value: "" };
const maybeNumber: Maybe<number> = { isValid: true, value: 7 };
const maybeDate: Maybe<Date> = { isValid: true, value: new Date() };

interface Person {
    firstName: string;
    lastName: string;
}

const weko: Person = {
    firstName: 'Wekoslav',
    lastName: 'Stefanovski',
};

const maybePerson: Maybe<Person> = { isValid: true, value: weko };

printMaybe(maybeString);
printMaybe(maybeNull);
printMaybe(maybeNumber);
printMaybe(maybeDate);
printMaybe(maybePerson);

[1, 2, 3].map(x => x * 2);