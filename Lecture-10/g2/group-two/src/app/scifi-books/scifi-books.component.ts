import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book, BookzService } from '../bookz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scifi-books',
  templateUrl: './scifi-books.component.html',
  styleUrl: './scifi-books.component.css'
})
export class ScifiBooksComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  constructor (private bookzService: BookzService) {}

  private bookSub$: Subscription | null = null;

  ngOnInit() {
    this.bookSub$ = this.bookzService.getScifiBooks()
      .subscribe(books => this.books = books);
  }

  ngOnDestroy() {
    this.bookSub$?.unsubscribe();
  }


}
