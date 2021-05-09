import { TestBed } from '@angular/core/testing';

import { NgOneTapService } from './ng-google-one-tap.service';

describe('NgGoogleOneTapService', () => {
  let service: NgOneTapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgOneTapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
