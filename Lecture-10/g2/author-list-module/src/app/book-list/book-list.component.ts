import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/author';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  
    @Input()
    books: Book[] = [];

    getClass(book: Book) {
      return {
        'novel': book.type === 'Novel',
        'novella': book.type === 'Novella',
        'non-fiction': book.type === 'Non-Fiction',
        'collection': book.type === 'Collection',
        'graphic-novel': book.type === 'Graphic Novel'
      };
    }
}
