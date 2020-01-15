import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page403',
  templateUrl: './page403.component.html',
  styleUrls: ['./page403.component.scss']
})
export class Page403Component implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    if (localStorage.getItem('userLogin')) {
      this.router.navigate(['/']);
    }
  }

}
