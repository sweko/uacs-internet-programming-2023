import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ScifiBooksComponent } from './scifi-books/scifi-books.component';
import { OtherBooksComponent } from './other-books/other-books.component';
import { HorrorBooksComponent } from './horror-books/horror-books.component';
import { FantasyBooksComponent } from './fantasy-books/fantasy-books.component';
import { OscarMoviesComponent } from './oscar-movies/oscar-movies.component';
import { EuroMoviesComponent } from './euro-movies/euro-movies.component';
import { ActionMoviesComponent } from './action-movies/action-movies.component';
import { OtherMoviesComponent } from './other-movies/other-movies.component';
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './admin.guard';
import { BandComponent } from './band/band.component';

const routes: Routes = [
  { path: 'bands/:id', component: BandComponent },
  { 
    path: 'books', 
    // component: BooksComponent,
    children: [
      { path: 'scifi', component: ScifiBooksComponent },
      { path: 'fantasy', component: FantasyBooksComponent },
      { path: 'horror', component: HorrorBooksComponent },
      { path: '**', component: OtherBooksComponent }
    ]
  },
  { 
    path: 'movies', 
    // component: BooksComponent,
    children: [
      { path: 'oscars', component: OscarMoviesComponent },
      { path: 'euro', component: EuroMoviesComponent },
      { path: 'action', component: ActionMoviesComponent },
      { path: '**', component: OtherMoviesComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      adminGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
