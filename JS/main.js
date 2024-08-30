let navWidth = $(".sideNav").outerWidth(true)

$(document).ready(function(){
    $(".sideNav").animate({left: -navWidth},400)
})

$(".navBtn").click(function () {
    $(".sideNav").animate({left: "0px"},400)
    $(".navBtn").fadeOut(300)
})

$(".closeIcon").click(function() {
    $(".sideNav").animate({left: -navWidth},400)
    $(".navBtn").fadeIn(400)
})

$(".singerBtn").click(function(){
    $(this).next().slideToggle(500)
    $(".row .singerParagraph").not($(this).next()).slideUp()
})

var countDownDate = new Date("Aug 29, 2040 15:38:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#daysCounter").html(days + "D")
  $("#hoursCounter").html(hours + "h")
  $("#minsCounter").html(minutes + "m")
  $("#secCounter").html(seconds + "s")

  if (distance < 0) {
    clearInterval(x);
    $('#demo').html('<h1 class=" text-center">"EXPIRED"</h1>')
  }
}, 1000);

$("#textArea1").keyup(function(){
    let inputLength = $(this).val().length ;
    $("#charcounter").html(
        100 - inputLength <= 0 ? "Your available character finished" : 100 - inputLength
    )
    
})