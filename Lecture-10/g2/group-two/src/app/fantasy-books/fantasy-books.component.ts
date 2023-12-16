import { Component } from '@angular/core';
import { Book, BookzService } from '../bookz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fantasy-books',
  templateUrl: './fantasy-books.component.html',
  styleUrl: './fantasy-books.component.css'
})
export class FantasyBooksComponent {
  books: Book[] = [];

  constructor (private bookzService: BookzService) {}

  private bookSub$: Subscription | null = null;

  ngOnInit() {
    this.bookSub$ = this.bookzService.getFantasyBooks()
      .subscribe(books => this.books = books);
  }

  ngOnDestroy() {
    this.bookSub$?.unsubscribe();
  }

}
