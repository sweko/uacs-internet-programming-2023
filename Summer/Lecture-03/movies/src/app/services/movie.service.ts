import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResponse } from '../models/server';
import { fromMovie, toMovie } from '../models/mappings';
import { from, map, tap } from 'rxjs';
import { Movie } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMovies() {
    const url = `${this.baseUrl}/movies`;
    const movies = this.http.get<MovieResponse[]>(url).pipe(
      // tap(movieResponses => console.table(movieResponses)),
      map(movieResponses => movieResponses.map(toMovie))
    );
    return movies;
  }

  getMovie(id: number) {
    const url = `${this.baseUrl}/movies/${id}`;
    const movie = this.http.get<MovieResponse>(url).pipe(
      map(toMovie)
    );
    return movie;
  }

  updateMovie(movie: Movie) {
    const url = `${this.baseUrl}/movies/${movie.id}`;
    const movieResponse = fromMovie(movie);
    return this.http.put(url, movieResponse);
  }

}
