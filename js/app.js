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

// Funzione per creare tacche e numeri adattivi
function createClockElements() {
    number_cycle.innerHTML = ""; // Pulisce il contenitore per ridisegnare
    const clockSize = document.querySelector('.analog-clock').getBoundingClientRect().width; // Dimensione dinamica dell'orologio
    const radius = clockSize / 2 - 30; // Raggio per posizionare i numeri e tacche (ridotto per rientrare nel bordo)

    for (let i = 1; i <= 60; i++) {
        let span = document.createElement('span');
        if (i % 5) {
            span.setAttribute('class', 'interval');
            span.style.height = `${radius * 0.005}px`; // Altezza dinamica delle tacche
        } else {
            span.innerHTML = i / 5;
            span.style.fontSize = `${radius * 0.008}rem`; // Dimensione dinamica dei numeri
            span.style.fontWeight = "bold";
        }
        // Posizionamento dinamico usando il raggio
        span.style.transform = `rotate(${i * 6}deg) translate(0, -${radius + 5}px)`;
        number_cycle.appendChild(span);
    }
}


// Funzione per mostrare l'ora
function show_time() {
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

    // Aggiorna le posizioni delle mani dell'orologio
    hour_hand.style.transform = `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`;
    minute_hand.style.transform = `translateX(-50%) rotate(${minutes * 6 + seconds * 0.1}deg)`;
    second_hand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;

    setTimeout(show_time, 1000);
}

// Event listener per il caricamento della finestra
window.addEventListener('load', () => {
    createClockElements(); // Disegna i numeri e tacche
    show_time(); // Mostra l'ora
});

// Event listener per il ridimensionamento della finestra
window.addEventListener('resize', () => {
    createClockElements(); // Ridisegna l'orologio in modo adattivo
});