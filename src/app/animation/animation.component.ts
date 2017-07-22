import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('animateInOut', [
      state('in', style({
      })),
      // state('in', style({
      //   transform: 'height: 100%'
      // })),
      state('out', style({
        transform: 'max-height: 0px'
      })),
      transition('in <=> out', animate('600ms ease-in')),
      transition('void <=> any', animate('600ms ease-in'))
    ]),
  ]
})
export class AnimationComponent implements OnInit {

  allPhotos: Array<any>;
  photos: Array<any>;
  wut: String = 'in';

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(data => {
        this.allPhotos = data.slice(0, 20);
        this.photos = data.slice(0, 3);
      })
      ;
  }

  ngOnInit() {
  }

  animateMe() {
    this.wut = this.wut === 'in' ? 'out' : 'in';
  }

  remove(index: number) {
    this.photos = [...this.photos.slice(0, index), ...this.photos.slice(index + 1)];
  }

  add() {
    this.photos.push(this.allPhotos[this.photos.length]);
  }

  reset() {
    this.photos = this.allPhotos.slice(0, 3);
  }

}
