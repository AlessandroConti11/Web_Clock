const number_cycle = document.querySelector('.number-cycle');


function create_analog_clock_element() {
    number_cycle.innerHTML = "";

    const clockSize = document.querySelector('.analog-clock').getBoundingClientRect().width;
    const radius = clockSize / 2 - 30;


    for (let i = 1; i <= 60; i++) {
        let span = document.createElement('span');

        if (i % 5) {
            span.setAttribute('class', 'interval');
            span.style.height = `${radius * 0.005}px`;
        }
        else {
            span.innerHTML = i / 5;
            span.style.fontSize = `${radius * 0.008}rem`;
            span.style.fontWeight = "bold";
        }


        span.style.transform = `rotate(${i * 6}deg) translate(0, -${radius + 5}px)`;
        number_cycle.appendChild(span);
    }
}