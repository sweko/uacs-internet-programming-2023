import { Author, IAuthor } from "./author";

export interface IBook {
    title: string; 
    author: IAuthor; 
    year: number;
    pages: number;
    price: number;
    publisher: string;
    isbn: string;
    coverUri: string
}

export type BookDetails = Partial<IBook> & {
    title: string;
};

export class Book {
    public title: string;
    public author: IAuthor;
    public year: number;
    public pages: number;
    public price: number;
    public publisher: string;
    public isbn: string;
    public coverUri: string;

    constructor(bookDetails: BookDetails) {
        this.title = bookDetails.title;
        this.author = bookDetails.author || Author.Empty();
        this.year = bookDetails.year || 0;
        this.pages = bookDetails.pages || 0;
        this.price = bookDetails.price || 0;
        this.publisher = bookDetails.publisher || '';
        this.isbn = bookDetails.isbn || '';
        this.coverUri = bookDetails.coverUri || '';
    }

    public describe() {
        if (this.author.name === '') {
            return `Book: ${this.title}`;
        }
        return `Book: ${this.title} by ${this.author.name}`;
    }
}