import { Injectable } from '@angular/core';
import { Author, BookType } from './models/author';
import { ApiAuthor } from './models/api';

@Injectable()
export class AuthorService {

  async getAuthors(): Promise<Author[]> {
    const response = await fetch('https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/dry-run-mid-term/data/authors.json');
    if (response.ok) {
      const apiAuthors: ApiAuthor[] = await response.json();
      const authors = apiAuthors.map(this.toAuthor);
      return authors;
    } else {
      throw new Error('something went wrong!');
    }
  }

  private toAuthor(apiAuthor: ApiAuthor): Author {
    const result: Author = {
      id: apiAuthor.id,
      name: apiAuthor.name,
      birthDate: new Date(apiAuthor.birth_date),
      deathDate: apiAuthor.death_date ? new Date(apiAuthor.death_date) : undefined,
      nationality: apiAuthor.nationality,
      books: apiAuthor.bibliography.map(b => {
        return {
          title: b.name,
          year: b.year,
          type: b.type as BookType
        };
      })
    };

    return result;
  }

  getNationalities(authors: Author[]): string[] {
    return [...new Set(authors.map(a => a.nationality))];
  }
}
