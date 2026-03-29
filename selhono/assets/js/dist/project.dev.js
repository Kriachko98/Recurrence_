"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var radios = document.querySelectorAll('input[name="room"]');
  var sections = document.querySelectorAll('.room-grid');

  function showSection(id) {
    // скрыть все
    sections.forEach(function (section) {
      section.classList.add('displayNone');
    }); // показать нужную

    var target = document.querySelector(".".concat(id, "-wrap"));

    if (target) {
      target.classList.remove('displayNone');
    }
  } // показать при загрузке


  var checked = document.querySelector('input[name="room"]:checked');

  if (checked) {
    showSection(checked.id);
  } // переключение


  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      showSection(radio.id);
    });
  });
});