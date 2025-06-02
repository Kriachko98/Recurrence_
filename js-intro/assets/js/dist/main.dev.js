'use strict';

function task1() {
  var userName = prompt('Enter your name');
  alert("Your name is ".concat(userName));
}

;

function task2() {
  var yearBirth = parseInt(prompt('Enter your year of birth'));
  var currentYear = new Date().getFullYear();
  var age = currentYear - yearBirth;
  alert("You are ".concat(age, "y.o."));
}

;

function task3() {
  var lengthSquareSide = parseFloat(prompt('Enter length of one side of square'));
  var squarePerimeter = lengthSquareSide * 4;
  alert("Perimeter of your square is ".concat(squarePerimeter));
}

;

function task4() {
  var radius = parseFloat(prompt('Введіть радіус кола'));
  var circleSquare = Math.PI * radius * radius;
  alert("\u041F\u043B\u043E\u0449\u0430 \u0449\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(circleSquare));
}

;

function task5() {
  var distanceBetweenCities = parseInt(prompt('Яка дистанція між двома містами в кілометрах?'));
  var tripTime = parseFloat(prompt('За скільки годин ви хочете доїхати?'));
  var neededSpeed = distanceBetweenCities / tripTime;
  alert("\u0412\u0430\u043C \u0442\u0440\u0435\u0431\u0430 \u0457\u0445\u0430\u0442\u0438 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(neededSpeed, "\u043A\u043C/\u0433 \u0449\u043E\u0431 \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0456\u043D\u0448\u043E\u0433\u043E \u043C\u0456\u0441\u0442\u0430 \u0432\u0447\u0430\u0441\u043D\u043E"));
}

;

function task6() {
  var dollarEuroCoefficient = 0.85;
  var dollar = parseFloat(prompt('Введіть суму у долларах'));
  var euroFromDollar = dollar * dollarEuroCoefficient;
  alert("\u0426\u0435 \u0431\u0443\u0434\u0435 ".concat(euroFromDollar, "\u0435\u0432\u0440\u043E"));
}

;