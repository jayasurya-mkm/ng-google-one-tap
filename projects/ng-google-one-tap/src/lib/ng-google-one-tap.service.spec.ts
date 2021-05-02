import { TestBed } from '@angular/core/testing';

import { NgGoogleOneTapService } from './ng-google-one-tap.service';

describe('NgGoogleOneTapService', () => {
  let service: NgGoogleOneTapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGoogleOneTapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
