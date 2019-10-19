import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './../model/movies';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(movies: Movie[], searchText: string): any[] {
    if(!movies) return [];
    if(!searchText) return movies;
searchText = searchText.toLowerCase();
return movies.filter( m => {
      return m.title.toLowerCase().includes(searchText);
    });
   }
}