import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from '../model/author';
import { CheckmarkComponent } from '../checkmark/checkmark.component';
import { BibliographyComponent } from '../bibliography/bibliography.component';

@Component({
  selector: 'app-author-row',
  standalone: true,
  imports: [CommonModule, CheckmarkComponent, BibliographyComponent],
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
