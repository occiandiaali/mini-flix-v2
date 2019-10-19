import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/signin/signin.component';
import { Error404Component } from './errors/404.components';

import { MovieService } from './services/movie.service';
import { UserComponent } from './components/user/user.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { MovieSelectedPipe } from './pipes/movie-selected.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    AboutComponent,
    SigninComponent,
    Error404Component,
    UserComponent,
    FilterPipe,
    DetailMovieComponent,
    MovieSelectedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
