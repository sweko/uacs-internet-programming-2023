import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, BookzService } from '../bookz.service';

@Component({
  selector: 'app-new-fantasy-book',
  templateUrl: './new-fantasy-book.component.html',
  styleUrl: './new-fantasy-book.component.css'
})
export class NewFantasyBookComponent {
  
  fantasyBookForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    author: ['', [Validators.required, Validators.minLength(3)]],
    year: [new Date().getFullYear(), [
      Validators.required, 
      Validators.min(1900), 
      Validators.max(new Date().getFullYear())
    ]],
  });

  constructor(private fb: FormBuilder, private bookzService: BookzService) { 
    // const idControl = this.fb.control(0);
    // this.fantasyBookForm.addControl('id', idControl);
    // this.fantasyBookForm.removeControl('year');
  }

  onSubmit() {
    const book: Book = {
      id: 0,
      kind: 'fantasy',
      ...this.fantasyBookForm.value,
    };
    this.bookzService.addBook(book);
  }

}
