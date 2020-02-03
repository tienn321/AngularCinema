import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service';
import { Film } from 'src/app/_core/Models/Film';
import { Subscription } from 'rxjs';
import swal from "sweetalert2";
//import { DatePipe } from '@angular/common';
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
  displayModal: string = 'none';
  isSearch: boolean = false;
  filmFindArr: Film[] = [];
  searchKw: string = '';
  subServiceFindFilm: Subscription;
  filmEdit: Film;
  isEditFilm: boolean = false;
  updateSuccess: boolean = false;
  maHienThi: number;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getAllFilms();
  }
  ngOnDestroy() {
    if (this.subService) {
      this.subService.unsubscribe();
    }
    if (this.subServiceDelFilm) {
      this.subServiceDelFilm.unsubscribe();
    }
    if (this.subServiceFindFilm) {
      this.subServiceFindFilm.unsubscribe();
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
    this.subServiceDelFilm = this.filmService.getAllOfFilms().subscribe(
      (result: any) => {
        //this.filmsArr = data;
        alert('xoa thanh cong')
        //console.log("xoa thanh cong");
      },
      error => {
        
        console.log(error.error);
      })
  }
  updateStatus(status: boolean) {
    this.isEditFilm = status;
    this.checkStatusModal(this.isEditFilm);
  }
  checkStatusModal(status: boolean) {
    if (status) {
      this.displayModal = 'block';
    }
    else {
      this.displayModal = 'none';
    }
  }

  findFilm() {
    let keyword = this.searchKw;
    keyword = keyword.trim();
    //keyword = keyword.replace(/\s/g, "");
    console.log('tu khoa la', keyword)
    this.subServiceFindFilm = this.filmService.getFilmSearch(keyword).subscribe((result: any) => {
      this.filmFindArr = result;
      console.log('result find film', this.filmFindArr)
      this.isSearch = true;
    }, error => {
      console.log(error.error);
    })
  }
  EditThisFilm(film: Film) {
    this.filmEdit = film;
    //console.log('film can edit la',film)
    this.isEditFilm = true;
    this.checkStatusModal(this.isEditFilm);
  }

  displayFilmAfterEdit(film:Film) {
    this.searchKw = film.tenPhim;
    this.findFilm();
    this.updateSuccess = true;
    this.maHienThi = film.maPhim;
    setTimeout(() => {
      this.updateSuccess = false;
    }, 3000)
  }


}
