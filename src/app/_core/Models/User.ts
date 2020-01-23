export class User{
  taiKhoan:	string;
  matKhau:	string;
  email:	string;
  soDt:	string;
  maNhom:	string;
  maLoaiNguoiDung:	string;
  hoTen: string;
  constructor() { }
}

export class UserLogin{
  taiKhoan:	string;
  matKhau:	string;
  constructor() { }
}

export class UserLoginResult {
  taiKhoan: string;
  matKhau: string;
  accessToken: string;
  constructor() { }
}
export class UserTypes { 
  maLoaiNguoiDung: string;
  tenLoai: string
}
