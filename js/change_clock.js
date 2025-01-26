const clock_type = document.querySelector('.clock-type'),
    analog_clock = document.querySelector('.analog-clock'),
    digital_clock = document.querySelector('.digital-clock');


function change_clock() {
    if (clock_type.textContent === 'Analog Clock') {
        analog_clock.style.display = 'none';
        clock_type.textContent = 'Digital Clock';
        digital_clock.style.display = 'initial';

    }
    else if (clock_type.textContent === 'Digital Clock') {
        analog_clock.style.display = 'flex';
        clock_type.textContent = 'Analog Clock';
        digital_clock.style.display = 'none';
        create_analog_clock_element();
    }
}