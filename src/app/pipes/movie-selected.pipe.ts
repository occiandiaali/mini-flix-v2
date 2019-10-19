import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movies';

@Pipe({
  name: 'movieSelected'
})
export class MovieSelectedPipe implements PipeTransform {

  transform(allMovies: Movie[], movieId?: number): any {
    return allMovies.filter(m => m.id === movieId);
}

}
