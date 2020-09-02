let getMonthName = (month_index) => {
    let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return months[month_index];
}

let getSupForDate = (date) => {
    if(date === 1 || date === 21 || date === 31){
        return "st";
    }
    else if(date === 2 || date === 22 || date === 32){
        return "nd";
    }
    else if(date === 3 || date === 23){
        return "rd";
    }
    else{
        return "th";
    }
}


let getSuitableHour = (hour) => {
    if(hour > 12) {
        return hour - 12;
    }
    return hour;
}

let getCurrentWeekDay = (day) => {
    if(day === 0){
        document.getElementById('sunday').classList.add("current-day");
    }
    if(day === 1){
        document.getElementById('monday').classList.add("current-day");
    }
    if(day === 2){
        document.getElementById('tuesday').classList.add("current-day");
    }
    if(day === 3){
        document.getElementById('wednesday').classList.add("current-day");
    }
    if(day === 4){
        document.getElementById('thursday').classList.add("current-day");
    }
    if(day === 5){
        document.getElementById('friday').classList.add("current-day");
    }
    if(day === 6){
        document.getElementById('saturday').classList.add("current-day");
    }
}

let mainDateTimeFunction = () => {
    let date = new Date();
  
    document.getElementById("year").innerHTML =  date.getFullYear();
    document.getElementById("month").innerHTML =  getMonthName(date.getMonth());
    document.getElementById("day").innerHTML =  date.getDate();
    document.getElementById("sup").innerHTML =  getSupForDate(date.getDate());

    document.getElementById("hours").innerHTML =  getSuitableHour(date.getHours());
    document.getElementById("minutes").innerHTML =  date.getMinutes() < 10 ? "0"+ date.getMinutes() : date.getMinutes();
    document.getElementById("seconds").innerHTML =  date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    document.getElementById("time_type").innerHTML =  date.getHours() > 12 ? "PM":"AM";

    getCurrentWeekDay(date.getDay())

    setTimeout(mainDateTimeFunction,1000);
}

mainDateTimeFunction();

