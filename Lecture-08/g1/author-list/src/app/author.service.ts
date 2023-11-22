import { Injectable } from '@angular/core';
import { Author, BookType } from './model/author';
import { AuthorApi } from './model/api';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  async getAuthors(): Promise<Author[]> {
    const response = await fetch(' https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/dry-run-mid-term/data/authors.json');
    if (response.ok) {
      const apiAuthors = await response.json();
      const result = apiAuthors.map((apiAuthor: AuthorApi) => this.toAuthor(apiAuthor));
      return result;
    } else {
      throw new Error('Could not fetch authors');
    }
  }

  private toAuthor(apiAuthor: AuthorApi): Author {
    const result: Author = {
      id: apiAuthor.id,
      name: apiAuthor.name,
      birthDate: new Date(apiAuthor.birth_date),
      deathDate: apiAuthor.death_date ? new Date(apiAuthor.death_date) : undefined,
      nationality: apiAuthor.nationality,
      books: apiAuthor.bibliography.map((apiBibliography) => {
        return {
          title: apiBibliography.name,
          year: apiBibliography.year,
          type: apiBibliography.type as BookType
        };
      })
    }
    return result;
  }
}
