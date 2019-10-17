import { Injectable } from '@angular/core';
import { MOVIES } from './../model/movies';

@Injectable()
export class MovieService {
    constructor() {}
    getMovies() {
        return MOVIES;
    }
} // class