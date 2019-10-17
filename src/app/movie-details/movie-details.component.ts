import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from './../model/movies';
import { ActivatedRoute } from '@angular/router';

//USING A SERVICE
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  private id: number;
  movies: Movie[];
  private sub: any;

  movieIdSnapshot: number;

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
