import { Component, OnInit } from '@angular/core';
import { Movie } from './../model/movies';
import { Router } from '@angular/router';

//USING A SERVICE
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [ MovieService ]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  constructor(movieService: MovieService) { 
    this.movies = movieService.getMovies();
  }

  ngOnInit() {
  }

} // class
