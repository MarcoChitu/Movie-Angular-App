import { Component, Output, EventEmitter, Injectable, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { FormsModule, NgModel } from '@angular/forms';

// @Injectable()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class SearchComponent implements OnInit{
  searchText: string = '';
  searchTerm: string = '';
  @Output() searchChange = new EventEmitter<string>();
  @Output() clearSearchEvent = new EventEmitter<void>();
  @Output() updateMovies = new EventEmitter<any[]>();
  

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    
  }

  // onSearchChange(value: string): void {
  //   this.searchText = value; 
  //   this.searchChange.emit(this.searchText); 
  // }

  onSearchChange(): void {
    if (this.searchTerm.trim()) {
      this.movieService.searchMovies(this.searchTerm.trim()).subscribe({
        next: (response) => {
          this.updateMovies.emit(response.results); // Emit the search results
        },
        error: (error) => {
          console.error('There was an error fetching the search results:', error);
        }
      });
    } else {
      this.updateMovies.emit([]); 
    }
  }

  // onSearchChange(): void {
  //   if (this.searchTerm.trim()) {
  //     this.movieService.searchMovies(this.searchTerm.trim()).subscribe({
  //       next: (data) => {
  //       },
  //       error: (error) => {
  //         console.error('There was an error!', error);
  //       }
  //     });
  //   }
  // }

  resetSearch() {
    this.searchText = '';
    this.searchChange.emit(this.searchText);
    this.clearSearchEvent.emit();
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
