import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './../model/movies';
@Pipe({
    
    name: 'selectedMovie'
})
export class SelectedMoviePipe implements PipeTransform {
    transform(allMovies: Movie[], movieId: number): any {
        return allMovies.filter(m => m.id === movieId);
    }
}