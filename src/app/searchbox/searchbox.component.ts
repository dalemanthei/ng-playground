import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, fromEvent, interval } from 'rxjs';
import { GiphyService } from './giphy.service';
import {
  debounce,
  distinctUntilChanged,
  map,
  concatAll,
  takeUntil
} from 'rxjs/operators';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  title: String = 'Searchbox';
  searchControl = new FormControl();
  delay = 400;
  // resultSet: Array<any>;
  resultSet: any;

  // giphys$: Observable<{}> = this.giphyService.giphys$;
  // giphys$: Observable<Object[]> = this.store.select('giphys');

  constructor(private giphyService: GiphyService) {}

  ngOnInit() {
    // this.giphys$ = this.giphyService.giphys$;
    // this.giphyService.searchLoad('foo');

    const elt = document.querySelector('#giphySearch');
    const keyup$ = fromEvent(elt, 'keyup');

    keyup$
      .pipe(
        debounce(() => interval(this.delay)),
        distinctUntilChanged(),
        map(k =>
          this.giphyService
            .search(this.searchControl.value)
            .pipe(takeUntil(keyup$))
        ),
        concatAll()
      )
      .subscribe(searchResults => (this.resultSet = searchResults));
  }
}
