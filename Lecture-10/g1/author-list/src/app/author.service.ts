import { Injectable } from '@angular/core';
import { Author, BookType } from './model/author';
import { AuthorApi } from './model/api';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http
      .get<AuthorApi[]>('https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/dry-run-mid-term/data/authors.json')
      .pipe(
        map((apiAuthors: AuthorApi[]) => apiAuthors.map((apiAuthor: AuthorApi) => this.toAuthor(apiAuthor))),
        catchError((error: any) => {
          console.error(error);
          throw new Error('Could not fetch authors');
        })
      );
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
