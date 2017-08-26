/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GiphyService } from './giphy.service';

xdescribe('GiphyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyService]
    });
  });

  it(
    'should ...',
    inject([GiphyService], (service: GiphyService) => {
      expect(service).toBeTruthy();
    })
  );
});
