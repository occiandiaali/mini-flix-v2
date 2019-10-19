import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//USING A SERVICE
import { MovieService } from './../../services/movie.service';
import { Movie } from 'src/app/model/movies';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  movies: Movie[];

  constructor(private movieSVC: MovieService, private router: Router) { 
    this.movies = movieSVC.getMovies();
  }

  ngOnInit() {
  }

} // class
