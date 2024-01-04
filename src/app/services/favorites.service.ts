import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  // baseUrl: string;
  // apiKey: string;
  // language: string;
  // region: string;

  private favorites: Movie[] = [];

  // constructor(private http: HttpClient) {
  //   this.baseUrl = 'https://api.themoviedb.org/3/';
  //   this.apiKey = environment.theMovieDBApi;
  //   this.language = 'en-US';
  //   this.region = 'US'
  // }

  addToFavorites(movie: Movie): void {
    if (!this.favorites.some(f => f.id === movie.id)) {
      this.favorites.push(movie);
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
