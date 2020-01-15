import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Seat } from 'src/app/_core/Models/BookingInfo';
@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  //props here
  @Input() i: number;
  @Input() seatInput: Seat;
  @Output() chooseSeatEvent = new EventEmitter;
  seatStatus: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  //other methods
  chooseSeat() {
    this.seatStatus = !this.seatStatus;
    let chosenSeat = {
      stt: this.seatInput.stt, 
      maGhe: this.seatInput.maGhe, 
      giaVe: this.seatInput.giaVe,
      daDat: this.seatStatus
    }
    this.chooseSeatEvent.emit(chosenSeat);
  }
}
