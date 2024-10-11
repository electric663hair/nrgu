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

    var childrenCheering = new Audio('./resourcres/sound effects/kidsCheering.mp3');
    var sadMusic = new Audio('./resourcres/sound effects/sad.mp3');
    var blackGuyCryingMEME = new Audio('./resourcres/sound effects/amped-blackGuyCryingMEME.mp3');

    if (inputDay === day) {
        document.getElementById('ja').style.display = "block";
        document.getElementById('nei').style.display = "none";
        document.querySelector("html").style.backgroundImage =  "url('./resourcres/happy-cat-cat.gif')"
        document.querySelector("h1").style.color = "black";
        
        childrenCheering.play();
        childrenCheering.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

    } else {
        document.getElementById('nei').style.display = "block";
        document.getElementById('ja').style.display = "none";
        document.querySelector("html").style.backgroundImage =  "url('./resourcres/crying-guy.gif')"

        sadMusic.volume = 0.25;
        sadMusic.play();
        sadMusic.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

        blackGuyCryingMEME.play();
        blackGuyCryingMEME.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);


    }

    document.getElementById('dag').innerHTML = day;
}

function closeWindow() {
  window.top.opener = null;
  window.close();
}

var drumRoll = new Audio('./resourcres/sound effects/drumroll.mp3');

function countdown(seconds) {
    const countdownaaaa = document.getElementById("countdown")

    document.getElementById('countdownBtn').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
    document.getElementById('no-text').style.display = 'none';
    countdownaaaa.style.display = 'block';

    drumRoll.play();

    seconds += 1;

    const yourmom = setInterval(countdownProcess, 1300);
    function countdownProcess() {
        seconds -= 1;
        document.getElementById('countdown').innerHTML = seconds;
        
        if (seconds == 3) {
            countdownaaaa.style.fontSize = "10rem"
        }   else if (seconds == 2) {
            countdownaaaa.style.fontSize = "13rem"
        }   else if (seconds == 1) {
            countdownaaaa.style.fontSize = "18rem"
        }
        

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