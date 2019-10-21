import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from './../../model/movies';
import { ActivatedRoute } from '@angular/router';

// USING A SERVICE INSTEAD
import { MovieService } from '../../services/movie.service';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css'],
  providers: [MovieService]
})
export class DetailMovieComponent implements OnInit, OnDestroy {

  private id: number;
  movies: Movie[];
  private sub: any;
  heart: boolean = false;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { 
    this.movies = movieService.getMovies();
  }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

} // class
