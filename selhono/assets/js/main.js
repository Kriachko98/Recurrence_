// Switching tabs in project.html
const radios = document.querySelectorAll('input[name="room"]');
const sections = document.querySelectorAll('.room-grid');

function showSection(id) {
    // hide all content
    sections.forEach(section => {
        section.classList.add('displayNone');
    });

    // show right info
    const target = document.querySelector(`.${id}-wrap`);
    if (target) {
        target.classList.remove('displayNone');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // show during loading
    const checked = document.querySelector('input[name="room"]:checked');
    if (checked) {
        showSection(checked.id);
    }

    // switching
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            showSection(radio.id);
        });
    });
});



// Changing checked radio for links in footer
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;

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