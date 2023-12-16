import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Book {
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-horror-books',
  templateUrl: './horror-books.component.html',
  styleUrl: './horror-books.component.css'
})
export class HorrorBooksComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({});
  book: Book = {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [this.book.title, Validators.required],
      author: [this.book.author, Validators.required],
    });

    const yearControl = this.fb.control(this.book.year, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())])
    this.bookForm.addControl('year', yearControl);
  }

  submitForm() {
    console.log('Submitted');
    console.log(this.bookForm.value);

    this.book = this.bookForm.value;
  }

}
