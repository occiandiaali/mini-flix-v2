import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/signin/signin.component';
import { Error404Component } from './errors/404.components';
import { UserComponent } from './components/user/user.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'detail-movie/:id',
    component: DetailMovieComponent
  },
  {
    path: 'favourites',
    component: FavouriteMoviesComponent
  },
  { path: '',  redirectTo: '/', pathMatch: 'full' },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
