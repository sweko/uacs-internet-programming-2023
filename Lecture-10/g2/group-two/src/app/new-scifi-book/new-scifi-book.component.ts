import { Component } from '@angular/core';
import { Book, BookzService } from '../bookz.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-scifi-book',
  templateUrl: './new-scifi-book.component.html',
  styleUrl: './new-scifi-book.component.css'
})
export class NewScifiBookComponent {

  constructor(private bookService: BookzService) { }

  scifiBook: Book = {
    id: 0,
    title: '',
    author: '',
    year: new Date().getFullYear(),
    kind: 'scifi',
  }

  currentYear = new Date().getFullYear();

  onSubmit(){
    this.bookService.addBook(this.scifiBook);
  }

  getError(model: NgModel, error: string){
    if(model.errors){
      return model.errors[error];
    }
  }

}
