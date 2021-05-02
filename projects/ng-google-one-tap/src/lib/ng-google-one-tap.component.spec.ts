import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGoogleOneTapComponent } from './ng-google-one-tap.component';

describe('NgGoogleOneTapComponent', () => {
  let component: NgGoogleOneTapComponent;
  let fixture: ComponentFixture<NgGoogleOneTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGoogleOneTapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGoogleOneTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
