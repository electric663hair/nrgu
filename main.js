let targetSubpage = '';

function showPrompt(subpage) {
    targetSubpage = subpage;
    console.log(targetSubpage + "\n" + subpage)

    document.getElementById('customPrompt').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function submitPassword() {
    const answer = document.getElementById('password').value;
    if (answer === "Enigma$") {
        console.log("Success!")
        console.log(targetSubpage)
        window.location.href = `/${targetSubpage}/`;
        closePrompt();
    } else {
        alert('Incorrect password!\nTry again');
    }

    document.getElementById('password').value = '';
}

function closePrompt() {
    document.getElementById('customPrompt').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


const dBody = document.body;

var softClick = new Audio("/resourcres/soundeffects/softClick-Amplified.wav");

// ===== Makes the tab key not able to select elements on the website
document.addEventListener('keydown', function(event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

// ===== Checks if the file is run from the root directory or not
const currentPath = window.location.pathname;

if (currentPath !== "/") {
    if (currentPath !== "/dagsrutine/"  && currentPath !== "/dagsrutine/main/") {
        // ===== Creates the Backbutton on the any subpage except "dagsrutine" because it has its own backButton
        const backButton = document.createElement("a");
        backButton.classList.add("backButton")
        backButton.innerText = "Tilbake";
        backButton.href = "/";
        dBody.insertBefore(backButton, dBody.firstChild);
    }

    document.addEventListener("keydown", function(event) {
        if (event.key == "Escape" || event.key == "Tab") {
            window.location.href = "/";
        } else if (event.key == "Enter") {
            const enterElement = document.querySelector(".clickOnEnter");
            enterElement.click();
            enterElement.getAttribute("onclick");
            eval(enterElement)
        }
    })
} else if (currentPath == "/") {
    document.addEventListener("keydown", function(event) {
        const cards = document.querySelectorAll(".card");
        for (var i = 0; i < cards.length; i++) {
            if (event.key == i+1) {
                if (cards[i].getAttribute("onclick")) {
                    window.location.href = cards[i].getAttribute("onclick").match(/'(.*?)'/)[1];;
                }
            }   
        }
    })
}

function makeFooter(creators) {
    
    const footerDiv = document.createElement("div");
    
    footerDiv.innerHTML = "<div class='footer'><h4>Laget av " + creators + " i 9R på NRG-u Sandvika</h4></div>"

    // footerDiv.classList.add("footer");
    
    // const footerH4 = document.createElement("h4");
    // footerH4.innerHTML = "<h4>Laget av " + creators + " i 9R på NRGu Sandvika</h4>";

    // footerDiv.appendChild(footerH4);
    dBody.appendChild(footerDiv);

}
makeFooter('Aron og Mark');

// ===== For Popups DO NOT CHANGE!!! === important!
function togglePopup(element) {
    element.children[1].classList.toggle("show");
    setTimeout(function () {
        element.children[1].classList.toggle("show");
    }, 1500);
}