import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { ScifiBooksComponent } from './scifi-books/scifi-books.component';
import { FantasyBooksComponent } from './fantasy-books/fantasy-books.component';
import { HorrorBooksComponent } from './horror-books/horror-books.component';
import { OtherBooksComponent } from './other-books/other-books.component';
import { OscarMoviesComponent } from './oscar-movies/oscar-movies.component';
import { EuroMoviesComponent } from './euro-movies/euro-movies.component';
import { HorrorMoviesComponent } from './horror-movies/horror-movies.component';
import { OtherMoviesComponent } from './other-movies/other-movies.component';
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './admin.guard';
import { bookGuard } from './book.guard';
import { ScifiBookComponent } from './scifi-book/scifi-book.component';
import { NewScifiBookComponent } from './new-scifi-book/new-scifi-book.component';
import { NewFantasyBookComponent } from './new-fantasy-book/new-fantasy-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  // { path: 'books/scifi', component: ScifiBooksComponent},
  // { path: 'books/fantasy', component: FantasyBooksComponent},
  // { path: 'books/horror', component: HorrorBooksComponent},
  { 
    path: 'books',
    canActivateChild: [bookGuard],
    children: [
      { path: 'scifi', 
        children: [
          { path: '', component: ScifiBooksComponent},
          { path: 'new', component: NewScifiBookComponent},
          { path: ':id', component: ScifiBookComponent}
        ]
      },

      { path: 'fantasy', component: FantasyBooksComponent},
      { path: 'fantasy/new', component: NewFantasyBookComponent},

      { path: 'horror', component: HorrorBooksComponent},
      { path: '**', component: OtherBooksComponent},
    ]
  },
  { 
    path: 'movies',
    children: [
      { path: 'oscar', component: OscarMoviesComponent},
      { path: 'euro', component: EuroMoviesComponent},
      { path: 'horror', component: HorrorMoviesComponent},
      { path: '**', component: OtherMoviesComponent},
    ]
  },
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard]},
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
