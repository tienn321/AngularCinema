import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service';
import { Film } from '../../../_core/Models/Film';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  subService: Subscription;
  filmArr: Film[] = [];
  filmHighlighted:any = {};

  constructor(private filmService:FilmService) {
    
  }
  
  getActiveFilm() {
    
  }

  activeFilm(idx:number){
    this.filmHighlighted = this.filmArr[idx]
    //console.log('object filmHighlighted', this.filmHighlighted)
  }

  ngOnInit() {
    this.subService = this.filmService.getNoOfFilms(1,5).subscribe(
      (data: any) => {
        this.filmArr = data.items;
        //console.log('slider list films', this.filmArr)
      }, error => { console.log(error.error) }
    )
  }
  ngOnDestroy() {
    if (this.subService) {
      this.subService.unsubscribe();
    }
  }

}
