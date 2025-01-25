const date = document.querySelector('.date'),
    day = document.querySelector('.day'),
    session = document.querySelector('.session'),
    hour_hand = document.querySelector('.hour-hands'),
    minute_hand = document.querySelector('.minute-hands'),
    second_hand = document.querySelector('.second-hands'),
    number_cycle = document.querySelector('.number-cycle');

let week_day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


window.addEventListener('load', () => {
    for (let i = 1; i <= 60; i++) {
        let span = document.createElement('span');

        if (i % 5) {
            span.setAttribute('class', 'interval');
        }
        else {
            span.innerHTML = i / 5;
        }
        span.style.transform = `rotate(${i * 6}deg)`;

        number_cycle.appendChild(span);
        show_time()
    }
});


function show_time() {
    let current_date = new Date(),
        hours = current_date.getHours(),
        minutes = current_date.getMinutes(),
        seconds = current_date.getSeconds(),
        sessions = hours >= 12 ? "PM" : "AM";


    date.textContent = current_date.getFullYear() + "-" + (current_date.getMonth() + 1) + "-" + current_date.getDate();
    day.textContent = week_day[current_date.getDay()]

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
    }
    session.textContent = sessions;

    hour_hand.style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`
    minute_hand.style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`
    second_hand.style.transform = `rotate(${seconds * 6}deg)`

    setTimeout(show_time, 1000)
}
