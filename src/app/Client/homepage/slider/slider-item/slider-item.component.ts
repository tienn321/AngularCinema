import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/_core/Models/Film'


@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnInit {
  @Input() filmInput: Film;
  @Input() indexInput: number;
  @Output() activeTab = new EventEmitter;

  activeItem: number = 0;
  
  constructor() {
    this.ChangeActiveItem();
   }

  ngOnInit() {
  }

  ChangeActiveItem() {
    setInterval(() => {
      this.activeItem += 1;
      //console.log('gia tri',this.activeItem)
      if (this.activeItem > 4) {
        this.activeItem = 0
      }
      //gửi ra cho thẻ slider hiện lên
      this.activeTab.emit(this.activeItem)
    }, 8000)
  }


  ngOnDestroy() { 
    this.ChangeActiveItem();
  }

}
