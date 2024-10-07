function checkForDay(inputDay) {
    dayOfWeek = new Date().getDay();
    
    if (dayOfWeek == 0) {
        day = "sunday"
    } else if (dayOfWeek == 1) {
        day = "monday"
    } else if (dayOfWeek == 2) {
        day = "tuesday"
    } else if (dayOfWeek == 3) {
        day = "wednesday"
    } else if (dayOfWeek == 4) {
        day = "thursday"
    } else if (dayOfWeek == 5) {
        day = "friday"
    } else if (dayOfWeek == 6) {
        day = "saturday"
    }

    if (inputDay === day) {
        document.getElementById('value').innerHTML = "Yes"
        document.getElementById('value').style.color = "green";
    } else {
        document.getElementById('value').innerHTML = "No"
        document.getElementById('value').style.color = "red";
    }

    console.log("Today it is " + day);
    console.log("Today it is " + dayOfWeek);

}