"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cars = [{
  id: 645521,
  img: 'assets/img/2015-bmw-435i-xDrive-coupe.jpg',
  brand: 'BMW',
  model: '435i xDrive',
  color: 'blue',
  year: 2015,
  power: 306,
  isNew: false,
  fuel: 'diesel',
  price: 958000
}, {
  id: 940833,
  img: 'assets/img/2024-bmw-x5-m60i-134-6602d491051b2.jpg',
  brand: 'BMW',
  model: 'X5 M60i',
  color: 'black',
  year: 2024,
  power: 523,
  isNew: true,
  fuel: 'electrical',
  price: 4500000
}, {
  id: 957789,
  img: 'assets/img/Used-2020-BMW-3-Series-M340i-1647879445.jpg',
  brand: 'BMW',
  model: 'X3 M340i',
  color: 'blue',
  year: 2020,
  power: 382,
  isNew: false,
  fuel: 'petrol',
  price: 1700000
}, {
  id: 635978,
  img: 'assets/img/ford-kuga-2025.jpg',
  brand: 'Ford',
  model: 'Kuga',
  color: 'green',
  year: 2025,
  power: 180,
  isNew: true,
  fuel: 'petrol',
  price: 1650000
}, {
  id: 113891,
  img: 'assets/img/ford-mustang-2015.jpg',
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
  year: 2015,
  power: 314,
  isNew: false,
  fuel: 'disel',
  price: 728000
}, {
  id: 894781,
  img: 'assets/img/ford-fiesta-2019.jpg',
  brand: 'Ford',
  model: 'Fiesta',
  color: 'blue',
  year: 2019,
  power: 85,
  isNew: false,
  fuel: 'petrol',
  price: 550000
}, {
  id: 525463,
  img: 'assets/img/2016-volkswagen-jetta_5170.jpg',
  brand: 'Volkswagen',
  model: 'Jetta',
  color: 'white',
  year: 2016,
  power: 150,
  isNew: false,
  fuel: 'diesel',
  price: 850000
}, {
  id: 654796,
  img: 'assets/img/2026_volkswagen_tiguan_4dr-suv_se_fq_oem_1_1600.jpg',
  brand: 'Volkswagen',
  model: 'Tiguan',
  color: 'silver',
  year: 2026,
  power: 268,
  isNew: true,
  fuel: 'diesel',
  price: 2550000
}, {
  id: 458823,
  img: 'assets/img/volkswagen-polo-2025.jpg',
  brand: 'Volkswagen',
  model: 'Polo',
  color: 'white',
  year: 2025,
  power: 84,
  isNew: true,
  fuel: 'petrol',
  price: 980000
}, {
  id: 623998,
  img: 'assets/img/skoda-kylaq-2026.jpg',
  brand: 'Skoda',
  model: 'Kylaq',
  color: 'red',
  year: 2026,
  power: 116,
  isNew: true,
  fuel: 'petrol',
  price: 1400000
}, {
  id: 936821,
  img: 'assets/img/skoda-kodiaq-2024.jpg',
  brand: 'Skoda',
  model: 'Kodiaq',
  color: 'silver',
  year: 2024,
  power: 204,
  isNew: true,
  fuel: 'petrol',
  price: 2800000
}, {
  id: 653697,
  img: 'assets/img/skoda-fabia-2025.jpg',
  brand: 'Skoda',
  model: 'Fabia',
  color: 'red',
  year: 2025,
  power: 95,
  isNew: true,
  fuel: 'petrol',
  price: 1150000
}, {
  id: 659863,
  img: 'assets/img/2019-nissan-leaf.jpg',
  brand: 'Nissan',
  model: 'Leaf',
  color: 'silver',
  year: 2019,
  power: 150,
  isNew: false,
  fuel: 'electrical',
  price: 525000
}, {
  id: 552369,
  img: 'assets/img/nissan-ariya-2024.jpg',
  brand: 'Nissan',
  model: 'Ariya',
  color: 'green',
  year: 2024,
  power: 214,
  isNew: true,
  fuel: 'electrical',
  price: 1650000
}, {
  id: 827863,
  img: 'assets/img/nissan-x-trail-2025.jpg',
  brand: 'Nissan',
  model: 'X-Trail',
  color: 'black',
  year: 2025,
  power: 181,
  isNew: true,
  fuel: 'petrol',
  price: 1840000
}, {
  id: 659124,
  img: 'assets/img/2024-mercedes-benz-gle450-exterior-109-677eca533ec1f.jpg',
  brand: 'Mercedes',
  model: 'Gle 450',
  color: 'black',
  year: 2024,
  power: 375,
  isNew: true,
  fuel: 'diesel',
  price: 4500000
}];
var container = document.getElementById('gridWrap');

