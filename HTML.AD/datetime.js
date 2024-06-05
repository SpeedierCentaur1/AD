function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const formattedDateTime = now.toLocaleDateString('pl-PL', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();
