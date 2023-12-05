import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

interface Book {
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-scifi-books',
  templateUrl: './scifi-books.component.html',
  styleUrl: './scifi-books.component.css'
})
export class ScifiBooksComponent {
  book: Book = {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    year: 1979
  };

  submit() {
    console.log('Submitted');
    console.log(this.book);
  }

  getRequired(model: NgModel) {
    const value = model.errors;
    if (value) {
      return value['required'];
    }
    return true;
  }

}
