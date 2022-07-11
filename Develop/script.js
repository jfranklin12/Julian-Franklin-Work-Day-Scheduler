var currentDayEl = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDayEl);

var hour9El = moment().set('hour', 12).format("HH:mm");
$("#hour").text(hour9El);
