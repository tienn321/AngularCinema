import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimesByCinemaComponent } from './showtimes-by-cinema.component';

describe('ShowtimesByCinemaComponent', () => {
  let component: ShowtimesByCinemaComponent;
  let fixture: ComponentFixture<ShowtimesByCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimesByCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimesByCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
