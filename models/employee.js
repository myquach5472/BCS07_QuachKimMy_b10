function Employee(
  _taiKhoan,
  _name,
  _email,
  _password,
  _ngayLam,
  _luong,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.ngayLam = _ngayLam;
  this.luong = _luong;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;

  this.tinhTongLuong = function () {
    if (this.chucVu == "Sếp") {
      return this.luong * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      return this.luong * 2;
    } else {
      return this.luong;
    }
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Nhân Viên Xuất Sắc";
    } else if (this.gioLam >= 176) {
      return "Nhân Viên Giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân Viên Khá";
    } else {
      return "Nhân Viên Trung Bình";
    }
  };
}
