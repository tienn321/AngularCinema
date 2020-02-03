import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private titlePage: Title) { }

  ngOnInit() {
    this.titlePage.setTitle('Over The Moon Cinema')
  }

}
