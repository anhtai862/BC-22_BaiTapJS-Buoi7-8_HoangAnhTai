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
    "Số Chẵn Cuối Cùng : " + numberList;
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
