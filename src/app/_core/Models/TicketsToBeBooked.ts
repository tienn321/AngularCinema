import { local } from '../config/configSetting';

export class TicketsToBeBooked {
  maLichChieu: number;
  danhSachVe: Ticket[] = [];
  taiKhoanNguoiDung: string;
  constructor(maLichChieu: number, danhSachVe: any[]) {
    this.maLichChieu = maLichChieu;
    this.danhSachVe = danhSachVe;
    this.taiKhoanNguoiDung = JSON.parse(localStorage.getItem(local.userLogin)).taiKhoan;
  }
}

class Ticket {
  maGhe: number;
  giaVe: number;
}