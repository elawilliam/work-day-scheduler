//Setting the current date//
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMMM D YYYY, h:mm a'));

$(document).ready(function () {

//Event listener for clicking the save button//
$(".saveBtn").on("click", function (){
  var eventText = $(this).siblings(".description").val();
  var eventText = $(this).parent().attr("id");

//Saving to local storage//
  localStorage.setItem(eventTime, eventText);
})

})

$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

var currentTime = dayjs().hour();
var timeBlock = $(".time-block");

function updateTimeBlocks(){
  $(".time-block").each(function(){
    var timeCheck = parseInt($(this).attr("id").split("-")[1]);

    if (timeCheck < currentTime){
      $(this).addClass("past");
    }

    else if (timeCheck === currentTime){
      $(this).addClass("present");
    }

    else {
      $(this).addClass("future");
    }
  }
  );
}

updateTimeBlocks();