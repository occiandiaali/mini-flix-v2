import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs';

// USING A SERVICE
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit, OnDestroy {
  @Input() count: number;
  subscription: Subscription;

  //num: number = 0;
  // constructor(public dataService: DataService) { 
  //   this.subscription = dataService.fav$.subscribe(n => {
  //     this.num = n;
  //     console.log(this.num);
  //   });
  // }

  constructor(public dataService: DataService) {
    this.subscription = dataService.fav$.subscribe(c => {
      this.count = c;
    });
  }



  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


} // class
