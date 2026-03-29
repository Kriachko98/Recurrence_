document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="room"]');
    const sections = document.querySelectorAll('.room-grid');

    function showSection(id) {
        // скрыть все
        sections.forEach(section => {
            section.classList.add('displayNone');
        });

        // показать нужную
        const target = document.querySelector(`.${id}-wrap`);
        if (target) {
            target.classList.remove('displayNone');
        }
    }

    // показать при загрузке
    const checked = document.querySelector('input[name="room"]:checked');
    if (checked) {
        showSection(checked.id);
    }

    // переключение
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            showSection(radio.id);
        });
    });
});