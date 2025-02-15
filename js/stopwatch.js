const
    /**
     * Element that represent the stopwatch time.
     * @type {Element}
     */
    stopwatch_time = document.querySelector(".stopwatch-time"),
    /**
     * Element that start the stopwatch.
     * @type {Element}
     */
    stopwatch_start = document.querySelector(".stopwatch-start"),
    /**
     * Element that stop the stopwatch.
     * @type {Element}
     */
    stopwatch_stop = document.querySelector(".stopwatch-stop"),
    /**
     * Element that lap the stopwatch.
     * @type {Element}
     */
    stopwatch_lap = document.querySelector(".stopwatch-lap"),
    /**
     * Element that reset the stopwatch.
     * @type {Element}
     */
    stopwatch_reset = document.querySelector(".stopwatch-reset"),
    /**
     * Element that show the list of laps.
     * @type {Element}
     */
    stopwatch_laps = document.querySelector(".stopwatch-laps");

let
    /**
     * Element that represent the hour in the stopwatch.
     * @type {number}
     */
    stopwatch_hour = 0,
    /**
     * Element that represent the minute in the stopwatch.
     * @type {number}
     */
    stopwatch_minute = 0,
    /**
     * Element that represent the second in the stopwatch.
     * @type {number}
     */
    stopwatch_second = 0,
    /**
     * Element that represent the millisecond in the stopwatch.
     * @type {number}
     */
    stopwatch_millisecond = 0,
    /**
     * Element that set the stopwatch interval.
     */
    time_interval,
    /**
     * Element that count the number of lap.
     * @type {number}
     */
    lap_count = 0;


/**
 * Function that start the stopwatch.
 */
function start_stopwatch() {
    time_interval = setInterval(() => {
        stopwatch_millisecond++;

        if(stopwatch_millisecond === 100) {
            stopwatch_millisecond = 0;
            stopwatch_second++;
        }
        if (stopwatch_second === 60) {
            stopwatch_second = 0;
            stopwatch_minute++;
        }
        if (stopwatch_minute === 60) {
            stopwatch_minute = 0;
            stopwatch_hour++;
        }

        stopwatch_hour = (new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(stopwatch_hour));
        stopwatch_minute = (new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(stopwatch_minute))
        stopwatch_second = (new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(stopwatch_second));
        stopwatch_millisecond = (new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(stopwatch_millisecond));
        stopwatch_time.innerHTML = `${stopwatch_hour}:${stopwatch_minute}:${stopwatch_second}:${stopwatch_millisecond}`;

        stopwatch_start.setAttribute("style", "display: none;");
        stopwatch_stop.setAttribute("style", "display: block;");
        stopwatch_lap.removeAttribute("disabled")
        stopwatch_lap.setAttribute("style", "display: block;");
        stopwatch_reset.setAttribute("style", "display: none;");
    }, 10)
}


/**
 * Function that stop the stopwatch.
 */
function stop_stopwatch() {
    clearInterval(time_interval);

    stopwatch_start.setAttribute("style", "display: block;");
    stopwatch_start.innerHTML = "Resume";
    stopwatch_stop.setAttribute("style", "display: none;");
    stopwatch_lap.setAttribute("style", "display: none;");
    stopwatch_reset.setAttribute("style", "display: block;");
}


/**
 * Function that save the stopwatch lap.
 */
function lap_stopwatch() {
    lap_count++;
    let li = document.createElement("li");

    li.innerHTML = `${"#" + lap_count} - ${stopwatch_hour}:${stopwatch_minute}:${stopwatch_second}:${stopwatch_millisecond}`;
    stopwatch_laps.appendChild(li);
    stopwatch_laps.scroll({top: stopwatch_laps.scrollHeight, behavior: "smooth"})
}


/**
 * Function that reset the stopwatch.
 */
function reset_stopwatch() {
    stopwatch_laps.innerHTML = "";
    stopwatch_hour = stopwatch_minute = stopwatch_second = stopwatch_millisecond = lap_count = 0;
    clearInterval(time_interval);
    stopwatch_time.innerHTML = "00:00:00:00";

    stopwatch_start.innerHTML = "Start";
    stopwatch_start.setAttribute("style", "display: block;");
    stopwatch_lap.setAttribute("style", "display: block;");
    stopwatch_lap.setAttribute("disabled", true);
    stopwatch_reset.setAttribute("style", "display: none;");
    stopwatch_stop.setAttribute("style", "display: none;");
}