const
    /**
     * Element that represent the date in the analog clock.
     * @type {Element}
     */
    analog_date = document.querySelector('.analog-date'),
    /**
     * Element that represent the week day in the analog clock.
     * @type {Element}
     */
    analog_day = document.querySelector('.analog-day'),
    /**
     * Element that represent the session in the analog day.
     * @type {Element}
     */
    analog_session = document.querySelector('.analog-session'),
    /**
     * Element that represent the hour hand of the analog clock.
     * @type {Element}
     */
    hour_hand = document.querySelector('.hour-hands'),
    /**
     * Element that represent the minute hand of the analog clock.
     * @type {Element}
     */
    minute_hand = document.querySelector('.minute-hands'),
    /**
     * Element that represent the second hand of the analog clock.
     * @type {Element}
     */
    second_hand = document.querySelector('.second-hands');

/**
 * Array of week day.
 * @type {string[]}
 */
const week_day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


/**
 * Function that show the time in the analog clock.
 */
function show_analog_time() {
    /**
     * The current date-time.
     * @type {Date}
     */
    let current_date = new Date(),
        hours = current_date.getHours(),
        minutes = current_date.getMinutes(),
        seconds = current_date.getSeconds(),
        sessions = hours > 12 ? "PM" : "AM";


    hours %= 12;

    analog_date.textContent = current_date.getFullYear() +
        "-" +
        (new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(current_date.getMonth() + 1)) +
        "-" +
        new Intl.NumberFormat('en-US', {minimumIntegerDigits: 2}).format(current_date.getDate());

    analog_day.textContent = week_day[current_date.getDay()];
    analog_session.textContent = sessions;

    hour_hand.setAttribute("style", `transform: translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg);`);
    minute_hand.setAttribute("style", `transform: translateX(-50%) rotate(${minutes * 6 + seconds * 0.1}deg);`);
    second_hand.setAttribute("style", `transform: translateX(-50%) rotate(${seconds * 6}deg);`);


    setTimeout(show_analog_time, 1000);
}
