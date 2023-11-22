import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiAuthor } from './models/api';
import { Author, BookType } from './models/author';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorFilterComponent } from './author-filter/author-filter.component';
import { Filter } from './models/filter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AuthorDetailsComponent, AuthorFilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authors: Author[] = [];
  displayedAuthors: Author[] = [];

  async ngOnInit() {
    const response = await fetch('https://raw.githubusercontent.com/sweko/uacs-internet-programming-exams/main/dry-run-mid-term/data/authors.json');
    if (response.ok) {
      const apiAuthors: ApiAuthor[] = await response.json();
      this.authors = apiAuthors.map(this.toAuthor);
      this.displayedAuthors = this.authors;
    } else {
      console.log('something went wrong!');
    }
  }

  toAuthor(apiAuthor: ApiAuthor): Author {
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

  getNationalities(): string[] {
    return [...new Set(this.authors.map(a => a.nationality))];
  }

  applyFilter(filter: Filter) {
    this.displayedAuthors = this.authors;
    if (filter.namePart) {
      this.displayedAuthors = this.displayedAuthors.filter(a => a.name.toLowerCase().includes(filter.namePart.toLowerCase()));
    }
  };
}
