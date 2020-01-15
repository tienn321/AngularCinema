import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimesMovieComponent } from './showtimes-movie.component';

describe('ShowtimesMovieComponent', () => {
  let component: ShowtimesMovieComponent;
  let fixture: ComponentFixture<ShowtimesMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimesMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimesMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
