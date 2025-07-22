"use strict";

var CART = [{
  title: '',
  qty: 1,
  price: 1.00
}];

function _el(id) {
  return document.getElementById(id);
}

;

function addToCart() {
  var title = _el("prod_title").value;

  var qty = _el("prod_qty").valueAsNumber;

  var price = _el("prod_price").valueAsNumber;

  if (title !== '' && qty > 0 && !isNaN(price)) {
    CART.push({
      title: title,
      qty: qty,
      price: price
    });
  } else {
    alert("Incorrect value");
  }
}

;