"use strict";

// Minimum
var car = {
  Producer: "Volkswagen",
  Model: "Polo",
  Year: 2011,
  "Average speed km/h": 80,
  "Fuel tank capacity": 45,
  "Average fuel consumption l/100km": 6,
  Owners: 1,
  showInfo: function showInfo() {
    var rez = "<ul>";

    for (var key in this) {
      if (typeof this[key] !== "function") {
        rez += "<li><b>".concat(key, ":</b> ").concat(this[key], "</li>");
      }

      ;
    }

    ;
    rez += "</ul>";
    return document.getElementById("car_info").innerHTML = "".concat(rez);
  },
  calcTimeFuelForDistance: function calcTimeFuelForDistance(distance) {
    var neededHours = distance / this["Average speed km/h"];
    var neededFuel = distance / 100 * this["Average fuel consumption l/100km"];
    var rest = Math.floor(neededHours / 4);
    var finalHours = neededHours + rest;
    return {
      timeForDistance: finalHours.toFixed(2),
      fuelForDistance: neededFuel.toFixed(2)
    };
  }
};
car["Owner`s name"] = "Jonh";
car.showInfo();
console.log("".concat(Object.hasOwn(car, "Owner`s name")));

function calcDistanceValues() {
  var distance = document.getElementById("distance").valueAsNumber;
  var result = car.calcTimeFuelForDistance(distance);
  return document.getElementById("calcForDistance").innerHTML = "\u0414\u043B\u044F \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0457 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u0432\u0430\u043C \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F ".concat(result.timeForDistance, " \u0433\u043E\u0434\u0438\u043D \u0456 ").concat(result.fuelForDistance, " \u043B\u0456\u0442\u0440\u0456\u0432 \u043F\u0430\u043B\u0438\u0432\u0430");
} // Normal


function msToTime(value) {
  var date = new Date(value);
  var hours = String(date.getHours()).padStart(2, "0");
  var minutes = String(date.getMinutes()).padStart(2, "0");
  var seconds = String(date.getSeconds()).padStart(2, "0");
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}

var fullTime = new Date();
var changeTime = {
  hours: fullTime.getHours(),
  minutes: fullTime.getMinutes(),
  seconds: fullTime.getSeconds(),
  showTime: function showTime() {
    return document.getElementById("timeRez").innerHTML = "\u0417\u0430\u0440\u0430\u0437 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0443 ".concat(changeTime.hours, ":").concat(changeTime.minutes, ":").concat(changeTime.seconds);
  },
  addSec: function addSec() {
    var sec = document.getElementById("addSec").valueAsNumber;
    var newSecTime = fullTime.getTime() + sec * 1000;
    var finalTime = msToTime(newSecTime);
    document.getElementById("secRez").innerHTML = "\u0417 \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F\u043C \u0432\u0430\u0448\u0438\u0445 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0443 ".concat(finalTime);
  },
  addMin: function addMin() {
    var min = document.getElementById("addMin").valueAsNumber;
    var newSecTime = fullTime.getTime() + min * 60000;
    var finalTime = msToTime(newSecTime);
    document.getElementById("minRez").innerHTML = "\u0417 \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F\u043C \u0432\u0430\u0448\u0438\u0445 \u043C\u0456\u043D\u0443\u0442 \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0443 ".concat(finalTime);
  },
  addHrs: function addHrs() {
    var hrs = document.getElementById("addHrs").valueAsNumber;
    var newSecTime = fullTime.getTime() + hrs * 60000 * 60;
    var finalTime = msToTime(newSecTime);
    document.getElementById("hrsRez").innerHTML = "\u0417 \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F\u043C \u0432\u0430\u0448\u0438\u0445 \u0433\u043E\u0434\u0438\u043D \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u0443 ".concat(finalTime);
  }
};
console.log(fullTime);
console.log(changeTime);
changeTime.showTime();