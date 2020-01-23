import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/Services/user.service'
import { Subscription } from 'rxjs';
import { User, UserTypes } from 'src/app/_core/Models/User';
//import { Router, NavigationEnd } from '@angular/router';
import swal from "sweetalert2";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  subServiceFindUser: Subscription;
  subServiceDeleteUser: Subscription;
  userFindArr: User[] = [];
  isSearch: boolean = false;
  searchKw: string = '';
  userEdit: User;
  isEdit: boolean = false;
  displayModal: string = 'none';
  //mySubscription: any;


  constructor(private userService: UserService) {
     
   }

  ngOnInit() {
  }

  findUser() {
    let keyword = this.searchKw;
    keyword = keyword.replace(/\s/g, "");
    //console.log('tu khoa la',tuKhoa)
    this.subServiceFindUser = this.userService.findUser(keyword).subscribe((result:any) => {
      this.userFindArr = result;
      console.log('result find user', this.userFindArr)
      this.isSearch = true;
    }, error => {
      console.log(error.error);
    })
  }

  DelThisUser(taiKhoan: string) {
    console.log('user need to delete', taiKhoan)
    this.subServiceDeleteUser = this.userService.deleteUser(taiKhoan).subscribe((result) => {
      swal.fire({
        icon: "success",
        title: `User ${taiKhoan} has been deleted`,
        //text: 'Wait for 4 us to navigate!',
        showConfirmButton: false,
        timer: 1500
      });
      this.findUser();
    }, error => {
      console.log(error.error);
      swal.fire("Thông báo", error.error, "error");
    })
  }

  EditThisUser(user: User) {
    this.userEdit = user;
    this.isEdit = true;
    this.displayModal = 'block'
    console.log('user need to edit', this.userEdit)
    console.log('status of editting', this.isEdit)
  }
}
