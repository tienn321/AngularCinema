//import { Film } from './Film';

// "heThongRapChieu": [
//   {
//     "cumRapChieu": [
//       {
//         "lichChieuPhim": [
//           {
//             maRap: number,
//             tenRap: string,
//             ngayChieuGioChieu: string,
//             giaVe: number,
//             thoiLuong: number
//           }],
//         film:Film
        
//       }

export class FilmShowtimes {
  heThongRapChieu: cinemaBrand[] = [];
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
  constructor() {}
  }
  
class cinemaBrand {
  //film: Film;
  cumRapChieu: CinemaGroup[] = [];
  constructor() { }
}

class CinemaGroup {
  lichChieuPhim: Showtimes[] = [];
  constructor(){}
  }

class Showtimes {
  maRap: number;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
  thoiLuong: number;
    constructor() { }
  }