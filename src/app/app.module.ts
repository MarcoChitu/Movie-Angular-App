import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MovieService } from './services/movie.service';
import { FavoritesService } from './services/favorites.service';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    NgModule,
    AppComponent,
    MovieGridComponent,
    SearchComponent,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientTestingModule,
    FavoritesComponent,
    NgModel
  ],
  providers: [MovieService, FavoritesService, HttpClientModule, CommonModule, BrowserModule, FavoritesComponent, NgModel],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }