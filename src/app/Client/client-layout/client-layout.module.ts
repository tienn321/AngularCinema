import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; //thư viện routing trong angular
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from '../homepage/homepage.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { SliderComponent } from '../homepage/slider/slider.component';
import { SliderItemComponent } from '../homepage/slider/slider-item/slider-item.component';
//import { FilmsComponent } from '../homepage/films/films.component';
import { FilmDetailComponent } from '../film-detail/film-detail.component';
import { ShowtimesByCinemaComponent } from '../homepage/showtimes-by-cinema/showtimes-by-cinema.component';
import { ShowtimesMovieComponent } from '../homepage/showtimes-by-cinema/showtimes-movie/showtimes-movie.component';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { CarouselFilmComponent } from '../carousel-film/carousel-film.component';
import { FilmShowtimesComponent } from '../film-detail/film-showtimes/film-showtimes.component';
import { NgxPaginationModule } from "ngx-pagination";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ModalTrailerComponent } from '../carousel-film/modal-trailer/modal-trailer.component';
import { SearchComponent } from '../search/search.component';
import { NewsComponent } from '../homepage/news/news.component';
//import { Page403Component } from '../page403/page403.component';


//khi gõ localhost4200/home => sẽ load ra module này
//'': mặc định load ra ClientLayoutComponent
const clientRoutes: Routes = [
  {  path: '', component: ClientLayoutComponent, children: [
    { path: '', component: HomepageComponent },
    { path: 'detail/:idFilm', component: FilmDetailComponent },
    { path: 'search-result/:filmName', component: SearchComponent },
    
  ] }
  
]


@NgModule({
  declarations: [
    HomepageComponent,
    ClientLayoutComponent,
    SliderComponent,
    SliderItemComponent,
    
    FilmDetailComponent,
    ShowtimesByCinemaComponent,
    ShowtimesMovieComponent,
    LoginRegisterComponent,
    CarouselFilmComponent,
    FilmShowtimesComponent,
    ModalTrailerComponent,
    SearchComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
    FormsModule,
    NgxPaginationModule,
    CarouselModule
  ],
  exports: [LoginRegisterComponent]
})
export class ClientLayoutModule {}
