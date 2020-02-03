import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class UsersComponent implements OnInit, OnDestroy {
  subServiceFindUser: Subscription;
  subServiceDeleteUser: Subscription;
  userFindArr: User[] = [];
  isSearch: boolean = false;
  searchKw: string = '';
  userEdit: User;
  isEdit: boolean = false;
  updateSuccess = false;
  displayModal: string = 'none';
  action: boolean = false;

  constructor(private userService: UserService) {
     
   }

  ngOnInit() {
    // setInterval(() => {
    //   console.log('status biến edit', this.isEdit)
    //   console.log('status hiển thị modal', this.displayModal)
    // }, 3000)
  }
  ngOnDestroy() {
    if (this.subServiceFindUser) {
      this.subServiceFindUser.unsubscribe();
    }
    if (this.subServiceDeleteUser) {
      this.subServiceDeleteUser.unsubscribe();
    }
  }
 
  findUser() {
    this.action = true;
    //this.isSearch = true;
    let keyword = this.searchKw;
    keyword = keyword.trim();
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

  //Add

  EditThisUser(user: User) {
    this.userEdit = user;
    this.isEdit = true;
    this.checkStatusModal(this.isEdit);
  }
  
  displayUserAfterEdit(user: User) {
    this.searchKw = user.taiKhoan;
    this.findUser();
    this.updateSuccess = true;
    setTimeout(() => {
      this.updateSuccess = false;
    },3000)
  }

  updateStatus(status: boolean) {
    //console.log('biến edit nhận được ko',status)
    this.isEdit = status;
    this.checkStatusModal(this.isEdit);
  }

  checkStatusModal(status: boolean) {
    //this.action = true;
    console.log('status click',status)
    if (status) {
      this.displayModal = 'block';
    }
    else {
      this.displayModal = 'none';
    }
  }


}
