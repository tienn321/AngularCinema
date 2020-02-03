import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Film } from 'src/app/_core/Models/Film';
import { local } from "src/app/_core/config/configSetting";
import { FilmService } from "src/app/_core/Services/film.service";
import { Subscription } from "rxjs";
//import { DatePipe } from '@angular/common';
@Component({
  selector: "app-modal-film",
  templateUrl: "./modal-film.component.html",
  styleUrls: ["./modal-film.component.scss"]
})
export class ModalFilmComponent implements OnInit, OnDestroy, OnChanges {
  //props here
  @Output() modalStatus = new EventEmitter;
  @Input() filmEditInput: Film; 
  @Input() isEditing: boolean = false;
  editImg: boolean = false;
  subserviceUpdateImgFilm: Subscription;
  subserviceUpdateFilm: Subscription;
  subserviceAddFilm: Subscription;
  @Output() filmAfterEdit = new EventEmitter;
  constructor(private filmService: FilmService) {
     }

  ngOnInit() {
    
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void { 
    let dateFormatted = new Date(this.filmEditInput.ngayKhoiChieu).toLocaleDateString("en-GB")
    changes.filmEditInput.currentValue.ngayKhoiChieu = dateFormatted
    //console.log(changes)
  }
  ngOnDestroy() {
    if (this.subserviceUpdateImgFilm) {
      this.subserviceUpdateImgFilm.unsubscribe();
    }
    if (this.subserviceAddFilm) {
      this.subserviceAddFilm.unsubscribe();
    }
    
    if (this.subserviceUpdateFilm) {
      this.subserviceUpdateFilm.unsubscribe();
    }
  }

  //other methods
  AddNewFilm(frmValue: Film, file: any) {
    console.log('file hinh', file)
    let fileImg = file.files[0];
    console.log('file hinh sau khi edit', fileImg)
    let frmBody = new FormData();
    frmBody.append("file", fileImg, fileImg.name);
    frmBody.append("tenPhim", frmValue.tenPhim);
    frmBody.append("maNhom", local.groupID);
    frmValue.maNhom = local.groupID;
    frmValue.hinhAnh = fileImg.name;
    console.log("film dc add vao", frmValue);

    this.subserviceAddFilm = this.filmService.addFilm(frmValue).subscribe(
      res => {
        //Thêm phim thành công rồi mới thêm file
        this.subserviceUpdateImgFilm = this.filmService.uploadImg(frmBody).subscribe(
          result => {
            console.log("apifile", result);
            console.log("da them dc phim");
          },
          error => {
            console.log(error.error);
          });
      },error => {console.log(error.error);
      });
  }

  CloseModal() {
    this.modalStatus.emit(false);
  }

  UpdateFilm(filmUpdate: Film, file: any) {
    filmUpdate.maNhom = local.groupID;
    filmUpdate.maPhim = this.filmEditInput.maPhim;

    //kvuc xu ly hinh anh
    let fileImg = file.files[0];
    if (fileImg == undefined) {
     // console.log('file rong')
      filmUpdate.hinhAnh = this.filmEditInput.hinhAnh;
      this.serviceUpdateFilm(filmUpdate);
    }

    else {
      //console.log('file k rong')
      let frmBody = new FormData();
      frmBody.append("file", fileImg, fileImg.name);
      frmBody.append("tenPhim", filmUpdate.tenPhim);
      frmBody.append("maNhom", local.groupID);
      filmUpdate.hinhAnh = fileImg.name;
      this.serviceUpdateFilm(filmUpdate);
      this.serviceUpdateImgFilm(frmBody);
    }
    console.log('done')
    this.isEditing = false;
    this.CloseModal();
    this.filmAfterEdit.emit(filmUpdate)
  }

  serviceUpdateImgFilm(filmImg: any) {
    this.subserviceUpdateImgFilm = this.filmService.uploadImg(filmImg).subscribe(
      (result: any) => {
        //console.log('file hinh anh', result)
        console.log('da cap nhat hinh anh')
      },
       error => {console.log(error.error);})
  }

  serviceUpdateFilm(filmUpdate: Film) {
    this.subserviceUpdateFilm = this.filmService.updateFilm(filmUpdate).subscribe(
       (result:any) =>{console.log('da cap nhat film')},
       error => {console.log(error.error);})
  }
}
