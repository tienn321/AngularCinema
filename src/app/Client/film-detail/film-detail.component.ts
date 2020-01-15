import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Film } from 'src/app/_core/Models/Film';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
  
export class FilmDetailComponent implements OnInit, OnDestroy  {
  subParam: Subscription
  subService: Subscription;
  subService2: Subscription;
  filmDetail: Film;
  filmDetailTrailer: any;
  filmRecommendArr: Film[] = [];

  constructor(
    private avtRoute: ActivatedRoute,
    private filmService: FilmService,
    private titlePage: Title,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    
    this.avtRoute.params.subscribe((params) => {
      this.getFilmInfo(params['idFilm'])
      console.log('params ->', params['idFilm'])
    })

    this.subService2 = this.filmService.getNoOfFilms(1,18).subscribe(
      (data: any) => {
        this.filmRecommendArr = data.items;
        //console.log('filmdetail list films', this.filmRecommendArr)
      }, error => { console.log(error.error) }
    )
  }
  ngOnDestroy() {
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
    if (this.subService) {
      this.subService.unsubscribe();
    }
    if (this.subService2) {
      this.subService2.unsubscribe();
    }
  }

  getFilmInfo(maPhim: number) {
    this.subService = this.filmService.getFilmInDetail(maPhim).subscribe((data) => {
      this.filmDetail = data;
      console.log('film detail nhan vao', this.filmDetail)
      this.titlePage.setTitle(this.filmDetail.tenPhim)
    }, error => { console.log(error.error) }
    )
  }

}
