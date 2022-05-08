let cart_button = document.getElementsByClassName("cart-button");
/* let item_Name = document.getElementsByClassName("item-name"); */
let price = document.getElementsByClassName("product-price");
let img = document.getElementsByClassName("product-img");
let arr_Name = [];
let arr_Price = [];
let arr_img = [];
let cart = cart_button;
for (let i = 0; i < cart_button.length; i++) {
  cart[i].onclick = function () {
    arr_Price.push(price[i].getElementsByTagName("span")[0].innerHTML);
    arr_img.push(img[i].getAttribute("src"));
    localStorage.setItem("price", arr_Price);
    localStorage.setItem("img", arr_img);
    alert(arr_Price);
  };
}
function itemsAdd() {
  let arrName = [];
  let arrPrice = [];
  let arrPic = [];
  let class1 = "price";
  let class2 = "inp_val";
  let class3 = "subtotal";
  /* arrName = localStorage.getItem("name").split(","); */
  arrPrice = localStorage.getItem("price").split(",");
  arrPic = localStorage.getItem("img").split(",");
  for (let i = 0; i < arrpic.length; i++) {
    let table = document.getElementsByTagName("table")[0];
    let row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = `<td> <i class="far fa-times-circle" ></i></td>`;
    cell2.innerHTML = `<td><img class="img_tb"  src="${arrPic[i]}" alt=""></td>`;
    cell3.innerHTML = `<td>${arrName[i]}</td>`;
    cell4.innerHTML = `<td class="${class1}" ><span>${arrPrice[i]}</span>$</td>`;
    cell4.classList.add("price");
    cell5.innerHTML = `<td><input class="${class2}" type="number" value="1" min="0"></td>`;
    cell5.classList.add("inp_val");
    cell6.innerHTML = `<td class="${class3}"><span>${arrPrice[i]}</span>$</td>`;
    cell6.classList.add("subtotal");
  }
}
