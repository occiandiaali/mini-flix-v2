// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// @Injectable()
// export class DataService {

//   constructor() { }

// }

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class DataService {
    
    private favCount = new Subject<number>();

    fav$ = this.favCount.asObservable();

    constructor() {}
 
    addToFavs(favNum: number) {
      this.favCount.next(favNum++);
      console.log(favNum);
    }
}