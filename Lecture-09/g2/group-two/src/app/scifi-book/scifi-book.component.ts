import { Component, OnInit } from '@angular/core';
import { Book, BookzService } from '../bookz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scifi-book',
  templateUrl: './scifi-book.component.html',
  styleUrl: './scifi-book.component.css'
})
export class ScifiBookComponent implements OnInit {

  book: Book | null = null;

  constructor (
    private bookzService: BookzService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.params['id'];
    const id = parseInt(idParam, 10);
    if (isNaN(id)) {
      console.log('Invalid id');
    }
    const result = this.bookzService.getBook(id);
    if (!result) {
      console.log('Invalid id');
    }
    this.book = result!;
  }

}
