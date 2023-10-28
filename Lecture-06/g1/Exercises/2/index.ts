import { Book, BookDetails } from "./books";
import { Library } from "./library";

const bookDetails: BookDetails = {
    title: 'The Pragmatic Programmer'
};

// const pp = new Book(bookDetails);
// console.log(pp.describe());

// const mhm = new Book({
//     title: "The Moon is a Harsh Mistress",
//     author: {
//         name: "Robert Heinlein",
//         country: "USA"
//     }
// });

// console.log(mhm.describe());

const library = new Library('My Library');
library.addBook(bookDetails);
library.addBook({
    title: "The Moon is a Harsh Mistress",
    author: {
        name: "Robert Heinlein",
        country: "USA"
    }
});

library.addBook({
    title: "Starship Troopers",
    author: {
        name: "Robert Heinlein",
        country: "USA"
    }
});

library.addBook({
    title: "The Gods Themselves",
    author: {
        name: "Isaac Asimov",
        country: "USA"
    }
});

console.log(library.describe());

