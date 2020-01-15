import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service';
import { Film } from 'src/app/_core/Models/Film';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: "app-carousel-film",
  templateUrl: "./carousel-film.component.html",
  styleUrls: ["./carousel-film.component.scss"]
})
export class CarouselFilmComponent implements OnInit, OnDestroy {
  //props below
  subService: Subscription;
  filmsArr: Film[] = [];
  filmRating: any[] = [];
  trailerWatching: string = '';
  // $(window).on('load',function() {
  //   carouselSlideOptions: any = {
  //     items: 5,
  //     dots: false,
  //     loop: true,
  //     navSpeed: 700,
  //     nav: false,
  //     mouseDrag: true,
  //     touchDrag: true,
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       768: {
  //         items: 3
  //       },
  //       940: {
  //         items: 5
  //       }
  //     }
  //   };
  // }, 1000);

  carouselSlideOptions: any = {
    items: 5,
    dots: false,
    loop: true,
    navSpeed: 700,
    nav: false,
    mouseDrag: true,
    touchDrag: true,
    itemsDesktop: [640, 5],
itemsDesktopSmall: [414, 2]
    // responsive: { 
    //   0: {
    //     items:1
    //   },
    //   768: {
    //     items: 3
    //   },
    //   940: {
    //     items: 5
    //   }
    // }
  };

  constructor(private filmService: FilmService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getAllFilms();
    // this.FilmRating();
    // console.log("object a", this.filmRating);
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
        console.log("lay ds film", this.filmsArr);
      },
      error => {
        console.log(error.error);
      }
    );
  }

  ratingStars(star: number) {
    return Array(star)
  }
  
  WatchTrailer(trailer:string) {
    this.trailerWatching = trailer;
  }

}
