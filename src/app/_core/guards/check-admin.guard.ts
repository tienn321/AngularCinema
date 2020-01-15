import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {
  constructor(private router: Router){}
  
  canActivate(): boolean {
    //Nếu đăng nhập rồi => localstorage userlogin có giá trị => cho phép vào
    let acc = JSON.parse(localStorage.getItem('userLogin'))

    if (acc) {
      //let acc = JSON.parse(localStorage.getItem('userLogin'))
      if (acc.maLoaiNguoiDung == 'QuanTri') {
         return true;
        }
    }
    //Nếu chưa đăng nhập => xuất thông báo và chuyển hướng về trang chủ đồng thời không cho vào trang đó
    alert('Only admin can access this site. Happy hackiiiiiiiiiiiiiing!!!');
    this.router.navigate(['home']);
    return false;
  }
}
