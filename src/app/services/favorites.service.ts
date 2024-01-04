import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  private favorites: Movie[] = [];

  addToFavorites(movie: Movie): void {
    if (!this.favorites.some(f => f.id === movie.id)) {
      this.favorites.push(movie);
      // console.log('Favorites: ' + this.favorites)
    }
  }

  removeFromFavorites(movie: Movie): void {
    this.favorites = this.favorites.filter(f => f.id !== movie.id);
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites.some(f => f.id === movie.id);
  }

  getFavorites(): Movie[] {
    return this.favorites;
  }
}
