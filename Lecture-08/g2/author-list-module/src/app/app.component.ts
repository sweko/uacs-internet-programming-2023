import { Component, OnInit } from '@angular/core';
import { Author, BookType } from './models/author';
import { ApiAuthor } from './models/api';
import { Filter } from './models/filter';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  authors: Author[] = [];
  displayedAuthors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  async ngOnInit() {
    this.authors = await this.authorService.getAuthors();
    this.displayedAuthors = this.authors;
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