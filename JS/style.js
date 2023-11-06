/****
 * Mô hình ba khối
 * b1 nhập giá vé người lớn, trẻ em, số vé ng lớn đã bán, số vé trẻ em đã bán, % doanh thu cho từ thiện
 * bước 2: tổng tiền vé người lớn đã bán = giá vé ng lớn * số vé người lớn đã bán
 * tổng tiền vé người lớn đã bán =0
 * tổng tiền vé trẻ em đã bán= giá vé trẻ em * số vé trẻ em đã bán
 * tổng tiền vé trẻ em đã bán =0;
 * tổng doanh thu= 0;
 * tổng doanh thu = tổng tiền vé người lớn + tổng tiền vé trẻ em;
 * tiền cho từ thiện =0;
 * tiền cho từ thiện = tổng doanh thu - ((15/100)*tổng doanh thu);
 *
 * */

var btn__TicketPrices = document.getElementById("btn__TicketPrices");
btn__TicketPrices.onclick = function () {
  var nameFilm = document.getElementById("nameFilm").value;
  var priceNL = document.getElementById("priceNL").value * 1;
  var priceBaby = document.getElementById("priceBaby").value * 1;
  var ticketNL = document.getElementById("ticketNL").value * 1;
  var ticketBaby = document.getElementById("ticketBaby").value * 1;
  var phanTramTuThien = document.getElementById("phanTramTuThien").value * 1;

  console.log(
    nameFilm,
    priceNL,
    priceBaby,
    ticketNL,
    ticketBaby,
    phanTramTuThien
  );
  var tongTienVeNL = 0;
  tongTienVeNL = ticketNL * priceNL;
  console.log("Tổng tiền vé người lớn là: ", tongTienVeNL);

  var tongTienVeBaby = 0;
  tongTienVeBaby = ticketBaby * priceBaby;
  console.log("tổng tiền vé baby là: ", tongTienVeBaby);

  var tongDoanhThu = 0;
  tongDoanhThu = tongTienVeBaby + tongTienVeNL;
  console.log("Tong doanh thu la: ", tongDoanhThu);

  var tienTuThien = 0;
  tienTuThien = (phanTramTuThien / 100) * tongDoanhThu;
  console.log("tienthuthien: ", tienTuThien);
  var tienSauKhiChoTuThien = 0;
  var tienSauKhiChoTuThien = tongDoanhThu - tienTuThien;
  console.log("tiền sau khi từ thiện:  ", tienSauKhiChoTuThien);

  var result = "Tiền doanh thu film";
  result += "<p>Tên film: " + nameFilm + "</p>";
  result += "<p>Tổng tiền vé người lớn là:" + tongTienVeNL + "</p>";
  result += "<p>Tổng tiền vé baby:" + tongTienVeBaby + "</p>";
  result += "<p>Tổng doanh thu: " + tongDoanhThu + "</p>";
  result += "<p>Phần trăm từ thiện: " + phanTramTuThien + "</p>";

  result += "<p>Tiền dành cho từ thiện: " + tienTuThien + "</p>";
  result += "<p> Tiền sau khi cho từ thiện: " + tienSauKhiChoTuThien + "</p>";

  var footerticket = document.getElementById("footerticket");
  footerticket.innerHTML = result;
};
