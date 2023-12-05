import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ScifiBooksComponent } from './scifi-books/scifi-books.component';
import { FantasyBooksComponent } from './fantasy-books/fantasy-books.component';
import { HorrorBooksComponent } from './horror-books/horror-books.component';
import { OtherBooksComponent } from './other-books/other-books.component';
import { MoviesComponent } from './movies/movies.component';
import { OscarMoviesComponent } from './oscar-movies/oscar-movies.component';
import { EuroMoviesComponent } from './euro-movies/euro-movies.component';
import { ActionMoviesComponent } from './action-movies/action-movies.component';
import { OtherMoviesComponent } from './other-movies/other-movies.component';
import { AdminComponent } from './admin/admin.component';
import { BandComponent } from './band/band.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ScifiBooksComponent,
    FantasyBooksComponent,
    HorrorBooksComponent,
    OtherBooksComponent,
    MoviesComponent,
    OscarMoviesComponent,
    EuroMoviesComponent,
    ActionMoviesComponent,
    OtherMoviesComponent,
    AdminComponent,
    BandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
