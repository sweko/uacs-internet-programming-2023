import { Component, OnInit } from '@angular/core';

import { Author } from './model/author';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  authors: Author[] = [];
  nationalities: string[] = [];

  constructor(private authorService: AuthorService) { }

  async ngOnInit() { 
    this.authors = await this.authorService.getAuthors();
    this.extractNationalities();
  }

  extractNationalities() {
    this.nationalities = [...new Set(this.authors.map(a => a.nationality))];
  }
  
}

