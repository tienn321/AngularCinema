import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_core/Models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  userPro5: User;
  constructor(private router: Router) { }

  ngOnInit() {
    this.CheckLogin();
  }

  CheckLogin() {
    if (localStorage.getItem('userLogin')) {
      this.userPro5 = JSON.parse(localStorage.getItem('userLogin'));
      
    }
  }
  LogOut() {
    if (localStorage.getItem('userLogin')) {
      localStorage.removeItem('userLogin');
      localStorage.removeItem('accessToken');
    }
    this.router.navigate(['/'])
    //setTimeout(() => { location.reload(); }, 1000)
  }
}
