import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Film } from 'src/app/_core/Models/Film';
import { FilmShowtimes } from 'src/app/_core/Models/FilmShowtimes';
import { FilmService } from 'src/app/_core/Services/film.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-showtimes-movie',
  templateUrl: './showtimes-movie.component.html',
  styleUrls: ['./showtimes-movie.component.scss']
})
export class ShowtimesMovieComponent implements OnInit, OnDestroy {
  @Input() filmInput: number;
  @Input() cineInput: string;
  @Input() cineGroupInput: string;
  
  //filmShowtimes: any;
  cardFilm: FilmShowtimes; // <----- check lai cho nay
  subService: Subscription;
  arrLichChieu: any[];

  //sys methods
  constructor(
    private filmService: FilmService) { }

  ngOnInit() {
    this.getCardFilm(this.filmInput);
    
  }
  ngOnDestroy() {
    if (this.subService) {
      this.subService.unsubscribe();
    }
  }
  

  getCardFilm(maPhim: number) {
    this.subService = this.filmService.getFilmInDetail(maPhim).subscribe((data:FilmShowtimes) => {
      this.cardFilm = data;
      //console.log('lay lich chieu cardfilm', this.cardFilm)
    }, error => { console.log(error.error) }
    )
  }

  ratingStarts(star: number) {
    return Array(star)
  }
    

}
