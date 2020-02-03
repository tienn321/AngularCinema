import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  emailList: string[] = [];
  constructor() { }

  ngOnInit() {
    this.GetEmailList();
  }
  GetEmailList() {
    if (localStorage.getItem('newsletter')) {
      this.emailList = JSON.parse(localStorage.getItem('newsletter'))
      console.log('email list', this.emailList)
    }
    else {
      alert('no new email register')
    }
  }

}
