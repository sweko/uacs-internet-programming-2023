import { Component, OnDestroy, OnInit } from '@angular/core';
import { Author, BookType } from './models/author';
import { ApiAuthor } from './models/api';
import { Filter } from './models/filter';
import { AuthorService } from './author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  authors: Author[] = [];
  displayedAuthors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  private authorSubcription$?: Subscription;

  ngOnInit() {
    this.authorSubcription$ = this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
      this.displayedAuthors = this.authors;
    });
  }

  ngOnDestroy() {
    this.authorSubcription$?.unsubscribe();
  }

  getNationalities(): string[] {
    return this.authorService.getNationalities(this.authors);
  }

  applyFilter(filter: Filter) {
    this.displayedAuthors = this.authors;
    if (filter.namePart) {
      this.displayedAuthors = this.displayedAuthors.filter(a => a.name.toLowerCase().includes(filter.namePart.toLowerCase()));
    }
  };
}