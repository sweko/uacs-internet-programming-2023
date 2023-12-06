import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScifiBooksComponent } from './scifi-books/scifi-books.component';
import { FantasyBooksComponent } from './fantasy-books/fantasy-books.component';
import { HorrorBooksComponent } from './horror-books/horror-books.component';
import { OtherBooksComponent } from './other-books/other-books.component';
import { OscarMoviesComponent } from './oscar-movies/oscar-movies.component';
import { EuroMoviesComponent } from './euro-movies/euro-movies.component';
import { HorrorMoviesComponent } from './horror-movies/horror-movies.component';
import { OtherMoviesComponent } from './other-movies/other-movies.component';
import { AdminComponent } from './admin/admin.component';
import { ScifiBookComponent } from './scifi-book/scifi-book.component';
import { NewScifiBookComponent } from './new-scifi-book/new-scifi-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFantasyBookComponent } from './new-fantasy-book/new-fantasy-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    NavbarComponent,
    ScifiBooksComponent,
    FantasyBooksComponent,
    HorrorBooksComponent,
    OtherBooksComponent,
    OscarMoviesComponent,
    EuroMoviesComponent,
    HorrorMoviesComponent,
    OtherMoviesComponent,
    AdminComponent,
    ScifiBookComponent,
    NewScifiBookComponent,
    NewFantasyBookComponent
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
