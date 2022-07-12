// Variable to display current day
var currentDayEl = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDayEl);
// variable to get current hour in 24 hour interval
var currentTimeEl = parseInt(moment().hour());

// variables to display time
var hour9El = moment().hour(9).format("h A");
$("#hour9").text(hour9El);
var hour10El = moment().hour(10).format("h A");
$("#hour10").text(hour10El);
var hour11El = moment().hour(11).format("h A");
$("#hour11").text(hour11El);
var hour12El = moment().hour(12).format("h A");
$("#hour12").text(hour12El);
var hour13El = moment().hour(13).format("h A");
$("#hour13").text(hour13El);
var hour14El = moment().hour(14).format("h A");
$("#hour14").text(hour14El);
var hour15El = moment().hour(15).format("h A");
$("#hour15").text(hour15El);
var hour16El = moment().hour(16).format("h A");
$("#hour16").text(hour16El);
var hour17El = moment().hour(17).format("h A");
$("#hour17").text(hour17El);

// color change variables
var color9 = 9
var color10 = 10
var color11 = 11
var color12 = 12
var color13 = 13
var color14 = 14
var color15 = 15
var color16 = 16
var color17 = 17

// Color change function
function changeColor(){
    // 9 am color change
    if (color9 == currentTimeEl) {
        $("#userInput9").addClass("present");
    } else if (color9 < currentTimeEl) {
        $("#userInput9").addClass("past");
    } else {
        $("#userInput9").addClass("future");
    }
    // 10 am color change
    if (color10 == currentTimeEl) {
        $("#userInput10").addClass("present");
    } else if (color10 < currentTimeEl) {
        $("#userInput10").addClass("past");
    } else {
        $("#userInput10").addClass("future");
    }
    // 11 am color change
    if (color11 == currentTimeEl) {
        $("#userInput11").addClass("present");
    } else if (color11 < currentTimeEl) {
        $("#userInput11").addClass("past");
    } else {
        $("#userInput11").addClass("future");
    }
    // 12 pm color change
    if (color12 == currentTimeEl) {
        $("#userInput12").addClass("present");
    } else if (color12 < currentTimeEl) {
        $("#userInput12").addClass("past");
    } else {
        $("#userInput12").addClass("future");
    }
    // 1 pm color change
    if (color13 == currentTimeEl) {
        $("#userInput13").addClass("present");
    } else if (color13 < currentTimeEl) {
        $("#userInput13").addClass("past");
    } else {
        $("#userInput13").addClass("future");
    }
    // 2 pm color change
    if (color14 == currentTimeEl) {
        $("#userInput14").addClass("present");
    } else if (color14 < currentTimeEl) {
        $("#userInput14").addClass("past");
    } else {
        $("#userInput14").addClass("future");
    }
    // 3 pm color change
    if (color15 == currentTimeEl) {
        $("#userInput15").addClass("present");
    } else if (color15 < currentTimeEl) {
        $("#userInput15").addClass("past");
    } else {
        $("#userInput15").addClass("future");
    }
    // 4 pm color change
    if (color16 == currentTimeEl) {
        $("#userInput16").addClass("present");
    } else if (color16 < currentTimeEl) {
        $("#userInput16").addClass("past");
    } else {
        $("#userInput16").addClass("future");
    }
    // 5 pm color change
    if (color17 == currentTimeEl) {
        $("#userInput17").addClass("present");
    } else if (color17 < currentTimeEl) {
        $("#userInput17").addClass("past");
    } else {
        $("#userInput17").addClass("future");
    }
}
changeColor();

// Save Button Variable
var saveBtnElList = document.querySelectorAll(".saveBtn");
// User Input Vaiables
var userInput9El = document.getElementById("userInput9");
var userInput10El = document.getElementById("userInput10");
var userInput11El = document.getElementById("userInput11");
var userInput12El = document.getElementById("userInput12");
var userInput13El = document.getElementById("userInput13");
var userInput14El = document.getElementById("userInput14");
var userInput15El = document.getElementById("userInput15");
var userInput16El = document.getElementById("userInput16");
var userInput17El = document.getElementById("userInput17");

// Local Storage for each block
function saveUserInput(event){
    var event9 =  userInput9El.value.trim();
    localStorage.setItem("Event9", event9);
    var event10 =  userInput10El.value.trim();
    localStorage.setItem("Event10", event10);
    var event11 =  userInput11El.value.trim();
    localStorage.setItem("Event11", event11);
    var event12 =  userInput12El.value.trim();
    localStorage.setItem("Event12", event12);
    var event13 =  userInput13El.value.trim();
    localStorage.setItem("Event13", event13);
    var event14 =  userInput14El.value.trim();
    localStorage.setItem("Event14", event14);
    var event15 =  userInput15El.value.trim();
    localStorage.setItem("Event15", event15);
    var event16 =  userInput16El.value.trim();
    localStorage.setItem("Event16", event16);
    var event17 =  userInput17El.value.trim();
    localStorage.setItem("Event17", event17);
}
// Save Button Event Listener
saveBtnElList.forEach(function(saveBtnEl) {
    saveBtnEl.addEventListener("click", saveUserInput);
})

// Save item to page on refresh
function saveOnRefresh(event){
    var storage9 = localStorage.getItem("Event9");
    userInput9El.value = storage9;
    var storage10 = localStorage.getItem("Event10");
    userInput10El.value = storage10;
    var storage11 = localStorage.getItem("Event11");
    userInput11El.value = storage11;
    var storage12 = localStorage.getItem("Event12");
    userInput12El.value = storage12;
    var storage13 = localStorage.getItem("Event13");
    userInput13El.value = storage13;
    var storage14 = localStorage.getItem("Event14");
    userInput14El.value = storage14;
    var storage15 = localStorage.getItem("Event15");
    userInput15El.value = storage15;
    var storage16 = localStorage.getItem("Event16");
    userInput16El.value = storage16;
    var storage17 = localStorage.getItem("Event17");
    userInput17El.value = storage17;
}

saveOnRefresh()