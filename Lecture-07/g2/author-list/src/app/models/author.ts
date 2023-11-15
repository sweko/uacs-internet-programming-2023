export interface Author {
    id: number;
    name: string;
    birthDate: Date;
    deathDate?: Date;
    nationality: string;
    books: Book[];
}

export interface Book {
    title: string;
    year: number;
    type: BookType;
}

export type BookType = "Novel" | "Novella" | "Non-Fiction" | "Collection" | "Graphic Novel";