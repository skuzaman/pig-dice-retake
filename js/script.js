//UI logic
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

  $('#cha').click(function(){
    random1();
    gather1();
    document.getElementById('round1').innerHTML = oneTurnScore;
    $("#chang").attr("disabled", false);
  })

  $('#chang').click(function(){
    store1();
    finalize1();
    celebrate();
    oneRolls.length = 0;
    document.getElementById('round1').innerHTML = oneTurnScore;
    document.getElementById('total1').innerHTML = oneFinalTotal;
    $("#cha").attr("disabled", true);
    $("#chan").attr("disabled", false);
    $("#chang").attr("disabled", true);
    // $("#change").attr("disabled", false);
  })

  $('#chan').click(function(){
    random2();
    document.getElementById('round2').innerHTML = twoTurnScore;
    $("#change").attr("disabled", false);
  })

  $('#change').click(function(){
    store2();
    finalize2();
    celebrate();
    twoRolls.length = 0;
    document.getElementById('round2').innerHTML = twoTurnScore;
    document.getElementById('total2').innerHTML = twoFinalTotal;
    $("#chan").attr("disabled", true);
    $("#cha").attr("disabled", false);
    $("#change").attr("disabled", true);
    // $("#chang").attr("disabled", false);
  })
})

//Business logic
var oneRolls = [];
var twoRolls = [];
var oneTurnScore = [];
var twoTurnScore = [];
var oneTurnTotal = [];
var twoTurnTotal = [];
var oneFinalTotal = [];
var twoFinalTotal = [];
var total1 = 0;
var total2 = 0;
var sum1 = 0;
var sum2 = 0;

function random1(){
  var number=Math.floor(Math.random()*6) + 1;
  document.getElementById("1got").innerHTML=number;

  if(number >1){
    oneRolls.push(number);
    sum1 = 0;
    oneRolls.forEach(function(item1){
      sum1 = sum1 + item1;
    })
  }
  else{
    oneRolls = [];
    sum1 = 0;
    $(document).ready(function(){
      $("#cha").attr("disabled", true);
      $("#chan").attr("disabled", false);
      $("#chang").attr("disabled", true);
      // $("#change").attr("disabled", false);
    })
  }
}

function random2(){
  var number2=Math.floor(Math.random()*6) + 1;
  document.getElementById("2got").innerHTML=number2;

  if(number2 >1){
    twoRolls.push(number2);
    sum2 = 0;
    twoRolls.forEach(function(item2){
      sum2 = sum2 + item2;
    })
    twoTurnScore.length = 0;
    twoTurnScore.push(sum2);
    document.getElementById('round2').innerHTML = twoTurnScore;
  }
  else{
    twoRolls = [];
    var sum2 = 0;
    $(document).ready(function(){
      $("#change").attr("disabled", true);
      // $("#chang").attr("disabled", false);
      $("#chan").attr("disabled", true);
      $("#cha").attr("disabled", false);
    })
  }
}

//Player1
function gather1(){
  oneTurnScore.length = 0;
  oneTurnScore.push(sum1);
}

function store1(){
  oneTurnTotal.push(parseInt(oneTurnScore));
  oneTurnScore.length = 0;
}

function finalize1(){
  total1 = 0;
  oneTurnTotal.forEach(function(collect){
    total1 = total1 + collect;
  })
  oneFinalTotal.length = 0;
  oneFinalTotal.push(total1);
}

//Player 2
function gather2(){
  twoTurnScore.length = 0;
  twoTurnScore.push(sum2);
}

function store2(){
  twoTurnTotal.push(parseInt(twoTurnScore));
  twoTurnScore.length = 0;
}

function finalize2(){
  total2 = 0;
  twoTurnTotal.forEach(function(collect){
    total2 = total2 + collect;
  })
  twoFinalTotal.length = 0;
  twoFinalTotal.push(total2);
}

function celebrate(){
  if (twoFinalTotal >= 99){
  document.getElementById('written').innerHTML="Nice job "+input2+"!!you have won!!"
  }
  else if(oneFinalTotal >= 99){
document.getElementById('writing').innerHTML="Nice job"+input1+"!! You have won!!"
  }
}
