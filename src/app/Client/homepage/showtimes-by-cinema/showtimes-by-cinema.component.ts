import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service';
import { Subscription } from 'rxjs';
import { Film } from '../../../_core/Models/Film';
import { Cinema } from '../../../_core/Models/Cinema';


@Component({
  selector: 'app-showtimes-by-cinema',
  templateUrl: './showtimes-by-cinema.component.html',
  styleUrls: ['./showtimes-by-cinema.component.scss']
})
export class ShowtimesByCinemaComponent implements OnInit, OnDestroy {
  subService: Subscription;
  cinemaShowtimesArr: Cinema[] = [];
  
  subServiceCinemas: Subscription;
  cinemasArr: Cinema[] = []

  cineGroupShowtimes: string = '';

  public tabChosen: number = 0;
  constructor(private filmService:FilmService) { }

  ngOnInit() {
    this.subService = this.filmService.getListCinemaShowtimes().subscribe(
      (data: any) => {
        this.cinemaShowtimesArr = data;
        console.log('get list cinemas', this.cinemaShowtimesArr)
      }, error => { console.log(error.error) }
    )

    this.subServiceCinemas = this.filmService.getListCinemas().subscribe(
      (data: any) => {
        this.cinemasArr = data;
        console.log('get ds cinemas', this.cinemasArr)
      }, error => { console.log(error.error) }
    )

  }
  ngOnDestroy() {
    if (this.subService) {
      this.subService.unsubscribe();
    }
    if (this.subServiceCinemas) {
      this.subServiceCinemas.unsubscribe();
    }
  }

  //other methods
  TabActive(index:number) {
    this.tabChosen = index;
  }
  //getCinemas

  displayShowtimes(maRapActive: string) {
    this.cineGroupShowtimes = maRapActive;
  }

}
