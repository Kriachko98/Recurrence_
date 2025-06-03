"use strict";

function task1() {
  var a = 0.1;
  var b = 0.2;
  alert((a + b).toFixed(1));
}

;

function task2() {
  var a = '1';
  var b = 2;
  alert(Number(a) + b);
}

;

function task3() {
  var flashCapacity = parseFloat(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043E\u0431'\u0454\u043C \u043F\u0430\u043C'\u044F\u0442\u0456 \u0432\u0430\u0448\u043E\u0457 \u0444\u043B\u0435\u0448\u043A\u0438 \u0432 \u0413\u0431"));
  var pcsFiles = parseInt(flashCapacity * 1000 / 820);
  alert("\u041D\u0430 \u0432\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u0432\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(pcsFiles, " \u0444\u0430\u0439\u043B\u0456\u0432 \u043E\u0431'\u0454\u043C\u043E\u043C 820\u041C\u0431"));
}

;