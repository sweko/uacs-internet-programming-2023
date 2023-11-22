import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from '../models/author';
import { CheckmarkComponent } from '../checkmark/checkmark.component';
import { BookListComponent } from '../book-list/book-list.component';
import { AgePipe } from '../age.pipe';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [CommonModule, CheckmarkComponent, BookListComponent, AgePipe],
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
