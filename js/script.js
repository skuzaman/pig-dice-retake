
var numbers=[0];
function trial(){
  var number=Math.floor(Math.random()*6);
  numbers.unshift(number);
  document.getElementById("find").innerHTML=numbers[0];
}
$(document).ready(function() {
  $(".doIt").submit(function(event){
    event.preventDefault();
    var input1 = $("#one").val();
    $("#sort").text(input1);
    var input2 = $("#two").val();
    $("#short").text(input2);
    $(".shown").slideDown();
    $("#rep").slideUp();
  });
  $(".back").click(function(){
    $(".shown").slideUp();
    $("#shown").slideUp();
    $("#rep").slideDown();
  })
  $("#help").click(function(){
    $("#shown").slideDown();
    $("#rep").slideUp();
    $(".shown").hide();
  })


});

//write your code below
$(document).ready(function() {
  $(".doIt").submit(function(event){
    event.preventDefault();
    var input1 = $("#one").val();
    $("#sort").text(input1);
    var input2 = $("#two").val();
    $("#short").text(input2);
  });
});
