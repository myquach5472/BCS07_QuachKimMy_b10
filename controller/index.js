var arrEmployee = [];

// render--------------------------------------
function renderEmployee() {
  var content = "";

  for (var i = 0; i < arrEmployee.length; i++) {
    var employee = arrEmployee[i];
    var tongLuong = employee.tinhTongLuong();
    var xepLoai = employee.xepLoai();
    content += `
<tr>
<td>${employee.taiKhoan}</td>
<td>${employee.name}</td>
<td>${employee.email}</td>
<td>${employee.ngayLam}</td>
<td>${employee.chucVu}</td>
<td>${tongLuong}</td>
<td>${xepLoai}</td>
<td>
<button onclick="delEmployee('${employee.taiKhoan}')" class="btn btn-danger mb-1">Xóa</button>
<button data-toggle="modal" data-target="#myModal" onclick="editEmployee('${employee.taiKhoan}')" class="btn btn-warning text-white">Đổi</button>
</td>
</tr>
`;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
// ------------------------------------------------

function addEmployee() {
  var employee = getInputs();
  if (employee) {
    arrEmployee.push(employee);
    renderEmployee();
    // reset
    autoEnterInputs("", "", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNV").onclick = addEmployee;

// delete function------------------------------------
function delEmployee(taiKhoan) {
  var index = findEmployee(taiKhoan);
  if (index != -1) {
    arrEmployee.splice(index, 1);
    renderEmployee();
  }
}

//edit function---------------------------------------
function editEmployee(taiKhoan) {
  document.getElementById("btnCapNhat").style.display = "inline-block";
  document.getElementById("tknv").readOnly = true;

  var index = findEmployee(taiKhoan);
  var employee = arrEmployee[index];

  autoEnterInputs(
    employee.taiKhoan,
    employee.name,
    employee.email,
    employee.password,
    employee.ngayLam,
    employee.luong,
    employee.chucVu,
    employee.gioLam
  );
  renderEmployee();
}

// update function (editing)
function updateEmployee() {
  var fixedEmployee = getInputs();
  var index = findEmployee(fixedEmployee.taiKhoan);
  arrEmployee[index] = fixedEmployee;
  renderEmployee();
}

document.getElementById("btnCapNhat").onclick = updateEmployee;
