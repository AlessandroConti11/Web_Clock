const
    /**
     * Element that will hold the analog clock numbers.
     * @type {Element}
     */
    number_cycle = document.querySelector('.number-cycle');


/**
 * Function that creates the elements of the analog clock.
 */
function create_analog_clock_element() {
    /**
     * Variable that saves the size of the analog clock.
     * @type {number}
     */
    const clock_size = document.querySelector('.analog-clock').getBoundingClientRect().width;
    /**
     * Variable that saves the radius of the analog clock.
     * @type {number}
     */
    const radius = clock_size / 2 - 30;


    for (let i = 1; i <= 60; i++) {
        let span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.zIndex = '2';
        span.style.transformOrigin = "50% 45%"

        if (i % 5) {
            span.setAttribute('class', 'interval');
            span.style.height = `${radius * 0.002}rem`;
            span.style.transform = `rotate(${i * 6}deg) translate(0, -${radius + 5}px)`;
        }
        else {
            span.innerHTML = i / 5;
            span.style.fontSize = `${radius * 0.008}rem`;
            span.style.fontWeight = "bold";
            span.style.transform = `rotate(${i * 6}deg) translate(0, -${radius + 5}px) rotate(-${i * 6}deg)`;
        }

        number_cycle.appendChild(span);
    }
}


/**
 * Function that creates the elements of the stopwatch.
 */
function create_stopwatch_element() {
    stopwatch_time.innerHTML = "00:00:00:00"
    stopwatch_reset.setAttribute("style", "display: none;");
    stopwatch_lap.setAttribute("disabled", true);
    stopwatch_stop.setAttribute("style", "display: none;");

    stopwatch_laps.setAttribute("style", "display: flex;");
    stopwatch_laps.setAttribute("style", "text-align: center;");
    stopwatch_laps.setAttribute("style", "list-style: none;");
}