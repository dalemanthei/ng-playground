import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { GiphyService } from './giphy.service';
import { MdInputContainer } from '@angular/material';
import { MaterialModule } from '@angular/material';

import 'rxjs/Rx';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  title: String = 'Searchbox';
  searchControl = new FormControl();
  delay = 400;
  resultSet: Array<any>;

  // giphys$: Observable<{}> = this.giphyService.giphys$;
  // giphys$: Observable<Object[]> = this.store.select('giphys');

  constructor(private giphyService: GiphyService) {}

  ngOnInit() {
    // this.giphys$ = this.giphyService.giphys$;
    // this.giphyService.searchLoad('foo');

    const elt = document.querySelector('#giphySearch');
    const keyup$ = Observable.fromEvent(elt, 'keyup');

    keyup$
      .debounce(() => Observable.interval(this.delay))
      .distinctUntilChanged()
      .map(k =>
        this.giphyService.search(this.searchControl.value).takeUntil(keyup$)
      )
      .concatAll()
      .subscribe(searchResults => (this.resultSet = searchResults));
  }
}
