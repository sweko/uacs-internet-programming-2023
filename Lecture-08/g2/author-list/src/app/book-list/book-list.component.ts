import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/author';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  
    @Input()
    books: Book[] = [];

    getClass(book: Book) {
      switch (book.type) {
        case 'Novel':
          return 'novel';
        case 'Novella':
          return 'novella';
        case 'Non-Fiction':
          return 'non-fiction';
        case 'Collection':
          return 'collection';
        case 'Graphic Novel':
          return 'graphic-novel';
      }
    }
}
