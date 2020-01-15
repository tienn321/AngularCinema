import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service';
import { Film } from 'src/app/_core/Models/Film';
import { Subscription } from 'rxjs';
import swal from "sweetalert2";
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit, OnDestroy {
  //props below
  subService: Subscription;
  subServiceDelFilm: Subscription;
  filmsArr: Film[] = [];


  constructor(private filmService: FilmService,) { }

  ngOnInit() {
    this.getAllFilms();
  }
  ngOnDestroy() {
    if (this.subService) {
      this.subService.unsubscribe();
    }
  }

  //other methods below
  getAllFilms() {
    this.subService = this.filmService.getAllOfFilms().subscribe(
      (data: Film[]) => {
        this.filmsArr = data;
        console.log("ds film in ra bang", this.filmsArr);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  DelThisFilm(maPhim: number) {
    console.log('xoa ma phim', maPhim)
    this.subService = this.filmService.getAllOfFilms().subscribe(
      (result: any) => {
        //this.filmsArr = data;
        alert('xoa thanh cong' + result.data)
        console.log("xoa thanh cong");
      },
      error => {
        alert('loi la' + error.error)
        console.log(error.error);
      })
  }

}
