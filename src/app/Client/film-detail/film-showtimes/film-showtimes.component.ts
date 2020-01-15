import { Component, OnInit,Input } from '@angular/core';
import { Film } from 'src/app/_core/Models/Film';

@Component({
  selector: 'app-film-showtimes',
  templateUrl: './film-showtimes.component.html',
  styleUrls: ['./film-showtimes.component.scss']
})
export class FilmShowtimesComponent implements OnInit {

  //props here
  @Input() filmDetailInput: Film;
  constructor() { }

  ngOnInit() {
  }

}
