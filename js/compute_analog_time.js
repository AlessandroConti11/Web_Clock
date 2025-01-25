const date = document.querySelector('.date'),
    day = document.querySelector('.day'),
    session = document.querySelector('.session'),
    hour_hand = document.querySelector('.hour-hands'),
    minute_hand = document.querySelector('.minute-hands'),
    second_hand = document.querySelector('.second-hands');

let week_day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


function show_analog_time() {
    let current_date = new Date(),
        hours = current_date.getHours(),
        minutes = current_date.getMinutes(),
        seconds = current_date.getSeconds(),
        sessions = hours >= 12 ? "PM" : "AM";

    date.textContent = current_date.getFullYear() + "-" + (current_date.getMonth() + 1) + "-" + current_date.getDate();
    day.textContent = week_day[current_date.getDay()];

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
    }
    session.textContent = sessions;

    hour_hand.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
    minute_hand.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds * 0.1}deg)`;
    second_hand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;

    setTimeout(show_analog_time, 1000);
}


window.addEventListener('load', () => {
    create_analog_clock_element();
    show_analog_time();
});

window.addEventListener('resize', () => {
    create_analog_clock_element();
});