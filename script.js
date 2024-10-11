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
        document.getElementById('ja').style.display = "block";
        document.querySelector("html").style.backgroundImage =  "url('./resourcres/happy-cat-cat.gif')"
        document.querySelector("h1").style.color = "black";
    } else {
        document.getElementById('nei').style.display = "block";
         document.querySelector("html").style.backgroundImage =  "url('./resourcres/crying-guy.gif')"
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
            checkForDay('fredag')
        }
    }

}
function mattekalkulatorskatteikkemattekalkulator() {
    var konto = prompt("Hvor fattig er du?");
    const nettoLønnIMnd = prompt("Hvor mye legger du inn på kontoen din i måneden?");    
    const rente = prompt("Hvor mange prosent er renten?");


    console.log(`Før noe skjer:\n${konto}\n${nettoLønnIMnd}`)
    for (var i = 1; i <= 12; i++) {
        konto += konto * rente/100;
        konto += nettoLønnIMnd;
        console.log("\n=====" + i + "=====\n" + konto + " : " + nettoLønnIMnd)
    }
}