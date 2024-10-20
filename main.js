// ===== Checks if the file is run from the root directory or not
const currentPath = window.location.pathname;

if (currentPath !== "/") {
    // ===== Creates the Backbutton on the page
    const backButton = document.createElement("a");
    backButton.classList.add("backButton")
    backButton.innerText = "Tilbake";
    backButton.href = "..";
    const dBody = document.body
    dBody.insertBefore(backButton, dBody.firstChild);
}