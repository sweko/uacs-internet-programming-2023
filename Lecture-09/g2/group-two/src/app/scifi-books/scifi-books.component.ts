import { Component, OnInit } from '@angular/core';
import { Book, BookzService } from '../bookz.service';

@Component({
  selector: 'app-scifi-books',
  templateUrl: './scifi-books.component.html',
  styleUrl: './scifi-books.component.css'
})
export class ScifiBooksComponent {
  books: Book[] = this.bookzService.getScifiBooks();

  constructor (private bookzService: BookzService) {}


}
