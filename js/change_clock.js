const
    /**
     * Element that represent the title.
     * @type {Element}
     */
    clock_type = document.querySelector('.clock-type'),
    /**
     * Element that represent the analog clock.
     * @type {Element}
     */
    analog_clock = document.querySelector('.analog-clock'),
    /**
     * Element that represent the digital clock.
     * @type {Element}
     */
    digital_clock = document.querySelector('.digital-clock');


/**
 * Function that change the clock type to display.
 */
function change_clock() {
    if (clock_type.textContent === 'Analog Clock') {
        analog_clock.style.display = 'none';
        clock_type.textContent = 'Digital Clock';
        digital_clock.style.display = 'flex';
    }
    else if (clock_type.textContent === 'Digital Clock') {
        analog_clock.style.display = 'flex';
        clock_type.textContent = 'Analog Clock';
        digital_clock.style.display = 'none';

        create_analog_clock_element();
    }
}


window.addEventListener('load', () => {
    create_analog_clock_element();

    show_analog_time();
    show_digital_time();
});

window.addEventListener('resize', () => {
    number_cycle.innerHTML = '';

    create_analog_clock_element();
});