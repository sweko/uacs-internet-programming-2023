import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../model/author';

@Component({
  selector: 'app-bibliography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bibliography.component.html',
  styleUrl: './bibliography.component.css'
})
export class BibliographyComponent {
  @Input()
  books: Book[] = [];

  getClass(book: Book): string {
    switch (book.type) {
      case "Novel": return "novel";
      case "Novella": return "novella";
      case "Collection": return "collection";
      case "Non-Fiction": return "non-fiction";
      case "Graphic Novel": return "graphic-novel";

    }
  }
}

