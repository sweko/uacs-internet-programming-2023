import { Component } from '@angular/core';
import { Book, BookzService } from '../bookz.service';

@Component({
  selector: 'app-fantasy-books',
  templateUrl: './fantasy-books.component.html',
  styleUrl: './fantasy-books.component.css'
})
export class FantasyBooksComponent {
  books: Book[] = this.bookzService.getFantasyBooks();

  constructor (private bookzService: BookzService) {}

}
