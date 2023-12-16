import { Injectable } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  kind: 'scifi' | 'fantasy';
}

@Injectable({
  providedIn: 'root'
})
export class BookzService {

  private books = [
    {
      id: 1,
      title: 'The Martian',
      author: 'Andy Weir',
      year: 2011,
      kind: 'scifi'
    }, 
    {
      id: 2,
      title: 'House of Suns',
      author: 'Alastair Reynolds',
      year: 2008,
      kind: 'scifi'
    },
    {
      id: 3,
      title: 'The Hobbit',
      author: 'J. R. R. Tolkien',
      year: 1937,
      kind: 'fantasy'
    },
    {
      id: 4,
      title: 'The Lord of the Rings',
      author: 'J. R. R. Tolkien',
      year: 1954,
    },
    {
      id: 5,
      title: 'The Silmarillion',
      author: 'J. R. R. Tolkien',
      year: 1977,
      kind: 'fantasy'
    },
    {
      id: 6,
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      year: 2007,
      kind: 'fantasy'
    },
    {
      id: 7,
      title: 'The City and the Stars',
      author: 'Arthur C. Clarke',
      year: 1956,
      kind: 'scifi'
    }
  ] as Book[];

  getScifiBooks():Observable<Book[]> {
    const scifiBooks$ = of(this.books).pipe(
      map((books:Book[]) => books.filter(book => book.kind === 'scifi'))
    );
    return scifiBooks$;
  }

  getFantasyBooks() {
    const fantasyBooks$ = of(this.books).pipe(
      map((books:Book[]) => books.filter(book => book.kind === 'fantasy'))
    );
    return fantasyBooks$;
  }

  getBook(id: number) {
    const specificBook$ = from(this.books).pipe(
      filter(book => book.id === id)
    );
    return specificBook$;
  }

  addBook(book: Book) {
    const maxId = this.books.reduce((max, book) => max > book.id ? max : book.id, 0);
    book.id = maxId + 1;
    this.books.push(book);
  }
}
