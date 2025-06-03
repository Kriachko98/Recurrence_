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
  var pcsFiles = parseInt(flashCapacity * 1024 / 820);
  alert("\u041D\u0430 \u0432\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u0432\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ".concat(pcsFiles, " \u0444\u0430\u0439\u043B\u0456\u0432 \u043E\u0431'\u0454\u043C\u043E\u043C 820\u041C\u0431"));
}

;

function task4() {
  var money = parseFloat(prompt('Введіть кількість грошей в вашому гаманці'));
  var chocolatePrice = parseFloat(prompt('Введіть ціну однієї шоколадки'));
  var qntChocolate = Math.trunc(money / chocolatePrice);
  var change = money - qntChocolate * chocolatePrice;
  alert("\u0412\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(qntChocolate, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u0456 \u0443 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0435\u0442\u044C\u0441\u044F ").concat(change, " \u0433\u0440\u043E\u0448\u0435\u0439"));
}

;

function task5() {
  var anyNum = parseInt(prompt('Введіть будь-яке тризначне число'));
  var lustNum = (anyNum % 10).toFixed(0);
  var midNum = Math.trunc(anyNum / 10) % 10;
  var firstNum = Math.trunc(anyNum / 100);
  var turnedNum = lustNum + midNum + firstNum;
  alert("\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0443\u0434\u0435 ".concat(turnedNum));
}

function task6() {
  var startMoney = parseFloat(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0432\u043A\u043B\u0430\u0434\u0443, \u044F\u043A\u0443 \u0432\u0438 \u0445\u043E\u0447\u0435\u0442\u0435 \u043F\u043E\u043A\u043B\u0430\u0441\u0442\u0438 \u0432 \u0431\u0430\u043D\u043A \u043D\u0430 2 \u043C\u0456\u0441\u044F\u0446\u0456, \u0437 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u044E \u0441\u0442\u0430\u0432\u043A\u043E\u044E \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0443 5% \u0440\u0456\u0447\u043D\u0438\u0445"));
  var benefit = (startMoney * 0.05 / 12 * 2).toFixed(2);
  alert("\u0427\u0435\u0440\u0435\u0437 \u0434\u0432\u0430 \u043C\u0456\u0441\u044F\u0446\u0456 \u0432\u0430\u043C \u043D\u0430\u0440\u0430\u0445\u0443\u044E\u0442\u044C ".concat(benefit, "\u0433\u0440\u043D \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432"));
}