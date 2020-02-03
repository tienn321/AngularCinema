import { Component, OnInit, OnDestroy, Input, Output, EventEmitter  } from '@angular/core';
import { UserService } from 'src/app/_core/Services/user.service'
import { Subscription } from 'rxjs';
import { User, UserTypes } from 'src/app/_core/Models/User';
import swal from "sweetalert2";

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit, OnDestroy {
  //props here
  subService: Subscription;
  userTypes: UserTypes[] = [];
  subServiceRegister: Subscription;
  subServiceUpdate: Subscription;
  @Input() userEditInput: User; 
  @Input() isEditing: boolean = false;
  @Output() modalStatus = new EventEmitter;
  @Output() userAfterEdit = new EventEmitter;
  

  //sys methods
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserTypes();
  }
  ngOnDestroy() {
    if (this.subService) {
      this.subService.unsubscribe();
    }
    if (this.subServiceRegister) {
      this.subServiceRegister.unsubscribe();
    }
    if (this.subServiceUpdate) {
      this.subServiceUpdate.unsubscribe();
    }
  }

  //other methods
  getUserTypes():void {
    this.subService = this.userService.getUserTypes().subscribe(
      (result: UserTypes[]) => {
        this.userTypes = result;
        console.log('usertype',this.userTypes)
      }, error => {
        console.log(error.error);
      })
  }
  register(frmUser:User) {
    //console.log("layuserregister", frmUser);
    let newUser = { ...frmUser, maNhom: 'GP01' };
   
    console.log('rgt new user admin', newUser)
    

    this.subServiceRegister = this.userService.createNewUser(newUser).subscribe(
      (result: User) => {
        swal.fire({
          icon: "success",
          title: "Successful register new account",
          text: 'Wait for 4 us to navigate!',
          showConfirmButton: false,
          timer: 1000
        });
        this.CloseModal()
        //setTimeout(() => { location.reload(); }, 1200)
      }, error => {
        console.log(error.error);
        swal.fire("Thông báo", error.error, "error");
     });
  }
  
  UpdateUser(frmUpdateValue:User) {
    console.log('status of edit in modal', this.isEditing)
    let userUpdate = { ...frmUpdateValue, maNhom: 'GP01' };
    console.log('user new info', userUpdate)
    this.subServiceUpdate = this.userService.updateUser(userUpdate).subscribe((result: any) => {
      console.log('thong bao sau khi sua',result.data)
    }, error => {
      console.log(error.error)
    })
    this.isEditing = false;
    this.CloseModal();
    this.userAfterEdit.emit(userUpdate);
  }

  CloseModal() {
    this.modalStatus.emit(false);
  }

 


}
