"use strict";

function task1() {
  var userAge = document.getElementById('userAge').valueAsNumber;

  if (userAge >= 0 && userAge <= 11) {
    document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви дитина</span>';
  } else if (userAge > 11 && userAge <= 17) {
    document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви підліток</span>';
  } else if (userAge > 17 && userAge <= 59) {
    document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви дорослий</span>';
  } else if (userAge > 59 && userAge <= 100) {
    document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви пенсіонер</span>';
  } else if (userAge > 100 && userAge <= 125) {
    document.getElementById('funcRez').innerHTML = '<span style="color:blue">Ви продали душу дияволу?</span>';
  } else if (userAge > 125) {
    document.getElementById('funcRez').innerHTML = '<span style="color:blue">Стільки не живуть</span>';
  } else {
    document.getElementById('funcRez').innerHTML = '<span style="color:red">Incorrect value</span>';
  }
}

;

function task2() {
  var num = document.getElementById('number').valueAsNumber;

  switch (num) {
    case 0:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ ")"</span>';
      break;

    case 1:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "!"</span>';
      break;

    case 2:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "@"</span>';
      break;

    case 3:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "#"</span>';
      break;

    case 4:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "$"</span>';
      break;

    case 5:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "%"</span>';
      break;

    case 6:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "^"</span>';
      break;

    case 7:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "&"</span>';
      break;

    case 8:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "*"</span>';
      break;

    case 9:
      document.getElementById('funcRez2').innerHTML = '<span style="color:purple">На цій клавіші розташований символ "("</span>';
      break;

    default:
      document.getElementById('funcRez2').innerHTML = '<span style="color:red">Incorrect value</span>';
  }
}

function task3() {
  var num1 = document.getElementById('num1').valueAsNumber;
  var num2 = document.getElementById('num2').valueAsNumber;
  var from = Math.min(num1, num2);
  var to = Math.max(num1, num2);
  var sum = 0;

  if (num1 === num2) {
    document.getElementById('funcRez3').innerHTML = '<span style="color:red">Numbers must be different</span>';
    return;
  } else if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('funcRez3').innerHTML = '<span style="color:red">Incorrect value</span>';
  }

  ;

  for (i = from; i <= to; i++) {
    sum += i;
  }

  ;
  document.getElementById('funcRez3').innerHTML = "<span style=\"color:green\">\u0421\u0443\u043C\u0430 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 \u0432\u0430\u0448\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sum, "</span>");
}

function task4() {
  var oneNum = Math.abs(document.getElementById('oneNum').valueAsNumber);
  var secNum = Math.abs(document.getElementById('secNum').valueAsNumber);
  var min = oneNum < secNum ? oneNum : secNum;
  var devRez = 1;

  if (isNaN(oneNum) || isNaN(secNum)) {
    document.getElementById('funcRez4').innerHTML = "<span style=\"color:red\">Incorrect value</span>";
    return;
  } else if (oneNum === 0 && secNum === 0) {
    document.getElementById('funcRez4').innerHTML = "<span style=\"color:red\">\u0414\u0456\u043B\u0438\u0442\u0438 \u043D\u0430 0 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430</span>";
    return;
  } else if (!Number.isInteger(oneNum) || !Number.isInteger(secNum)) {
    document.getElementById('funcRez4').innerHTML = "<span style=\"color:red\">\u0427\u0438\u0441\u043B\u0430 \u043C\u0430\u044E\u0442\u044C \u0431\u0443\u0442\u0438 \u0446\u0456\u043B\u0438\u043C\u0438</span>";
    return;
  }

  ;

  for (var dev = 1; dev <= min; dev++) {
    if (oneNum % dev === 0 && secNum % dev === 0) {
      devRez = dev;
    }

    ;
  }

  ;
  document.getElementById('funcRez4').innerHTML = "<span style=\"color:orange\">\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A: ".concat(devRez, "</span>");
}

;

function task5() {
  var numForDev = document.getElementById('numForDev').valueAsNumber;
  var i = numForDev;
  var devisors = '';

  if (isNaN(numForDev)) {
    document.getElementById('funcRez5').innerHTML = "<span style=\"color:red\">Incorrect value</span>";
    return;
  } else if (!Number.isInteger(numForDev)) {
    document.getElementById('funcRez5').innerHTML = "<span style=\"color:red\">\u0427\u0438\u0441\u043B\u043E \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0446\u0456\u043B\u0438\u043C</span>";
    return;
  } else if (numForDev === 0) {
    document.getElementById('funcRez5').innerHTML = "<span style=\"color:red\">\u041D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0432\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 0</span>";
    return;
  }

  for (; i > 0; i--) {
    if (numForDev % i == 0) {
      devisors += i + '; ';
    }

    ;
  }

  document.getElementById('funcRez5').innerHTML = "<span style=\"color:brown\">\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0430\u043C\u0438 \u0432\u0430\u0448\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0454 ".concat(devisors, "</span>");
}

;

function task6() {
  var fiveNum = document.getElementById('fiveNum').valueAsNumber;
  var aNum = parseInt(fiveNum / 10000, 10);
  var bNum = Math.trunc(fiveNum / 1000) % 10;
  var dNum = Math.trunc(fiveNum / 10) % 10;
  var eNum = fiveNum % 10;

  if (isNaN(fiveNum)) {
    document.getElementById('funcRez6').innerHTML = '<span style="color:red">Incorrect value</span>';
    return;
  } else if (fiveNum < 10000 || fiveNum > 99999) {
    document.getElementById('funcRez6').innerHTML = "<span style=\"color:red\">\u0426\u0435 \u043D\u0435 \u043F'\u044F\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E</span>";
    return;
  }

  ;

  if (aNum === eNum && bNum === dNum) {
    document.getElementById('funcRez6').innerHTML = '<span style="color:green">Ваше число є паліндромом</span>';
  } else {
    document.getElementById('funcRez6').innerHTML = '<span style="color:purple">Це не паліндром</span>';
  }

  ;
}

