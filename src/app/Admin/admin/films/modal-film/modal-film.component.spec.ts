import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilmComponent } from './modal-film.component';

describe('ModalFilmComponent', () => {
  let component: ModalFilmComponent;
  let fixture: ComponentFixture<ModalFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
