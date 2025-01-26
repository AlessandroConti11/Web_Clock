const digital_date = document.querySelector(".digital-date"),
    digital_day = document.querySelector(".digital-day"),
    digital_session = document.querySelector(".digital-session"),
    digital_hour = document.querySelector(".digital-hour"),
    digital_minute = document.querySelector(".digital-minute"),
    digital_second = document.querySelector(".digital-second");


function show_digital_time() {
    let current_date = new Date(),
        hours = current_date.getHours() % 12,
        minutes = current_date.getMinutes(),
        seconds = current_date.getSeconds(),
        sessions = hours >= 12 ? "PM" : "AM";

    digital_date.textContent = current_date.getFullYear() + "-" + (current_date.getMonth() + 1) + "-" + current_date.getDate();
    digital_day.textContent = week_day[current_date.getDay()];
    digital_session.textContent = sessions;

    digital_hour.textContent = hours;
    digital_minute.textContent = minutes;
    digital_second.textContent = seconds;

    setTimeout(show_digital_time, 1000);
}
