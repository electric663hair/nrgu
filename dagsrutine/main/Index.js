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
weekDisplay.innerText = "Uke " + new Date().getWeek();


function makeActivity() {
    var activity = document.getElementById("activity").value;
    var time = document.getElementById("time").value;
    var color = document.getElementById("colorPicker").value;
    const hverdagsListe = document.getElementById("hverdagListe");

    var liElement = document.createElement("li");
    liElement.innerText = `${activity}: ${time}`;
    liElement.classList.add(color);

    hverdagsListe.appendChild(liElement);
    liElement.classList.add("needsCheckbox")


  }

    document.getElementById("createActivityButton").addEventListener("click", function() {
        document.getElementById("lagreHverDag-btn").classList.remove("no-content")
        makeActivity();
    })

    function lagreHverDag() {
        const listItems = document.querySelectorAll("li.needsCheckbox");
        document.getElementById("lagreHverDag-btn").classList.add("no-content");
    
        listItems.forEach((item, index) => {
            // Only add checkboxes if the item doesn't already have them
            if (!item.querySelector("span")) {
                const checkboxContainer = document.createElement("span");
    
                for (var i = 0; i < 7; i++) {
                    var newCheckBox = document.createElement("input");
                    newCheckBox.type = "checkbox";
                    newCheckBox.classList.add("fin-boks");
                    newCheckBox.name = `checkbox-${index}-${i}`;
                    checkboxContainer.appendChild(newCheckBox);
                }
    
                item.appendChild(checkboxContainer);
                item.classList.remove("needsCheckbox");
            }
        });
    }