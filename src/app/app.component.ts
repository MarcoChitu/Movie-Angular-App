import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from './models/movie.model';
import { MovieService } from './services/movie.service';
import { FavoritesService } from './services/favorites.service';
import { FooterComponent } from './footer/footer.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FooterComponent, MovieGridComponent, SearchComponent, CommonModule],
})
export class AppComponent  implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  title = 'Movie Lobby Application';
  movies: Movie[] = [];
  favorites: Movie[] = []; 
  isFavoriteView: boolean = false;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  
  constructor(
    private movieService: MovieService,
    private favoritesService: FavoritesService
  ) {}


  ngOnInit(): void {
    this.loadPopularMovies();
    this.loadFavorites();
  }

  // Load popular movies
  loadPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (data) => {
        this.movies = data.results;
      },
      error: (error) => {
        console.error('There was an error fetching popular movies!', error);
      }
    });
  }

  // Load favorites
  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  // Updating the movie list from search component
  onMoviesUpdate(movies: Movie[]): void {
    this.movies = movies;
  }

  // Toggle favorite for a movie
  toggleFavorite(movie: Movie): void {
    this.favoritesService.isFavorite(movie) ? 
      this.favoritesService.removeFromFavorites(movie) : 
      this.favoritesService.addToFavorites(movie);

    // Reload favorites to reflect changes
    this.loadFavorites();
  }

  // Switch to favorites view
  showFavorites(): void {
    this.isFavoriteView = true;
    this.loadFavorites();
  }

  // Switch to home view
  showHome(): void {
    this.isFavoriteView = false;
    this.loadPopularMovies();
  }
}
