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


document.getElementById("toDoADayBtn").addEventListener("click", function() {
    const form = document.getElementById("hverDagForm");

    if (form.checkValidity()) {

        document.getElementById("lagreHverDag-btn").classList.remove("no-content")
        makeActivity(0);
    } else {

        form.reportValidity();
    }

})

document.getElementById("threeADayBtn").addEventListener("click", function() {
    const form = document.getElementById("treOmDagenForm");

    if (form.checkValidity()) {

        document.getElementById("lagreTreOmDagen-btn").classList.remove("no-content")
        makeActivity(1);
    } else {

        form.reportValidity();
    }

})

function addCheckboxes(inputValue) {
    let listItems;
    if (inputValue === 0) {
        document.getElementById("lagreHverDag-btn").classList.add("no-content");
        listItems = document.querySelectorAll("ul#hverDagListe > li.needsCheckbox");
    } else if (inputValue === 1) {
        document.getElementById("lagreTreOmDagen-btn").classList.add("no-content");
        listItems = document.querySelectorAll("ul#treOmDagenListe > li.needsCheckbox");
    } else {
        alert("Add checkbox-button not found");
        return;
    }

    // Loop through each list item and prepend the trashcan icon
    listItems.forEach((item) => {
        // Prepend the trashcan image to each list item

        var trashcanSvg = document.createElement("img");
        trashcanSvg.src = "../../resourcres/trashbin.svg";
        trashcanSvg.draggable = false;
        trashcanSvg.alt = "Trashcan symbol (.svg)"
        trashcanSvg.classList.add("trashcanSvg");
        trashcanSvg.onclick = "deleteListElement()"

        item.prepend(trashcanSvg);

        // Only add checkboxes if the item doesn't already have them
        if (!item.querySelector("span")) {
            const checkboxContainer = document.createElement("span");

            for (var i = 0; i < 7; i++) {
                var newCheckBox = document.createElement("input");
                newCheckBox.type = "checkbox";
                newCheckBox.classList.add("fin-boks");
                newCheckBox.name = `checkbox-${i}`;
                checkboxContainer.appendChild(newCheckBox);
            }

            item.appendChild(checkboxContainer);
            item.classList.remove("needsCheckbox");
        }
    });
    saveData()
}

function saveData() {
    const list = document.querySelector("ul#hverDagListe");
    // Save the inner HTML as a string
    localStorage.setItem('listHTML', list.innerHTML);
}

function loadData() {
    const savedHTML = localStorage.getItem('listHTML');
    
    if (savedHTML) {
        const list = document.querySelector("ul#hverDagListe");
        // Restore the saved HTML directly into the list
        list.innerHTML = savedHTML;
    } else {
        console.log("No data found in localStorage.");
    }
}
    

function makeActivity(inputValue) {
    var activity = document.getElementById("activity"+inputValue).value;
    var time = document.getElementById("time"+inputValue).value;
    var color = document.getElementById("colorPicker"+inputValue).value;
    if (inputValue == 0) {
        var UnorderedList = document.getElementById("hverDagListe");
    } else if (inputValue == 1) {
        var UnorderedList = document.getElementById("treOmDagenListe");
    } else {
        var UnorderedList = null;
        alert("Error finding a list to place activity in!")
    }

    var liElement = document.createElement("li");
    liElement.innerHTML = `<div class="activityDiv">${activity}: ${time}</div>`;
    liElement.classList.add(color);

    liElement.classList.add("needsCheckbox")
    UnorderedList.appendChild(liElement);

}

function deleteListElement() {
    this.parentElement.remove();
    saveData()
}