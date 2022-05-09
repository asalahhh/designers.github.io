/* console.log("Done") */
let cart_button = document.getElementsByClassName("cart-button");
/* let item_Name = document.getElementsByClassName("item-name"); */
let price = document.getElementsByClassName("product-price");
let img = document.getElementsByClassName("product-img");
let arr_Name = [];
let arr_Price = [];
let arr_img = [];
try {
  itemsAdd();
  cal();
}
finally {
  let cart = cart_button;
  for (let i = 0; i < cart_button.length; i++) {
    cart[i].onclick = function () {
      arr_Price.push(price[i].getElementsByTagName("span")[0].innerHTML);
      arr_img.push(img[i].getAttribute("src"));
      localStorage.setItem("price", arr_Price);
      localStorage.setItem("img", arr_img);
      /* alert(arr_Price); */
    };
  
  }
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
  console.log("done")
  for (let i = 0; i < arrPic.length; i++) {
    
    let table = document.getElementsByTagName("table")[0];
    let row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    console.log(cell1);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = `<td><div class="cart-info">
              <img class="cart-img" src="${arrPic[i]}" />
              <div>
                <p class="cart-name"></p>
                <small class="cart-price">Price: ${arrPrice[i]}</small>
                <br />
                <button href="" class="rmv"><i class='bx bxs-trash-alt'></i></button>
              </div>
            </div>
          </td>`;
    cell2.innerHTML = `<td><input type="number" value="1"/></td>`;
    cell3.innerHTML = `<td class="subitem">${arrPrice[i]}</td>`;
    cell3.classList.add("subitem")
  }
}

let remove = document.getElementsByClassName("rmv");
for (let i = 0; i < remove.length; i++){
  let btn = remove[i];
  btn.onclick = function(e) {
    e.preventDefault();
    btn.parentElement.parentElement.parentElement.parentElement.remove();
    cal();
  }
  }

  function cal() { 
  let sub = document.getElementById("sub");
  let tax = document.getElementById("tax");
  let total = document.getElementById("total");
  let subitem = document.getElementsByClassName("subitem");
  let totalNo = 0;
  /* console.log(subitem.length) */
  for (let i = 0; i < subitem.length; i++)
  {
   totalNo += +(subitem[i].innerText.split("$")[1])
  }
  sub.innerText = totalNo;
  let taxNo = 0.025 * totalNo;
  tax.innerText = taxNo
  total.innerText = taxNo + totalNo 
}
