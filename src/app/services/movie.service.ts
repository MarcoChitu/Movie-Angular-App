import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { AppConfig, AppDB } from '../app.config';
import { AppInterface } from '../app.config.interferance';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = environment.theMovieDBApi;
    this.language = 'en-US';
    this.region = 'US'
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.language}&region=${this.region}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // searchMovies(query: string): Observable<any> {
  //   const url = `${AppDB.apiEndpoint}/search/movie?api_key=${AppDB.apiKey}&query=${encodeURIComponent(query)}`;
  //   return this.http.get<any>(url);
  // }
  
  searchMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }
  // searchMovies(searchStr: string, page: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${this.language}&region=${this.region}`)
  // }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error has occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Server returned code ${error.status}, message was: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
