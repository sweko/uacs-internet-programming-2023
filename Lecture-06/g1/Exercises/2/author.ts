import { Book } from "./books";

export interface IAuthor {
    name: string;
    country: string;
}

export class Author {
    public name: string;
    public country: string;
    public books: Book[];

    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
        this.books = [];
    }

    public describe() {
        return `Author: ${this.name} from ${this.country} (${this.books.length} books)`;
    }

    public addBook(book: Book) {
        this.books.push(book);
    }

    static Empty() {
        return new Author('', '');
    }
}