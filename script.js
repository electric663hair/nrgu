function checkForDay(inputDay) {
    dayOfWeek = new Date().getDay();
    
    if (dayOfWeek == 0) {
        day = "søndag"
    } else if (dayOfWeek == 1) {
        day = "mandag"
    } else if (dayOfWeek == 2) {
        day = "tirsdag"
    } else if (dayOfWeek == 3) {
        day = "onsdag"
    } else if (dayOfWeek == 4) {
        day = "torsdag"
    } else if (dayOfWeek == 5) {
        day = "fredag"
    } else if (dayOfWeek == 6) {
        day = "lørdag"
    }

    if (inputDay === day) {
        document.getElementById('value').innerHTML = "Ja!"
        document.getElementById('value').style.color = "green";
    } else {
        document.getElementById('value').innerHTML = "Nei\n:("
        document.getElementById('value').style.color = "red";
    }

    document.getElementById('dag').innerHTML = day;
}
