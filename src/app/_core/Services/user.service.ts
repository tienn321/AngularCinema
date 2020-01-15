import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLogin, UserLoginResult } from '../Models/User';
import { api } from '../Config/ConfigSetting';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  //calling api service below
  public logIn(userLogin: UserLogin): Observable<any> {
    //Định dạng dữ liệu gửi đi json 
    let header = new HttpHeaders();
    header.set("Content-Type", "application/json; charset=utf-8");
    let observable: Observable<any> = this._http.post(api.userManagement.userLogin, userLogin, { headers: header, responseType: 'json' });
    return observable;    
  }
  public register(newUser: User): Observable<any> {
    
    let header = new HttpHeaders();
    header.set("Content-Type", "application/json; charset=utf-8");
    let observable: Observable<any> = this._http.post(api.userManagement.userRegister, newUser, { headers: header, responseType: 'json' });
    return observable;    
  }


}
