import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes =  [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieGridComponent }, 
  { path: 'favorites', component: FavoritesComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
