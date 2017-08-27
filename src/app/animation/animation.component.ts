import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';
import { fadeAnimation, listAnimation } from './animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: listAnimation({})
})
export class AnimationComponent implements OnInit {
  allBeers: Array<any>;
  beers: Array<any>;

  constructor(private http: Http) {
    this.http
      .get('https://api.punkapi.com/v2/beers?abv_gt=12')
      .do(r => console.log)
      .map(response => response.json())
      .subscribe(data => {
        this.allBeers = data;
        this.beers = data.slice(0, 3);
      });
  }

  ngOnInit() {}

  remove(index: number) {
    // this.photos.splice(index, 1);
    this.beers = [
      ...this.beers.slice(0, index),
      ...this.beers.slice(index + 1)
    ];
  }

  add() {
    // add the next available beer not currently shown to the list
    this.beers.push(this.getBeersNotShown(this.allBeers, this.beers)[0]);
  }

  getBeersNotShown(allBeers: any[], beers: any[]) {
    return allBeers.filter(b => !beers.includes(b));
  }

  reset() {
    this.beers = this.allBeers.slice(0, 3);
  }
}
