var numberList = [];

document.getElementById("btnNumber_3").onclick = function () {
  // lấy giá trị từ người dùng nhập
  var number = document.getElementById("txtNumber_2").value * 1;

  // thêm number vào mảng numberList
  numberList.push(number);
  console.log(numberList);
};

// Bài Tập 1

document.getElementById("btnDemSoDuong").onclick = function () {
  /**
   * 0. tạo biến count = 0;
   * 1. Duyệt mảng
   * 2. nếu phần tử > 0 ;
   * => lấy biến count tăng 1 đơn vị
   */

  var demSoDuong = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      demSoDuong += 1;
    }
  }
  document.getElementById("btnThongBao_2").innerHTML =
    "Có : " + demSoDuong + " " + "Số Dương";
};
// Bài Tập 2

document.getElementById("btnTongDuong").onclick = function () {
  var tongDuong = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      tongDuong += numberList[i];
    }
  }
  document.getElementById("btnThongBao_2").innerHTML =
    "Tổng Số Dương : " + tongDuong;
};
// Bài Tập 3

document.getElementById("btnSoNhoNhat").onclick = function () {
  /**
   * 0. Tạo biến min = numberList[0];
   * 1. duyệt mảng numberList, var i = 1;
   * 2. kiểm tra Nếu min lớn hơn phần tử kế tiếp trong mảng
   * => min = phần tử kế tiếp trong mảng;
   * => lâý vị trí (i)
   * 3. => show ra ngoài
   */
  var min = numberList[0];
  var index = 0;
  for (var i = 1; i < numberList.length; i++) {
    if (min > numberList[i]) {
      min = numberList[i];
      index = i;
    }
  }
  document.getElementById("btnThongBao_2").innerHTML = "Số Nhỏ Nhất : " + min;
};
// Bài Tập 4
document.getElementById("btnDuongNhoNhat").onclick = function () {
  /**
   * 0. Tạo biến min = numberList[0];
   * 1. duyệt mảng numberList, var i = 1;
   * 2. kiểm tra Nếu min lớn hơn phần tử kế tiếp trong mảng, điều kiện numberList[i] > 0
   * => min = phần tử kế tiếp trong mảng;
   * => lâý vị trí (i)
   * 3. => show ra ngoài
   */
  var minDuong = numberList[0];
  var index = 0;
  for (var i = 1; i < numberList.length; i++) {
    if (minDuong > numberList[i]) {
      if (numberList[i] > 0) {
        minDuong = numberList[i];
        index = i;
      }
    }
  }
  document.getElementById("btnThongBao_2").innerHTML =
    "Số Dương Nhỏ Nhất : " + minDuong;
};
// Bài Tập 5
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  /**
   * 0. Tạo biến soChanCuoi = -1;
   * 1. duyệt mảng numberList, var i = 1;
   * 2. kiểm tra Nếu min lớn hơn phần tử kế tiếp trong mảng, điều kiện numberList[i] % 2 === 0
   * => soChanCuoi = phần tử kế tiếp trong mảng;
   * => lâý vị trí (i)
   * 3. => show ra ngoài
   */
  var soChanCuoi = -1;

  for (var i = 1; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      soChanCuoi = numberList[i];
    }
  }
  document.getElementById("btnThongBao_2").innerHTML =
    "Số Chẵn Cuối Cùng : " + soChanCuoi;
};

// Bài Tập 7
document.getElementById("btnSapXep").onclick = function () {
  for (var i = 0; i < numberList.length - 1; i++) {
    for (var j = i + 1; j < numberList.length; j++) {
      if (numberList[i] > numberList[j]) {
        // Hoan vi

        var temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
    }
  }
  document.getElementById("btnThongBao_2").innerHTML =
    "Các Số Theo Thứ Tự Tăng Dần : " + numberList;
};

//Bài Tập 8
document.getElementById("btnSoNguyenToDau").onclick = function () {
  var soNguyenToDau = -1;
  for (var i = 0; i < numberList.length; i++) {
    soNguyenToDau = ktSoNguyenTo(numberList[i]);
    if (soNguyenToDau !== -1) {
      break;
    }
  }
  function ktSoNguyenTo(number) {
    if (number < 2) {
      return -1;
    }
    for (var i = 2; i < number; i++) {
      if (number % i == 0) {
        return -1;
      }
    }
    return number;
  }
  document.getElementById("btnThongBao_2").innerHTML =
    "Số Nguyên Tố Đầu Tiên là : " + soNguyenToDau;
};

// Bài Tập 9

document.getElementById("btnSoNguyen").onclick = function () {
  var demSoNguyen = 0;

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] % 1 == 0) {
      demSoNguyen += 1;
    }
  }
  document.getElementById("btnThongBao_2").innerHTML =
    "Có : " + demSoNguyen + " " + "Số Nguyên";
};

// Bài Tập 10

document.getElementById("btnSoSanh").onclick = function () {
  var soDuong = "";
  var soAm = "";
  var ketQua;

  for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      soDuong += 1;
    } else if (numberList[i] < 0) {
      soAm += 1;
    }
    if (soDuong > soAm) {
      ketQua = "Số lượng số dương nhiều hơn";
    } else if (soAm > soDuong) {
      ketQua = "Số lượng số Âm nhiều hơn";
    } else {
      ketQua = "Số lượng số Âm và Dương Bằng Nhau";
    }
  }

  document.getElementById("btnThongBao_2").innerHTML = ketQua;
};
