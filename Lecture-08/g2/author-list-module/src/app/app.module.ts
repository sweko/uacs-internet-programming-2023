import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthorFilterComponent } from './author-filter/author-filter.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AgePipe } from './age.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorFilterComponent,
    AuthorDetailsComponent,
    BookListComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
