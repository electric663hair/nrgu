function checkForDay(inputDay) {
    dayOfWeek = new Date().getDay();
    
    if (dayOfWeek == 0) {
        day = "sunday"
    } else if (dayOfWeek == 1) {
        day = "monday"
    } else if (dayOfWeek == 2) {
        day = "tuesday"
    } else if (dayOfWeek == 3) {
        day = "wednesday"
    } else if (dayOfWeek == 4) {
        day = "thursday"
    } else if (dayOfWeek == 5) {
        day = "friday"
    } else if (dayOfWeek == 6) {
        day = "saturday"
    }

    if (inputDay === day) {
        document.getElementById('value').innerHTML = "Ja!"
        document.getElementById('value').style.color = "green";
    } else {
        document.getElementById('value').innerHTML = "Nei\n:("
        document.getElementById('value').style.color = "red";
    }
}
