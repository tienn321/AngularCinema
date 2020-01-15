export class BookingInfo {
  thongTinPhim: ThongTinPhim = new ThongTinPhim();
  danhSachGhe: Seat[] = [];
  constructor() { }
}

export class Seat {
  maGhe: number;
  tenGhe: string;
  maRap: number;
  loaiGhe: string;
  stt: string;
  giaVe: number;
  daDat: boolean;
  taiKhoanNguoiDat: string;
}

class ThongTinPhim {
  maLichChieu: number;
  temCumRap: string;
  tenRap: string;
  diaChi: string;
  tenPhim: string;
  hinhAnh: string;
  ngayChieu: string;
  gioChieu: string;
  constructor() { }
}
