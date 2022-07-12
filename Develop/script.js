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

// var saveBtnEl = $("#saveBtn");

// var userInputEl = $('input[name="scheduleItem"]').val().trim();
// console.log(userInputEl)

// function saveInput(event){
//     event.preventDefault();

//     userInputEl.text = ""

//     var item = document.createElement("p");
    
//     localStorage.setItem("item", JSON.stringify(item));

// }

// saveBtnEl.on("click", function(event) {
//     event.preventDefault();
//     saveInput();

// });
