import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserLogin, UserLoginResult, UserTypes } from '../Models/User';
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

  public getUserTypes(): Observable<UserTypes[]> {
    let observable: Observable<any> = this._http.get(api.userManagement.getUserTypes)
    return observable;
  } 

  public createNewUser(newUser: User): Observable<any> {
    let header = new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem("accessToken") });
    // header.set("Content-Type", "application/json; charset=utf-8");
    let observable: Observable<any> = this._http.post(api.userManagement.createNewUser, newUser, { headers: header, responseType: 'json' });
    return observable;  
  }
  
  //findUser
  public findUser(tuKhoa: string): Observable<User[]> {
    let observable: Observable<any> = this._http.get(api.userManagement.findUser(tuKhoa))
    return observable;
  } 

  public deleteUser(taiKhoan: string): Observable<any> {
    //token here
    let header: HttpHeaders = new HttpHeaders(
      { Authorization: 'Bearer ' + localStorage.getItem("accessToken") });

    let observable: Observable<any> = this._http.delete(api.userManagement.deleteUser(taiKhoan), { headers: header, responseType: 'text' });
    return observable;
  }

  public updateUser(userUpdate:User): Observable<any> {
    let header: HttpHeaders = new HttpHeaders(
      { Authorization: 'Bearer ' + localStorage.getItem("accessToken") });
    
    let observable: Observable<any> = this._http.put(api.userManagement.updateUser, userUpdate,{ headers: header, responseType: 'text' })
    return observable;
  }

}
