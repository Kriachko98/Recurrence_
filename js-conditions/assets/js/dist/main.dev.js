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