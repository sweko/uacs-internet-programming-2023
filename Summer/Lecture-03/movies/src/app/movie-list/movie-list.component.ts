import { Component, Inject, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'desc';

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      this.sortById();
    });
  }

  deleteMovie(id: number) {
    console.log('Deleting movie with id: ' + id);
  }

  editMovie(id: number) {
    this.router.navigate(['movies', id, 'edit']);
  }

  showGenres(genres: string[]) {
    return genres.join(' / ');
  }

  showOscars(oscars: any) {
    return "TBD";
  }

  sortById() {
    if (this.sortField === 'id') {
      // reverse the order
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc') {
        this.movies.sort((a, b) => a.id - b.id);
      } else {
        this.movies.sort((a, b) => b.id - a.id);
      }
    } else {
      this.movies.sort((a, b) => a.id - b.id);
      this.sortField = 'id';
      this.sortDirection = 'asc';
    }
  }

  sortByTitle() {
    if (this.sortField === 'title') {
      // reverse the order
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc') {
        this.movies.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        this.movies.sort((a, b) => b.title.localeCompare(a.title));
      }
    } else {
      this.movies.sort((a, b) => a.title.localeCompare(b.title));
      this.sortField = 'title';
      this.sortDirection = 'asc';
    }
  }

  sortByGenre() {
    if (this.sortField === 'genre') {
      // reverse the order
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      if (this.sortDirection === 'asc') {
        this.movies.sort((a, b) => this.compareGenres(a.genre, b.genre));
      } else {
        this.movies.sort((a, b) => this.compareGenres(b.genre, a.genre));
      }
    } else {
      this.movies.sort((a, b) => this.compareGenres(a.genre, b.genre));
      this.sortField = 'genre';
      this.sortDirection = 'asc';
    }
  }

  compareGenres(first: string[], second: string[]) {
    const flength = first.length;
    const slength = second.length;
    if (flength !== slength) {
      return flength - slength;
    }
    const fsorted = first.slice().sort();
    const ssorted = second.slice().sort();
    for (let i = 0; i < flength; i++) {
      if (fsorted[i] !== ssorted[i]) {
        return fsorted[i].localeCompare(ssorted[i]);
      }
    }
    return 0;
  }


}
