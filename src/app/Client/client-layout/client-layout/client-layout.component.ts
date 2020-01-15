import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_core/Models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {
  userPro5: User = null;
  //searchKw: string = '[(ngModel)]';
  constructor(private router: Router) { }

  ngOnInit() {
    this.CheckUserLogin();
  }

  CheckUserLogin() {
    if (localStorage.getItem('userLogin')) {
      this.userPro5 = JSON.parse(localStorage.getItem('userLogin'));
      //console.log('object userPro5', userPro5)
      //return true;
    }
  }

  LogOut() {
    if (localStorage.getItem('userLogin')) { 
      localStorage.removeItem('userLogin');
      localStorage.removeItem('accessToken');
    }
    setTimeout(() => { location.reload(); }, 1000)
  }
  
  onActivate(event) {
    window.scroll(0, 0);
    document.body.scrollTop = 0;
  }

  SearchFilm(keyword: string) {
    keyword.trim();
    this.router.navigate([`/search-result/${keyword}`]);
  }
}
