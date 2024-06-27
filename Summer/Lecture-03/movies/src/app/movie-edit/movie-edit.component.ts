import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/client';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})
export class MovieEditComponent implements OnInit {

  id: number = 0;
  movie: Movie | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = Number(id);
      this.loadMovieData();
    });
  }

  loadMovieData() {
    this.movieService.getMovie(this.id).subscribe(movie => {
      this.movie = movie;
    });
  }

  saveMovie() {
    if (this.movie) {
      this.movieService.updateMovie(this.movie).subscribe((data) => {
        this.router.navigate(['/movies']);
      });
    }
  }
}
