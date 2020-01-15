import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Film } from 'src/app/_core/Models/Film';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  //props here
  subParam: Subscription
  subService: Subscription;
  subService2: Subscription;
  filmResultArr: Film[] = [];
  filmRecommendArr: Film[] = [];
  constructor(
    private avtRoute: ActivatedRoute,
    private filmService: FilmService,
    private titlePage: Title,
  ) { }

  ngOnInit() {
    this.titlePage.setTitle('Search Result')

    this.avtRoute.params.subscribe((params) => {
      this.getResult(params['filmName'])
      //console.log('params ->', params['filmName'])
    })

    this.subService2 = this.filmService.getNoOfFilms(1, 15).subscribe(
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

  getResult(tenPhim:string) {
    this.subService = this.filmService.getFilmSearch(tenPhim).subscribe((data:any) => {
      this.filmResultArr = data;
      //console.log('kq search', this.filmResultArr)
    }, error => { console.log(error.error)
    })
  }

}
