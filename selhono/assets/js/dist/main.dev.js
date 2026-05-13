"use strict";

// Switching tabs in project.html
var radios = document.querySelectorAll('input[name="room"]');
var sections = document.querySelectorAll('.room-grid');

function showSection(id) {
  // hide all content
  sections.forEach(function (section) {
    section.classList.add('displayNone');
  }); // show right info

  var target = document.querySelector(".".concat(id, "-wrap"));

  if (target) {
    target.classList.remove('displayNone');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // show during loading
  var checked = document.querySelector('input[name="room"]:checked');

  if (checked) {
    showSection(checked.id);
  } // switching


  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      showSection(radio.id);
    });
  });
}); // Changing checked radio for links in footer

window.addEventListener('DOMContentLoaded', function () {
  var hash = window.location.hash;

  if (hash === '#kitchen-anchor') {
    document.getElementById('kitchen').checked = true;
    showSection('kitchen');
  } else if (hash === '#living-anchor') {
    document.getElementById('livingroom').checked = true;
    showSection('livingroom');
  } else if (hash === '#bathroom-anchor') {
    document.getElementById('bathroom').checked = true;
    showSection('bathroom');
  } else if (hash === '#bedroom-anchor') {
    document.getElementById('bedroom').checked = true;
    showSection('bedroom');
  }
});