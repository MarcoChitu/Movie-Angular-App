import { Component, Output, EventEmitter, Injectable, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { FormsModule } from '@angular/forms';

// @Injectable()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
})
export class SearchComponent implements OnInit{
  searchTerm: string = '';
  @Output() updateMovies = new EventEmitter<Movie[]>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    
  }

  onSearchChange(): void {
    if (this.searchTerm.trim()) {
      this.movieService.searchMovies(this.searchTerm.trim()).subscribe({
        next: (data) => {
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    }
  }

  resetSearch(): void {
    this.searchTerm = '';
    this.updateMovies.emit([]);

    // this.movieService.getPopularMovies().subscribe({
    //   next: (data) => {
    //     this.updateMovies.emit(data.results);
    //   },
    //   error: (error) => {
    //     console.error('There was an error resetting the search!', error);
    //   }
    // });
  }

  executeSearch(): void {
    if (this.searchTerm.trim()) {
      this.movieService.searchMovies(this.searchTerm.trim()).subscribe({
        next: (data) => {
          // Handle the results as above
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
    }
  }
}
