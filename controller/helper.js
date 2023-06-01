function getInputs() {
  var _taiKhoan = document.getElementById("tknv").value;
  var _name = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _password = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luong = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  var valid = true;
  valid =
    checkEmpty(_taiKhoan, "tbTK") &
    checkEmpty(_name, "tbName") &
    checkEmpty(_email, "tbMail") &
    checkEmpty(_password, "tbPass") &
    checkEmpty(_ngayLam, "tbNgayLam") &
    checkEmpty(_luong, "tbLuong") &
    checkEmpty(_chucVu, "tbCVu") &
    checkEmpty(_gioLam, "tbGio");
  valid = checkEmail(_email, "tbMail");

  if (!valid) {
    return;
  }

  var employee = new Employee(
    _taiKhoan,
    _name,
    _email,
    _password,
    _ngayLam,
    _luong,
    _chucVu,
    _gioLam
  );
  return employee;
}

function autoEnterInputs(
  taiKhoan,
  name,
  email,
  password,
  ngayLam,
  luong,
  chucVu,
  gioLam
) {
  // reset inputs
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("password").value = password;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luong;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

//find position of the input
function findEmployee(taiKhoan) {
  var position = -1;
  arrEmployee.forEach(function (item, index) {
    if (item.taiKhoan == taiKhoan) {
      position = index;
    }
  });
  return position;
}
