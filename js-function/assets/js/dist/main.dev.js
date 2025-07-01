"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Task 2
function argPcs() {
  return arguments.length;
}

;

function param() {
  var parameters = document.getElementById("argPcs").value;
  var parts = parameters.split(/[\s,]+/);
  var answear = argPcs.apply(void 0, _toConsumableArray(parts));
  document.getElementById("paramRez").innerHTML = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0445 \u0432\u0430\u043C\u0438 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0456\u0432 \u0431\u0443\u0434\u0435: ".concat(answear);
} // Task 3


function compare(a, b) {
  if (a < b) {
    return "-1 (\u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0434\u0440\u0443\u0433\u0435)";
  } else if (a > b) {
    return "1 (\u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0434\u0440\u0443\u0433\u0435)";
  } else {
    return "0 (\u0447\u0438\u0441\u043B\u0430 \u0440\u0456\u0432\u043D\u0456)";
  }
}

;

function compAnswear() {
  var numA = document.getElementById("numA").valueAsNumber;
  var numB = document.getElementById("numB").valueAsNumber;

  if (isNaN(numA) || isNaN(numB)) {
    document.getElementById("finalRez").innerHTML = "<span style=\"color:red\">Incorrect value</span>";
    return;
  }

  var rezComp = compare(numA, numB);
  document.getElementById("finalRez").innerHTML = "\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C: ".concat(rezComp);
}

; // Task 4

function getFactorial(n) {
  if (n < 0) return "\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u043D\u0435 \u043E\u0431\u0447\u0438\u0441\u043B\u044E\u0454\u0442\u044C\u0441\u044F";
  var fact = 1;

  for (var i = 2; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

;

function factorial() {
  var numFact = document.getElementById("numFact").valueAsNumber;
  var factRez = getFactorial(numFact);
  document.getElementById("factRez").innerHTML = "\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0432\u0430\u0448\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0431\u0443\u0434\u0435: ".concat(factRez);
}

; // Task 5

var unitNumbers = function unitNumbers(a, b, c) {
  return String(a) + b + c;
};

function wholeNum() {
  var numberA = document.getElementById("numberA").valueAsNumber;
  var numberB = document.getElementById("numberB").valueAsNumber;
  var numberC = document.getElementById("numberC").valueAsNumber;

  if (numberA < 1 || numberA > 9 || numberB < 0 || numberB > 9 || numberC < 0 || numberC > 9) {
    document.getElementById("wholeNumRez").innerHTML = "<span style=color:red>\u0423 \u043A\u043E\u0436\u043D\u043E\u043C\u0443 \u043F\u043E\u043B\u0456 \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u043E\u0434\u043D\u0430 \u0446\u0438\u0444\u0440\u0430 \u0432\u0456\u0434 0 \u0434\u043E 9 \u043E\u043A\u0440\u0456\u043C \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u043F\u043E\u043B\u044F. \u0412 \u043F\u0435\u0440\u0448\u043E\u043C\u0443 \u043F\u043E\u043B\u0456 \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u0446\u0438\u0444\u0440\u0443 \u0432\u0456\u0434 1 \u0434\u043E 9</span>";
    return;
  } else if (isNaN(numberA) || isNaN(numberB) || isNaN(numberC)) {
    document.getElementById("wholeNumRez").innerHTML = "<span style=color:red>Incorrect value</span>";
    return;
  }

  document.getElementById("wholeNumRez").innerHTML = "\u041E\u0431'\u0454\u0434\u043D\u0430\u0432\u0448\u0438 \u0432\u0430\u0448\u0456 \u0446\u0438\u0444\u0440\u0438 \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u044C: ".concat(unitNumbers(numberA, numberB, numberC));
}

; // Task 6

var getSquare = function getSquare(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  return a * b;
};

function squareRez() {
  var width = document.getElementById("width").valueAsNumber;
  var height = document.getElementById("height").valueAsNumber;

  if (isNaN(width)) {
    document.getElementById("squareRez").innerHTML = "<span style=color:red>Incorrect value. Enter first value</span>";
    return;
  } else if (isNaN(height)) {
    height = undefined;
  }

  document.getElementById("squareRez").innerHTML = "\u041F\u043B\u043E\u0449\u0430 \u0432\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A\u0430: ".concat(getSquare(width, height));
}

;