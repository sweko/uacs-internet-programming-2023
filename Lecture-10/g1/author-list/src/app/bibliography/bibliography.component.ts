import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../model/author';

@Component({
  selector: 'app-bibliography',
  templateUrl: './bibliography.component.html',
  styleUrl: './bibliography.component.css'
})
export class BibliographyComponent {
  @Input()
  books: Book[] = [];

  getClass(book: Book): Record<string, boolean> {
    return {
      "novel": book.type === "Novel",
      "novella": book.type === "Novella",
      "collection": book.type === "Collection",
      "non-fiction": book.type === "Non-Fiction",
      "graphic-novel": book.type === "Graphic Novel"
    }
  }
}

