/* cart */
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

/* open */
cartIcon.onclick = () => {
  cart.classList.add("active");
};

/* Cloese */
closeCart.onclick = () => {
  cart.classList.remove("active");
};

/* JS cart */
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

/* update cart */
function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-trash");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItems);
  }
  /* quantity update */
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChange);
  }
}
/* add to cart */
var addCart = document.getElementsByClassName("add-cart");
for (var i = 0; i < addCart.length; i++) {
  var button = addCart[i];
  button.addEventListener("click", addCartClicked);
}

/* Remove Item */
function removeCartItems(event) {
  var buttonclicked = event.target;
  buttonclicked.parentElement.remove();
  updatetotal();
}

/* Quantity Changes */
function quantityChange(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

function addCartClicked(event) {
  var button = event.target;
  var product = button.parentElement;
  var title = product.getElementsByClassName("product-title")[0].innertext;
  var price = product.getElementsByClassName("product-price")[0].innertext;
  var img = product.getElementsByClassName("product-img")[0].src;
  addToCart(title, price, img);
  updatetotal();
}

function addToCart(title, price, img) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-cotent")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    alert("you have already add this item to your cart");
    return;
  }
}

var cartBoxContent = `
          <img src="/HTML/1st/iphone-12-pro-blue-hero.png" alt="" class="cart-img">
          <div class="detail-box">
            <div class="cart-product-title">Btts</div>
            <div class="cart-price">$25</div>
            <input type="number" value="1" class="cart-quantity">
          </div>  
          <i class='bx bxs-trash-alt cart-trash'></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
  .getElementsByClassName("cart-trash")[0]
  .addEventListener("click", removeCartItems);
cartShopBox
  .getElementsByClassName("cart-quantity")[0]
  .addEventListener("change", quantityChange);

//update total
function updatetotal() {
  var cartcontent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartcontent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innertext.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    total = math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innertext = "$" + total;
  }
}
