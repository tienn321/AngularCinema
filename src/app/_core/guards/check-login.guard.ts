import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private router:Router) {  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate(): boolean {
    //Nếu đăng nhập rồi => localstorage userlogin có giá trị => cho phép vào
    if (localStorage.getItem('userLogin')) {
      return true;
    }
    //Nếu chưa đăng nhập => xuất thông báo và chuyển hướng về trang đăng nhập đồng thời không cho vào trang đó
    //alert('You must log in to continue booking!!!');
    this.router.navigate(['page403']);
    return false;
  }
  
}
