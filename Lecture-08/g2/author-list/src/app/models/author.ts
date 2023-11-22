export interface Person {
    name: string;
    birthDate: Date;
    deathDate?: Date;
    nationality: string;
}

export interface Author extends Person {
    id: number;
    books: Book[];
}

export interface Book {
    title: string;
    year: number;
    type: BookType;
}

export type BookType = "Novel" | "Novella" | "Non-Fiction" | "Collection" | "Graphic Novel";