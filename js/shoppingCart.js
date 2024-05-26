const addToCartButtons = document.getElementsByClassName("product-button");
const message = document.getElementById("message");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutText = document.getElementById("checkout-text");
const wishlistIcons = document.getElementsByClassName('wishlist-icon');

const productNames = [
  "Asus Rog Azoth",
  "Asus Rog Claymore",
  "Wooting 60HE",
  "Keychron Q1",
  "iQunix ZX75",
  "Razer Widow V4",
  "Razer Huntsman V2",
  "Corsair K100 RGB",
  "HyperX Alloy Origins",
  "SteelSeries Apex Pro",
  "Ducky Shine 7",
  "Anne Pro"
];

const productPrices = [
  295.45,
  230.87,
  189.99,
  210.00,
  185.07,
  270.99,
  150.19,
  234.90,
  120.99,
  210.99,
  187.88,
  80.99
];

let cart = [];
let totalPrice = 0;


//voegt event toe aan alle buttons en geeft dan de parameter i 
//door naar function addToCart
//dus bv als 2de product word geklikt dan word productIndex dus 1 want we tellen van 0
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function (e) {
    addToCart(i);
  });
};


checkoutText.addEventListener("click", function(e) {
  alert("scam successful\n\nsending virus..\npress 'OK' to accept the virus");
});


//function om toetevoege aan cart[] 
//en gaat ook checken if product already exists in cart[]
function addToCart(productIndex) {
  const productName = productNames[productIndex];
  const productPrice = productPrices[productIndex];

  //find methode die zoekt het eerste element in cart[] waar item.name === productName
  const existingCartItem = cart.find(item => item.name === productName);

  //als iemand een product toevoegt word dit toegevoegt in cart[];
  const newItem = {
    name: productName,
    price: productPrice,
    quantity: 1 //omdat ze enkel met 1 kunnen toevoegoen (op het moment)
  };

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push(newItem);
  }

  showCart();
  updateTotalPrice();
};


function updateTotalPrice() {
  totalPrice = cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);

  totalPriceElement.innerHTML = "Totaalbedrag: €" + totalPrice.toFixed(2);
}


function showCart() {
  cartItems.innerHTML = "";

  //itereert over alle producte in cart[] met een callback functie
  //item in de parameter is het element en index de positie van het element
  cart.forEach(function(item, index) {
    const cartItem = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.classList.add("product-button-remove");
    deleteButton.addEventListener("click", function () {
      removeItemFromCart(index);
    });

    cartItem.innerHTML = `${item.name}<br>Aantal: ${item.quantity}<br>€${(item.price * item.quantity).toFixed(2)}`;
    cartItem.appendChild(deleteButton);
    cartItems.appendChild(cartItem);
  });

  updateCheckoutText();
}

function removeItemFromCart(index) {
  const item = cart[index];

  //als quantity groter dan 1 is dan -1 als het 1 is dan delete element
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart.splice(index, 1);
  }

  showCart();
  updateTotalPrice();
}

function updateCheckoutText() {
  if (cart.length > 0) {
    checkoutText.innerHTML = "Bestellen";
  } else {
    checkoutText.innerHTML = "";
  }
};

for (let i = 0; i < wishlistIcons.length; i++) {
  wishlistIcons[i].addEventListener("click", function (e) {
    toggleHeart(i);
  });
};

function toggleHeart(wishListIndex) {
  const icon = wishlistIcons[wishListIndex];
  const img = icon.getElementsByTagName('img')[0];
  const filledHeartClass = 'filled-heart';

  icon.classList.toggle(filledHeartClass);

  if (icon.classList.contains(filledHeartClass)) {
    img.src = 'assets/images/icons8-heart-1002.png';
  } else {
    img.src = 'assets/images/icons8-heart-1001.png';
  }
};