var currentDayEl = moment().startOf('day').format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDayEl);
var currentTimeEl = moment().format("h A");


// for loop attempted
var hour9El = $('#hour9');
var hour10El = $('#hour10');
var hour11El = $('#hour11');
var hour12El = $('#hour12');
var hour13El = $('#hour13');
var hour14El = $('#hour14');
var hour15El = $('#hour15');
var hour16El = $('#hour16');
var hour17El = $('#hour17');





// var hourEl = moment().hour(0).minute(0).format("h:mm A");
// console.log(hourEl)

// for(var i=0;i < hourEl.length; i++){
//     var addHour = moment({currentDayEl}).add(1, 'h').format("h:mm A");
//     console.log(hourEl);
//     console.log(addHour)
//     hour9El.text(addHour[i])
//     hour9El.text(hourEl);
//     hour10El.text(hourEl);
// }



var hour9El = moment().hour(9).minute(0).format("h A");
$("#hour9").text(hour9El);
var hour10El = moment().hour(10).minute(0).format("h A");
$("#hour10").text(hour10El);
var hour11El = moment().hour(11).minute(0).format("h A");
$("#hour11").text(hour11El);
var hour12El = moment().hour(12).minute(0).format("h A");
$("#hour12").text(hour12El);
var hour13El = moment().hour(13).minute(0).format("h A");
$("#hour13").text(hour13El);
var hour14El = moment().hour(14).minute(0).format("h A");
$("#hour14").text(hour14El);
var hour15El = moment().hour(15).minute(0).format("h A");
$("#hour15").text(hour15El);
var hour16El = moment().hour(16).minute(0).format("h A");
$("#hour16").text(hour16El);
var hour17El = moment().hour(17).minute(0).format("h A");
$("#hour17").text(hour17El);

var hourEl = [hour9El, hour10El, hour11El, hour12El, hour13El, hour14El, hour15El, hour16El, hour17El]
console.log(hourEl);

// $(".time").addClass("bg-success");

// if (hour15El === moment({currentDayEl})) {
//     $(".time").addClass("bg-danger");
// };

if (hourEl === currentTimeEl) {
    $(".time").addClass("present");
    $(".time").remove("bg-success");
}


console.log(hourEl)

// if () {
// $(".time").addClass("bg-secondary");
// }

// console.log(moment(hour9El, 'hour').isBefore(currentTimeEl, 'hour'));
// console.log(moment(currentTimeEl, 'hour').isBefore(hour17El, 'hour'));

// console.log(moment(currentTimeEl).isSame(moment(currentTimeEl)));


// console.log(hour9El)
console.log(currentTimeEl)