;

function task7() {
  var sumProd = document.getElementById('sumProd').valueAsNumber;
  var finishSum;

  if (isNaN(sumProd)) {
    document.getElementById('funcRez7').innerHTML = "<span style=\"color:red\">Incorrect value</span>";
    return;
  } else if (sumProd < 0) {
    document.getElementById('funcRez7').innerHTML = "<span style=\"color:red\">\u0412\u0456\u0434'\u0454\u043C\u043D\u043E\u0457 \u0441\u0443\u043C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438</span>";
    return;
  }

  if (sumProd > 199 && sumProd < 300) {
    finishSum = sumProd * 0.97;
  } else if (sumProd > 299 && sumProd < 500) {
    finishSum = sumProd * 0.95;
  } else if (sumProd > 499) {
    finishSum = sumProd * 0.93;
  } else {
    finishSum = sumProd;
  }

  ;
  document.getElementById('funcRez7').innerHTML = "<span style=\"color:orange\">\u0421\u0443\u043C\u0430 \u0434\u043E \u0441\u043F\u043B\u0430\u0442\u0438: ".concat(finishSum.toFixed(2), "\u0433\u0440\u043D</span>");
}

;

function task8() {
  var userNum10pcs = document.getElementById('userNum10pcs').value;
  var parts = userNum10pcs.split(/[\s,]+/).map(Number);
  var positiveNum = 0;
  var negativeNum = 0;
  var zero = 0;
  var evenNum = 0;
  var oddNum = 0;

  if (parts.some(function (num) {
    return isNaN(num);
  })) {
    document.getElementById('funcRez8').innerHTML = "<span style=\"color:red\">Incorrect value: \u0432\u0432\u0435\u0434\u0456\u0442\u044C \u043B\u0438\u0448\u0435 \u0447\u0438\u0441\u043B\u0430</span>";
    return;
  } else if (parts.some(function (num) {
    return !Number.isInteger(num);
  })) {
    document.getElementById('funcRez8').innerHTML = "<span style=\"color:red\">\u0427\u0438\u0441\u043B\u0430 \u043C\u0430\u044E\u0442\u044C \u0431\u0443\u0442\u0438 \u0446\u0456\u043B\u0438\u043C\u0438</span>";
    return;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _i = _step.value;

      if (_i > 0) {
        positiveNum++;
      } else if (_i < 0) {
        negativeNum++;
      } else {
        zero++;
      }

      _i % 2 === 0 ? evenNum++ : oddNum++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.getElementById('funcRez8').innerHTML = "<span style=\"color:darkgray\">\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 ".concat(positiveNum, " \u0434\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044C, ").concat(negativeNum, " \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044C, ").concat(zero, " \u043D\u0443\u043B\u0456\u0432, ").concat(evenNum, " \u043F\u0430\u0440\u043D\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044C \u0442\u0430 ").concat(oddNum, " \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044C</span>");
}

;

function task9() {
  var today = new Date();
  var dayOfWeek = today.getDay();
  var weekDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
  var currentDay = weekDays[dayOfWeek]; // TODO переписати на do while

  while (confirm("".concat(currentDay, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
    dayOfWeek = (dayOfWeek + 1) % 7;
    currentDay = weekDays[dayOfWeek];
  }
}

;

function task10() {
  var min = 0;
  var max = 100;
  var answear = '';

  while (true) {
    var mid = parseInt((min + max) / 2);
    answear = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(mid, ", \u0430\u0431\u043E < ").concat(mid, ", \u0430\u0431\u043E = ").concat(mid, "?"));

    if (answear === '<') {
      max = mid - 1;
    } else if (answear === '>') {
      min = mid + 1;
    } else if (answear === '=') {
      alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E = ".concat(mid));
      return;
    } else if (answear !== '=' && answear !== '<' && answear !== '>') {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
    }
  }
}

;

function task11() {
  for (var a = 2; a < 10; a++) {
    for (var b = 1; b <= 10; b++) {
      document.getElementById('funcRez11').innerHTML += "<div>".concat(a, " * ").concat(b, " = ").concat(a * b, "</div>");
    }

    document.getElementById('funcRez11').innerHTML += "<span>=======</span>";
  }
}

;

function task12() {
  var userDate = document.getElementById('userDate').value;
  var day = parseInt(userDate.substring(0, 2));
  var month = parseInt(userDate.substring(3, 5));
  var year = parseInt(userDate.substring(6, 10));

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    document.getElementById('funcRez12').innerHTML = "<span style=\"color:red\">\u0422\u0430\u043A\u043E\u0457 \u0434\u0430\u0442\u0438 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454</span>";
    return;
  } else if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementById('funcRez12').innerHTML = "<span style=\"color:red\">Incorrect value</span>";
    return;
  }

  var startDate = new Date(year, month - 1, day); // Збільшуємо день

  startDate.setDate(startDate.getDate() + 1); // Виводимо як дату

  document.getElementById('funcRez12').innerText = "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0430\u0442\u0430: ".concat(startDate.toLocaleDateString());
}

;