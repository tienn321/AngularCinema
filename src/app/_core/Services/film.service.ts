import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { api } from '../Config/ConfigSetting';
import { Film } from '../Models/Film';
import { Cinema } from '../Models/Cinema';
import { FilmShowtimes } from '../Models/FilmShowtimes';
import { TicketsToBeBooked } from 'src/app/_core/Models/TicketsToBeBooked';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private _http: HttpClient) { }

  //calling api service 4film here
  public getAllOfFilms(): Observable<Film[]> {
    let observable: Observable<any> = this._http.get(api.filmManagement.getAllFilms);
    return observable;
  }


  public getNoOfFilms(soTrang:number, soPhimLay:number): Observable<Film[]> { let observable: Observable<any> = this._http.get(api.filmManagement.getFilmsByPagination(soTrang, soPhimLay));
    return observable;
  }

  public getFilmInDetail(maPhim: number): Observable<FilmShowtimes> {
    let observable: Observable<any> = this._http.get(api.filmManagement.getFilmDetail(maPhim));
    return observable;
  }
  
  public getFilmSearch(tenPhim: string): Observable<Film> {
    let observable: Observable<any> = this._http.get(api.filmManagement.getFilmSearch(tenPhim));
    return observable;
  }

  public getListCinemaShowtimes(): Observable<Cinema[]> {
    let observable: Observable<any> = this._http.get(api.filmManagement.getCinemaShowtimes);
    return observable;
  }

  public getListCinemas(): Observable<Cinema[]> {
    let observable: Observable<any> = this._http.get(api.filmManagement.getCinemas);
    return observable;
  }

  public getBookingTicket(maLichChieu: number): Observable<any>{
    let observable: Observable<any> = this._http.get(api.filmManagement.getBookingTicket(maLichChieu));
    return observable;
  }

  public bookTheTickets(tickets2Book: TicketsToBeBooked): Observable<any> { 
    //add token
    let header: HttpHeaders = new HttpHeaders(
      { Authorization: 'Bearer ' + localStorage.getItem("accessToken") });
    
    let observable: Observable<any> = this._http.post(api.filmManagement.bookTheTickets, tickets2Book, { headers: header, responseType: 'text' });
    return observable;
  }

  public deleteFilm(maPhim: number): Observable<any> {
    //token here
    let header: HttpHeaders = new HttpHeaders(
      { Authorization: 'Bearer ' + localStorage.getItem("accessToken") });
    
    let observable: Observable<any> = this._http.delete(api.filmManagement.deleteFilm(maPhim), { headers: header, responseType: 'text' });
    return observable;
    
  }


}
