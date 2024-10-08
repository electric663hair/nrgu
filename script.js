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

function closeWindow() {
  window.top.opener = null;
  window.close();
}

function countdown(seconds) {
    document.getElementById('countdownBtn').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.getElementById('no-text').style.display = 'none';
    document.getElementById('countdown').style.display = 'block';


    seconds += 1;

    const yourmom = setInterval(countdownProcess, 1000);
    function countdownProcess() {
        seconds -= 1;
        document.getElementById('countdown').innerHTML = seconds;

        if (seconds <= 0) {
            clearInterval(yourmom);
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('fridayCheck').style.display = 'block';
        }
    }

}
