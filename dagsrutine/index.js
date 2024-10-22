function showMain(){
    // const main = document.querySelectorAll(".main-content");//for(leti=0;i<main.length; i++){//document.querySelectorAll(".main-content")[i].style.display="block"//}//document.querySelector("body").classList.remove("bg-img")//document.querySelector(".welcome-container").style.display = "none"//window.open("https://");
    open(window.location.href + "main")
}

const listItems = document.querySelectorAll("li")

for (let i = 0; i < listItems.length; i++){
    listItems[i].appendChild( document.createElement("span"))
}

const checkBoks = document.querySelectorAll("span");
var count = 0;

for (var i = 0; i < checkBoks.length; i++){

     for (var bever = 0; bever < 7; bever++){
        count ++;
        var newCheckBox = document.createElement("input");
        newCheckBox.type = "checkbox" ;
        newCheckBox.classList.add("fin-boks");
        newCheckBox.name = count;
        checkBoks[i].appendChild(newCheckBox);
     }

}

function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        localStorage.setItem(checkbox.name, checkbox.checked);
    });
}

function loadCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        const isChecked = localStorage.getItem(checkbox.name) === 'true';
        checkbox.checked = isChecked;
    });
}

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', saveCheckboxState);
});

window.addEventListener('load', loadCheckboxState);