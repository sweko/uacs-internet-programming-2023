import { Book } from "./book";
import { Library } from "./library";

const theCaller = {
    title: "The Caller",
    author: {
        name: "Chris Carter",
        country: "USA"
    }
}

const theCallerBook = new Book(theCaller);
console.log(theCallerBook.describe());

const library = new Library("The UACS Library");

library.addBook(theCallerBook);

library.addBook(new Book({
    title: "The Moon is a Harsh Mistress",
    author: { 
        name: "Robert A. Heinlein",
        country: "USA"
    }
}));

library.addBook(new Book({
    title: "Starship Troopers",
    author: { 
        name: "Robert A. Heinlein",
        country: "USA"
    }
}));

library.addBook(new Book({
    title: "The Puppet Masters",
    author: { 
        name: "Robert A. Heinlein",
        country: "USA"
    }
}));

library.addBook(new Book({
    title: "Stranger in a Strange Land",
    author: { 
        name: "Robert A. Heinlein",
        country: "USA"
    }
}));


// library.removeBook(theCallerBook);
console.log(library.describe());
