var currentDayEl = moment().startOf('day').format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDayEl);

// for loop attempted
// var hour9El = $('#hour9').text(addHour);
// var hour10El = $('#hour10');
// var hour11El = $('#hour11');


// var hourEl = [hour9El, hour10El, hour11El];
// console.log(hourEl)

// for(i=0;i < hourEl.length; i++){
//     var addHour = moment({currentDayEl}).add(i, 'h').format("h:mm A");
//     console.log(addHour);
//     hour9El.text(addHour);
//     hour10El.text(addHour)

// }

var hour9El = moment().hour(9).minute(0).format("h:mm A");
$("#hour9").text(hour9El);
var hour10El = moment().hour(10).minute(0).format("h:mm A");
$("#hour10").text(hour10El);
var hour11El = moment().hour(11).minute(0).format("h:mm A");
$("#hour11").text(hour11El);
var hour12El = moment().hour(12).minute(0).format("h:mm A");
$("#hour12").text(hour12El);
var hour13El = moment().hour(13).minute(0).format("h:mm A");
$("#hour13").text(hour13El);
var hour14El = moment().hour(14).minute(0).format("h:mm A");
$("#hour14").text(hour14El);
var hour15El = moment().hour(15).minute(0).format("h:mm A");
$("#hour15").text(hour15El);
var hour16El = moment().hour(16).minute(0).format("h:mm A");
$("#hour16").text(hour16El);
var hour17El = moment().hour(17).minute(0).format("h:mm A");
$("#hour17").text(hour17El);
