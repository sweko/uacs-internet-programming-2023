import { Author, IAuthor } from "./author";
import { Book, BookDetails } from "./book";

export class Library {

    name: string;
    private books: Book[] = [];
    private authors: Author[] = [];

    constructor(name: string) {
        this.name = name;
    }

    describe() {
        return `Library: ${this.name}

    Books:
${this.books.map(b => `\t${b.describe()}`).join('\n')}
    Authors:
${this.authors.map(a => `\t${a.describe()}`).join('\n')}
        `;
    }

    addBook(book: BookDetails) {
        const newBook = new Book(book);
        this.books.push(newBook);

        if (book.author) {
            this.registerAuthor(book.author);
            const author = this.authors.find(a => a.name === book.author!.name);
            author!.addBook(newBook);
        }
    }

    registerAuthor(author: IAuthor) {
        if (this.authors.find(a => a.name === author.name)) {
            return;
        }

        const newAuthor = new Author(author.name, author.country);
        this.authors.push(newAuthor);
    }

    removeBook(book: Book) {
        this.books = this.books.filter(b => b !== book);
    }
}