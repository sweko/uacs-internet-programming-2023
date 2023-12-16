import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book, BookzService } from '../bookz.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, defaultIfEmpty, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-scifi-book',
  templateUrl: './scifi-book.component.html',
  styleUrl: './scifi-book.component.css'
})
export class ScifiBookComponent implements OnInit, OnDestroy {

  book: Book | null = null;

  constructor (
    private bookzService: BookzService,
    private route: ActivatedRoute
  ) {}

  private bookSub$: Subscription | null = null;
  // private routeSub$: Subscription | null = null;

  book$?: Observable<Book>

  ngOnInit() {

    // never use nested subscriptions
    // this.routeSub$ = this.route.paramMap.subscribe(params => {
    //   const idParam = params.get('id');
    //   if (!idParam) {
    //     console.log('Invalid id');
    //   }
    //   const id = parseInt(idParam!, 10);
    //   if (isNaN(id)) {
    //     console.log('Invalid id');
    //   }
    //   this.bookSub$ = this.bookzService.getBook(id).subscribe(book => this.book = book);
    // });

    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      filter(id => !!id),
      map(id => parseInt(id!, 10)),
      filter(id => !isNaN(id)),
      switchMap(id => this.bookzService.getBook(id))
    )

    // this.bookSub$ = this.book$.subscribe(book => this.book = book);
  }

  ngOnDestroy() {
    this.bookSub$?.unsubscribe();
    // this.routeSub$?.unsubscribe();
  }

}
