import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/signin/signin.component';
import { Error404Component } from './errors/404.components';
import { UserHomeComponent } from './user.home/user.home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SelectedMoviePipe } from './pipes/selected-movie.pipe';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    AboutComponent,
    SigninComponent,
    Error404Component,
    UserHomeComponent,
    MovieListComponent,
    MovieDetailsComponent,
    SelectedMoviePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
