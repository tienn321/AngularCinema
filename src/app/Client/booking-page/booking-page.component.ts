import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/_core/Services/film.service'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { BookingInfo, Seat } from 'src/app/_core/Models/BookingInfo';
import { TicketsToBeBooked } from 'src/app/_core/Models/TicketsToBeBooked';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit, OnDestroy {
  //props here
  subParam: Subscription
  subService: Subscription;
  subServiceBooking: Subscription;
  bookingTicket: BookingInfo = new BookingInfo();
  showtimeId: number;
  seatTickets: Seat[] = []

  //sys methods
  constructor(
    private avtRoute: ActivatedRoute,
    private filmService: FilmService,
    private titlePage: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.subParam = this.avtRoute.params.subscribe((params) => {
      this.showtimeId = params.showtimeid;
      this.getBooking(this.showtimeId)
      
    })
  }

  ngOnDestroy() {
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
    if (this.subService) {
      this.subService.unsubscribe();
    }
    if (this.subServiceBooking) {
      this.subServiceBooking.unsubscribe();
    }
  }

  //other methods
  getBooking(maLichChieu: number) {
    this.subService = this.filmService.getBookingTicket(maLichChieu).subscribe((data) => {
      this.bookingTicket = data;
      console.log('film booking nhan vao', this.bookingTicket)
      this.titlePage.setTitle(this.bookingTicket.thongTinPhim.tenPhim + ' - is currently booking')
    }, error => { console.log(error.error) }
    )
  }

  chooseSeat(seat: Seat): void {
    if (seat.daDat) {
      this.seatTickets.push(seat)
    }
    else {
      this.seatTickets = this.seatTickets.filter(ghe => ghe.maGhe !== seat.maGhe)
    }
  }
  totalAmount(): number {
    return this.seatTickets.reduce((total, currentSeat, index) => {
      return total += currentSeat.giaVe
    }, 0)
  }

  Pay() {
    //tạo object model bacend cần
    let tickets2Book: TicketsToBeBooked = new TicketsToBeBooked(this.showtimeId, this.seatTickets)
    
    //gọi service api đặt vé
    this.subServiceBooking = this.filmService.bookTheTickets(tickets2Book).subscribe(res => {
      Swal.fire({
        icon: "success",
        title: "Successfully booking your tickets",
        text: 'Wait for 4 us to navigate!',
        showConfirmButton: false,
        timer: 1500
      });
      //this.router.navigate(['/home']);
      setTimeout(() => { this.router.navigate(['home']); }, 2000)
    }, error => {
      Swal.fire('Thong bao', error.error, "error")
    })
  }
  

}
