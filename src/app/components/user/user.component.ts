import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//USING A SERVICE
import { MovieService } from './../../services/movie.service';
import { Movie } from 'src/app/model/movies';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DataService]
})
export class UserComponent implements OnInit {

  movies: Movie[];

  favourite: number = 0;

  constructor(private movieSVC: MovieService, private dataService: DataService, private router: Router) { 
    this.movies = movieSVC.getMovies();
  }

  addFav() {
    this.dataService.addToFavs(this.favourite++);
    console.log(`Favourites: ${this.favourite}`);
  }

  ngOnInit() {
    
  }

} // class
