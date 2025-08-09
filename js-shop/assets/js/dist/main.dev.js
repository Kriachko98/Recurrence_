"use strict";

var CART = [{
  title: 'Milk',
  qty: 2,
  price: 25.5
}, {
  title: 'Bread',
  qty: 1,
  price: 19.90
}, {
  title: 'Kit-kat',
  qty: 5,
  price: 17.89
}, {
  title: 'Water 1.5l',
  qty: 3,
  price: 20
}];
productList();
var editMode = false;
var editID = null;

function _el(id) {
  return document.getElementById(id);
}

;

function addToCart() {
  var title = _el("prod_title").value;

  var qty = _el("prod_qty").valueAsNumber;

  var price = _el("prod_price").valueAsNumber;

  if (title === '') {
    toast.error("Enter title");
    return;
  } else if (qty <= 0) {
    toast.error("Incorrect quantity");
    return;
  } else if (isNaN(price)) {
    toast.error("Enter price");
    return;
  }

  ;

  if (editMode) {
    CART[editID] = {
      title: title,
      qty: qty,
      price: price
    };
    toast.success('Product is updated');
    editMode = false;
    editID = null;
  } else {
    var prodIndex = CART.findIndex(function (prod) {
      return prod.title === title;
    });

    if (prodIndex === -1) {
      CART.push({
        title: title,
        qty: qty,
        price: price
      });
      toast.success("Product is added");
    } else {
      CART[prodIndex].qty += qty;
    }

    ;
  }

  _el("prod_title").value = '';
  _el("prod_qty").valueAsNumber = 1;
  _el("prod_price").value = '';
  productList();
}

;

function productList() {
  var tbody = "";
  var cartSorted = sortList();
  cartSorted.forEach(function (prod, index) {
    tbody += "<tr>\n        <td>".concat(index + 1, "</td>\n        <td>").concat(prod.title, "</td>\n        <td>\n            <div class=\"input-group mb-3\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ", 'dec')\">-</button>\n                <input type=\"text\" class=\"form-control\" value=\"").concat(prod.qty, "\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeQty(").concat(index, ", 'inc')\">+</button>\n            </div>\n        </td>\n        <td>").concat(prod.price.toFixed(2), "</td>\n        <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n        <td>\n            <button type=\"button\" class=\"btn btn-info btn-sm\" onclick='editProd(").concat(index, ")'>Edit</button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" onclick='deleteProd(").concat(index, ", \"").concat(prod.title, "\")'>Remove</button>\n        </td>\n        </tr>");
  });
  _el("cart_tbody").innerHTML = tbody;
  var disc = calcDisc();
  _el("cart_total").innerHTML = (sumProd() - disc).toFixed(2);
  _el('cart_disc').innerHTML = disc.toFixed(2);
}

;

function sortList() {
  var sort = _el('sorting').value;

  switch (sort) {
    case 'subTotalAsc':
      return CART.toSorted(function (a, b) {
        return a.qty * a.price - b.qty * b.price;
      });

    case 'subTotalDesc':
      return CART.toSorted(function (a, b) {
        return b.qty * b.price - a.qty * a.price;
      });

    case 'qtyAsc':
      return CART.toSorted(function (a, b) {
        return a.qty - b.qty;
      });

    case 'qtyDesc':
      return CART.toSorted(function (a, b) {
        return b.qty - a.qty;
      });

    case 'titleAtoZ':
      return CART.toSorted(function (a, b) {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
      });

    case 'titleZtoA':
      return CART.toSorted(function (a, b) {
        return b.title > a.title ? 1 : b.title < a.title ? -1 : 0;
      });

    default:
      return CART;
  }

  ;
}

;

function editProd(index) {
  var prod = CART[index];
  editMode = true;
  editID = index;
  _el("prod_title").value = prod.title;
  _el("prod_qty").valueAsNumber = prod.qty;
  _el("prod_price").value = prod.price;
}

function deleteProd(index, title) {
  if (confirm("Do you want to delate ".concat(title, "?"))) {
    CART.splice(index, 1);
    productList();
    toast.success("".concat(title, " was deleted"));
  }

  ;
}

;

function sumProd() {
  return CART.reduce(function (accum, prod) {
    return accum + prod.qty * prod.price;
  }, 0);
}

;

function changeQty(index, action) {
  var qtyFirst = CART[index].qty;

  if (action === 'inc') {
    CART[index].qty++;
  } else if (action === 'dec') {
    if (qtyFirst === 1) {
      deleteProd(index, CART[index].title);
    } else {
      CART[index].qty--;
    }

    ;
  }

  ;
  productList();
}

;

function applyDisc() {
  var amount = _el('disc_amount').valueAsNumber;

  if (isNaN(amount)) {
    toast.error('Enter amount of discount');
    return;
  }

  ;
  productList();
}

;

function calcDisc() {
  var type = _el('disc_type').value;

  var amount = _el('disc_amount').valueAsNumber || 0;
  var sum = sumProd();

  if (type === 'percent') {
    return sum * amount / 100;
  }

  if (type === 'fixed') {
    return amount;
  }

  return 0;
}