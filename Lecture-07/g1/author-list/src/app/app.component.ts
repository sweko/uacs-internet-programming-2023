import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Author, BookType } from './model/author';
import { AuthorApi } from './model/api';
import { AuthorRowComponent } from './author-row/author-row.component';
import { AuthorFilterComponent } from './author-filter/author-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AuthorRowComponent, AuthorFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  authors: Author[] = [];
  nationalities: string[] = [];

  async ngOnInit() {
      const response = await fetch(' https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/dry-run-mid-term/data/authors.json');
      if (response.ok) {
        const apiAuthors = await response.json();
        this.authors = apiAuthors.map((apiAuthor: AuthorApi) => this.toAuthor(apiAuthor));
        this.extractNationalities();
      } else {
        console.error('Failed to fetch authors');
      }
  }

  toAuthor(apiAuthor: AuthorApi): Author {
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

  extractNationalities() {
    this.nationalities = [...new Set(this.authors.map(a => a.nationality))];
  }
  
}

