import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorRowComponent } from './author-row/author-row.component';
import { AuthorFilterComponent } from './author-filter/author-filter.component';
import { SharedModule } from './shared/shared.module';
import { BibliographyComponent } from './bibliography/bibliography.component';
import { PersonAgePipe } from './person-age.pipe';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorRowComponent,
    AuthorFilterComponent,
    BibliographyComponent,
    PersonAgePipe
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
