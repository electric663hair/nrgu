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


//  |   Code below is made by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com
//  V   This is for findig out which week the client currently is in
Date.prototype.getWeek = function (dowOffset) {
    
        dowOffset = typeof(dowOffset) == 'number' ? dowOffset : 0; //default dowOffset to zero
        var newYear = new Date(this.getFullYear(),0,1);
        var day = newYear.getDay() - dowOffset; //the day of week the year begins on
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((this.getTime() - newYear.getTime() - 
        (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
        var weeknum;
        //if the year starts before the middle of a week
        if(day < 4) {
            weeknum = Math.floor((daynum+day-1)/7) + 1;
            if(weeknum > 52) {
                nYear = new Date(this.getFullYear() + 1,0,1);
                nday = nYear.getDay() - dowOffset;
                nday = nday >= 0 ? nday : nday + 7;
                /*if the next year starts before the middle of
                  the week, it is week #1 of that year*/
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum+day-1)/7);
        }
        return weeknum;
    };

// Makes the h2 on the top display the current week of the year the clients comuter is in
const weekDisplay = document.querySelector("#weekDisplay")
if (window.location.href == "/dagsrutine/main/")
weekDisplay.innerText = "Uke " + new Date().getWeek();
