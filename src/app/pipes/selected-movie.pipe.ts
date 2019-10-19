import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './../model/movies';
@Pipe({
    name: 'selectedMovie'
})
export class SelectedMoviePipe implements PipeTransform {

    // transform(allMovies: Movie[], movieId: number): any {
    //     if (!allMovies) return [];
    //     if (!movieId) return allMovies;
    //     //if (movieId) {
    //     return allMovies.filter(m => m.id === movieId);
    //    // }
    // }

    // transform(allMovies: Movie[], movieId: number, searchText: string): any[] {
    //     if (!allMovies) return [];
    //     if (!movieId) return allMovies;
        

        
    //     if (movieId) {
    //     return allMovies.filter(m => {
    //         return m.id === movieId;
    //     });
    //     } else if (searchText) {
    //         return allMovies.filter(m => m.title.toLowerCase().includes(searchText));
    //     } 
    // }

    // transform(movies: Movie[], searchText: string, movieId: number): any[] {
    //     if (!movies) return [];
        
    //     if (!searchText) return movies;
        

    //     searchText = searchText.toLowerCase();
        
    //     return movies.filter(m => {
             
    //         return m.id === movieId;
           
    //    });
    // }

    transform(movies: Movie[], searchText: string): any[] {
        if (!movies) return [];
        if (!searchText) return movies;

        //searchText = searchText.toLowerCase();

        return movies.filter(m => {
            return m.title.toLowerCase().includes(searchText);
        });
    }


} // class