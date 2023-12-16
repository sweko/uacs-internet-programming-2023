import { Component, Input } from '@angular/core';
import { Author } from '../model/author';

@Component({
  selector: 'app-author-row',
  templateUrl: './author-row.component.html',
  styleUrl: './author-row.component.css'
})
export class AuthorRowComponent {

  @Input()
  author: Author = {} as Author;

  getYearsActive(author: Author): string {
    const bookYears = author.books.map(b => b.year)
    const startYear = Math.min(...bookYears);
    const latestYear = Math.max(...bookYears);
    const currentYear = new Date().getFullYear();
    if (author.deathDate) {
      return `${startYear} - ${author.deathDate.getFullYear()}`;
    }
    if (currentYear - latestYear > 2) {
      return `${startYear} - ${latestYear}`;
    }
    return `${startYear} - present`;
  }

}
