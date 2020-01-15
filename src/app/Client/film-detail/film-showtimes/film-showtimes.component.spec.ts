import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowtimesComponent } from './film-showtimes.component';

describe('FilmShowtimesComponent', () => {
  let component: FilmShowtimesComponent;
  let fixture: ComponentFixture<FilmShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
