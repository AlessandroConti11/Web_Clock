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
    digital_clock = document.querySelector('.digital-clock'),
    /**
     * Element that represent the stopwatch.
     * @type {Element}
     */
    stopwatch_clock = document.querySelector('.stopwatch');


/**
 * Function that change the clock type to display.
 */
function change_clock() {
    switch (clock_type.textContent) {
        case 'Analog Clock':
            clock_type.textContent = 'Digital Clock';
            analog_clock.style.display = 'none';
            digital_clock.style.display = 'flex';
            stopwatch_clock.style.display = 'none';
            break;
        case 'Digital Clock':
            clock_type.textContent = 'Analog Clock';
            analog_clock.style.display = 'flex';
            digital_clock.style.display = 'none';
            stopwatch_clock.style.display = 'none';
            create_analog_clock_element();
            break;
        case 'Stopwatch':
            clock_type.textContent = "Analog Clock"
            analog_clock.style.display = 'flex';
            digital_clock.style.display = 'none';
            stopwatch_clock.style.display = 'none';
            create_analog_clock_element();
            break;
    }
}

/**
 * Function that show the stopwatch.
 */
function show_stopwatch() {
    clock_type.textContent = "Stopwatch";
    analog_clock.style.display = "none";
    digital_clock.style.display = 'none';
    stopwatch_clock.style.display = 'block';
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