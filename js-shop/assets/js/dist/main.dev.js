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
    toast.error("Enter product info");
  }
}

;
var toast = {
  timeuotID: null,
  success: function success(text) {
    this.show(text, "success");
  },
  error: function error(text) {
    this.show(text, "error");
  },
  warning: function warning(text) {
    this.show(text, "warning");
  },
  info: function info(text) {
    this.show(text, "info");
  },
  show: function show(text) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var myToast = document.getElementById("my-toast");

    if (myToast) {
      clearTimeout(this.timeuotID);
      myToast.remove();
    }

    ;
    var html = "<div id=\"my-toast\" class=\"my-toast ".concat(type, "\">\n            <p class=\"mb-0\">").concat(text, "</p>\n        </div>");
    document.body.insertAdjacentHTML("afterbegin", html);
    this.hide(3000);
  },
  hide: function hide(timeout) {
    this.timeoutID = setTimeout(function () {
      var myToast = document.getElementById("my-toast");
      myToast && myToast.remove();
    }, timeout);
  }
};