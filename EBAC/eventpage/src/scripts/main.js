AOS.init();

const eventDate = new Date("Mar 31, 2025 21:00:00");
const timeStampEvent = eventDate.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const eventDistance = timeStampEvent - nowTimeStamp;

    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minuteMs = 1000 * 60;

    const daysUntilEvent = Math.floor(eventDistance / dayMs);
    const hoursUntilEvent = Math.floor((eventDistance % dayMs) / hourMs);
    const minutesUntilEvent = Math.floor((eventDistance % hourMs) / minuteMs);
    const secondsUntilEvent = Math.floor((eventDistance % minuteMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (eventDistance < 0) {
        clearInterval(countHours);
        document.getElementById('counter').innerHTML = 'Evento finalizado.';
    }

}, 1000);