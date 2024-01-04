import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';
import { FavoritesService } from '../services/favorites.service'; 
import { NgForOf, NgIf} from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ]
})
export class MovieGridComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private favoritesService: FavoritesService ) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (response) => {
        // console.log('Movies fetched:', response.results);
        this.movies = response.results; 
        // console.log('Movies: ', this.movies);
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }

  getMovieImageUrl(movie: Movie): string {
    const imageUrlBase = "https://image.tmdb.org/t/p/w500";
    return `${imageUrlBase}${movie.poster_path}`;
  }

  addToFavorites(movie: Movie): void {
    this.favoritesService.addToFavorites(movie);
  }

  toggleFavorite(movie: Movie): void {
    if (this.favoritesService.isFavorite(movie)) {
      this.favoritesService.removeFromFavorites(movie);
    } else {
      this.favoritesService.addToFavorites(movie);
    }
  }
}
