import {
  Component,  OnInit,  OnDestroy} from "@angular/core";
import { Subscription, config } from 'rxjs';
import { UserService } from 'src/app/_core/services/user.service';
import { local } from '../../_core/config/configSetting';
import { User, UserLogin, UserLoginResult } from 'src/app/_core/Models/User';
import swal from "sweetalert2";

@Component({
  selector: "app-login-register",
  templateUrl: "./login-register.component.html",
  styleUrls: ["./login-register.component.scss"]
})
export class LoginRegisterComponent implements OnInit, OnDestroy {
  //props here
  isRegistering: boolean = false;
  isLogedIn: boolean = false;
  subService: Subscription;
  subServiceRegister: Subscription;
  

  //sys methods
  constructor(private userService: UserService) {}
  ngOnInit() {}
  ngOnDestroy() {
    if (this.subService) {
      this.subService.unsubscribe();
    }
    if (this.subServiceRegister) {
      this.subServiceRegister.unsubscribe();
    }
  }

  //methods below
  switchLogin() {
    this.isRegistering = !this.isRegistering;
  }

  login(frmValue: UserLogin) {
    console.log("layuserlogin", frmValue);

    this.subService = this.userService.logIn(frmValue).subscribe(
      (result: UserLoginResult) => {
        //Thành công dùng biến setting lưu localstorage
        localStorage.setItem(local.userLogin, JSON.stringify(result));
        localStorage.setItem(local.token, result.accessToken);
        swal.fire({
          icon: "success",
          title: "Login successful",
          text: 'Wait for 4 us to navigate!',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {location.reload();},1000 )
      }, error => {
        console.log(error.error);
        swal.fire("Thông báo", error.error, "error");
      });
  }

  register(frmValue: User) {
    //console.log("layuserregister", frmValue);
    let newUser:User = {...frmValue, 
    maNhom: "GP01", maLoaiNguoiDung: 'KhachHang'}
    //console.log("user register gui len", newUser);
    let userLogin:UserLogin = {taiKhoan: newUser.taiKhoan, matKhau: newUser.matKhau}
    this.subServiceRegister = this.userService.register(newUser).subscribe(
      (result: User) => {
        swal.fire({
          icon: "success",
          title: "Successful register new account",
          text: 'Wait for 4 us to navigate!',
          showConfirmButton: false,
          timer: 1500
        });
        this.loginAfterRegister(userLogin);
        setTimeout(() => {location.reload();},1200 )
      }, error => {
        console.log(error.error);
        swal.fire("Thông báo", error.error, "error");
      });
  }

  loginAfterRegister(user: UserLogin){
    this.subService = this.userService.logIn(user).subscribe(
      (result: any) => {
        //Thành công dùng biến setting lưu localstorage
        localStorage.setItem(local.userLogin, JSON.stringify(result));
        localStorage.setItem(local.token, result.accessToken);
        }, error => {
        console.log('dang nhap that bai',error.error);
      });
  }

  //không biết để làm gì, xoá sau
  UserLoginStatus() {
    this.isLogedIn = !this.isLogedIn;
  }

}
