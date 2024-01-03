import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  private favorites: Movie[] = [];

addFavorite(movie: Movie) {
  // Add movie to favorites
}

removeFavorite(movie: Movie) {
  // Remove movie from favorites
}

getFavorites(): Movie[] {
  return this.favorites;
}

}
