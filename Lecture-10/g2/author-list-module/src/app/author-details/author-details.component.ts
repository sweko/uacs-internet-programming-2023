import { Component, Input } from '@angular/core';
import { Author } from '../models/author';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.css'
})
export class AuthorDetailsComponent {

  @Input()
  author: Author = {} as Author;

  getYearsActive(author: Author): string {
    const startYear= author.birthDate.getFullYear();
    const currentYear = new Date().getFullYear();
    if (author.deathDate) {
      return `${startYear} - ${author.deathDate.getFullYear()}`;
    } else {
      return `${startYear} - ${currentYear}`;
    }
  }
}
