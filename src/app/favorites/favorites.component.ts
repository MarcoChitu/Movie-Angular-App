import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: Movie[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoriteMovies = this.favoritesService.getFavorites();
  }

  removeFromFavorites(movie: any) {
    this.favoritesService.removeFromFavorites(movie);
    this.favoriteMovies = this.favoritesService.getFavorites();
  }

  getMovieImageUrl(movie: Movie): string {
    const imageUrlBase = "https://image.tmdb.org/t/p/w500";
    return `${imageUrlBase}${movie.poster_path}`;
  }
}