function renderCards(arr) {
  container.innerHTML = "";
  arr.forEach(function (el) {
    var card = document.createElement('div');
    card.setAttribute('class', 'card-wrap');
    card.innerHTML = "\n            <div class=\"img-wrap\"><img src=\"".concat(el.img, "\" alt=\"").concat(el.brand, "\"></div>\n            <h2 class=\"car-title\">").concat(el.brand, " ").concat(el.model, "</h2>\n            <div class=\"info\">\u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(el.year, "</div>\n            <div class=\"info\">\u041F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ").concat(el.power, " \u043B.\u0441</div>\n            <div class=\"info\">\u0422\u0438\u043F \u043F\u0430\u043B\u0438\u0432\u0430: ").concat(el.fuel === 'diesel' ? 'Дизель' : el.fuel === 'petrol' ? 'Бензин' : 'Електро', "</div>\n            <div class=\"info\">\u0421\u0442\u0430\u043D \u0430\u0432\u0442\u0456\u0432\u043A\u0438: ").concat(el.isNew ? "Нова" : "Вживана", "</div>\n            <div class=\"info\">\u0426\u0456\u043D\u0430: ").concat(el.price.toLocaleString('uk-UA'), " \u0433\u0440\u043D</div>\n        ");
    container.append(card);
  });
}

renderCards(cars); // Сортування

var sorting = document.getElementById('sorting');
sorting.addEventListener('change', function () {
  switch (sorting.value) {
    case 'price-inc':
      cars.sort(function (a, b) {
        return a.price - b.price;
      });
      break;

    case 'price-dec':
      cars.sort(function (a, b) {
        return b.price - a.price;
      });
      break;

    case 'year-new':
      cars.sort(function (a, b) {
        return b.year - a.year;
      });
      break;

    case 'year-old':
      cars.sort(function (a, b) {
        return a.year - b.year;
      });
      break;
  }

  ;
  renderCards(cars);
}); // Фільтрування

var saveFilter = document.getElementById('saveFilter');
saveFilter.addEventListener('click', function () {
  // По бренду
  var checkedBrands = document.querySelectorAll('.model-filter input:checked');

  var selectedBrands = _toConsumableArray(checkedBrands).map(function (el) {
    return el.name;
  });

  var filteredCars = cars;

  if (selectedBrands.length > 0) {
    filteredCars = filteredCars.filter(function (el) {
      return selectedBrands.includes(el.brand.toLowerCase());
    });
  } // По кольору


  var checkedColors = document.querySelectorAll('.color-filter input:checked');

  var selectedColors = _toConsumableArray(checkedColors).map(function (el) {
    return el.name;
  });

  if (selectedColors.length > 0) {
    filteredCars = filteredCars.filter(function (el) {
      return selectedColors.includes(el.color);
    });
  } // По ціні


  var minPrice = document.getElementById('priceMin').value;
  var maxPrice = document.getElementById('priceMax').value;

  if (minPrice >= 0 && maxPrice > 0) {
    filteredCars = filteredCars.filter(function (el) {
      return el.price >= minPrice && el.price <= maxPrice;
    });
  } // Нова чи вживана


  var state = document.querySelector('input[name="carState"]:checked');

  if (state) {
    filteredCars = filteredCars.filter(function (el) {
      return state.value === 'newCar' ? el.isNew : !el.isNew;
    });
  } // Нічого не знайдено


  if (filteredCars.length === 0) {
    container.innerHTML = "<h1>\u0417\u0430 \u0412\u0430\u0448\u0438\u043C \u0437\u0430\u043F\u0438\u0442\u043E\u043C \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E</h1>";
    return;
  }

  console.log(filteredCars);
  renderCards(filteredCars);
});