import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingPageComponent } from './Client/booking-page/booking-page.component';
import { SeatComponent } from './Client/booking-page/seat/seat.component';
//import { FilmShowtimesComponent } from './Client/film-detail/film-showtimes/film-showtimes.component';
//import { OwlModule } from 'ngx-owl-carousel'; 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Page404Component } from './Client/page404/page404.component';
import { Page403Component } from './Client/page403/page403.component';
import { ClientLayoutModule } from './Client/client-layout/client-layout.module';
import { AdminModule } from './Admin/admin/admin.module';
// import { NewsComponent } from './Client/homepage/news/news.component';
//import { SearchComponent } from './Client/search/search.component';



@NgModule({
  declarations: [AppComponent, BookingPageComponent, SeatComponent, Page404Component, Page403Component  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,ClientLayoutModule,AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
