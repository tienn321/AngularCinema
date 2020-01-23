//API url below
export const domain = "http://movie0706.cybersoft.edu.vn/api";

//thông tin lưu trữ localStorage
export const local = {
  userLogin: 'userLogin',
  token: 'accessToken',
  groupID: 'GP01'
}

//Api 4 films
export const api = {
  filmManagement: {
    getAllFilms: domain + '/QuanLyPhim/LayDanhSachPhim?maNhom=' + local.groupID,

    getFilmsByPagination: (soTrang: number, soPhanTuTrenTrang: number) => domain + '/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=' + local.groupID + `&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`,

    getFilmDetail: (maPhim: number) => domain + `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,

    getFilmSearch: (tenPhim: string) => domain + '/QuanLyPhim/LayDanhSachPhim?maNhom=' + local.groupID + `&tenPhim=${tenPhim}`,

    getCinemaShowtimes: domain + '/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=' + local.groupID,

    getCinemas: domain + '/QuanLyRap/LayThongTinHeThongRap',

    getBookingTicket: (maLichChieu: number) => domain + `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,

    bookTheTickets: domain + '/QuanLyDatVe/DatVe',

    deleteFilm: (maPhim: number) => domain + `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`
  },

  userManagement: {
    userLogin: domain + '/QuanLyNguoiDung/DangNhap',

    userRegister: domain + '/QuanLyNguoiDung/DangKy',

    getUserTypes: domain + '/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung',

    findUser: (tuKhoa: string) => domain + '/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=' + local.groupID + `&tuKhoa=${tuKhoa}`,

    deleteUser: (taiKhoan: string) => domain + `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,

    updateUser: domain + "/QuanLyNguoiDung/CapNhatThongTinNguoiDung"
  }

}

  