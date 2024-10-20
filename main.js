const dBody = document.body;

// ===== Checks if the file is run from the root directory or not
const currentPath = window.location.pathname;

if (currentPath !== "/") {
    // ===== Creates the Backbutton on the page
    const backButton = document.createElement("a");
    backButton.classList.add("backButton")
    backButton.innerText = "Tilbake";
    backButton.href = "..";
    dBody.insertBefore(backButton, dBody.firstChild);
}

function makeFooter(creators) {
    
    const footerDiv = document.createElement("div");
    
    footerDiv.innerHTML = "<div class='footer'><h4>Laget av " + creators + " i 9R på NRGu Sandvika</h4></div>"

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