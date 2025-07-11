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
}