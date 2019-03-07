//UI logic




    $('#roll-up1').click(function(){
      randomDieRoller1();
      gather1();
      document.getElementById('firstRound').innerHTML = rollerOneTurnScore;
      $("#imobilize").attr("disabled", false);
    })
    $(document).ready(function() {
      $(".begin").submit(function(event){
        event.preventDefault();
        var input1 = $("#one").val();
        $("#arrange").text(input1);
        var input2 = $("#two").val();
        $("#short").text(input2);
        $(".revealed").slideDown();
        $("#rep").slideUp();
      });

    $('#imobilize').click(function(){
      store1();
      finalize1();
      celebrate();
      rollerOneRolls.length = 0;
      document.getElementById('firstRound').innerHTML = rollerOneTurnScore;
      document.getElementById('rollerOneTotal').innerHTML = rollerOneRoundTotal;
      $("#roll-up1").attr("disabled", true);
      $("#roll-up").attr("disabled", false);
      $("#imobilize").attr("disabled", true);

    })
    $('#roll-up').click(function(){
      randomDieRoller2();
      document.getElementById('round2').innerHTML = rollerTwoTurnScore;
      $("#imobilizee").attr("disabled", false);
    })

      $(".re-do").click(function(){
        $(".revealed").slideUp();
        $("#revealed").slideUp();
        $("#rep").slideDown();
      })


  $('#imobilizee').click(function(){
    store2();
    finalize2();
    celebrate();
    rollerTwoRolls.length = 0;
    document.getElementById('round2').innerHTML = rollerTwoTurnScore;
    document.getElementById('rollerTwoTotal').innerHTML = rollerTwoRoundTotal;
    $("#roll-up").attr("disabled", true);
    $("#roll-up1").attr("disabled", false);
    $("#imobilizee").attr("disabled", true);

  })
})

//Business logic
var rollerOneRolls = [];
var rollerTwoRolls = [];
var rollerOneTurnScore = [];
var rollerTwoTurnScore = [];
var rollerOneTurnTotal = [];
var rollerTwoTurnTotal = [];
var rollerOneRoundTotal = [];
var rollerTwoRoundTotal = [];
var rollerOneTotal = 0;
var rollerTwoTotal = 0;
var summationA = 0;
var summationB = 0;

function randomDieRoller1(){
  var number=Math.floor(Math.random()*6) + 1;
  document.getElementById("swag").innerHTML=number;

  if(number >1){
    rollerOneRolls.push(number);
    summationA = 0;
    rollerOneRolls.forEach(function(item1){
      summationA = summationA + item1;
    })
  }
  else{
    rollerOneRolls = [];
    summationA = 0;
    $(document).ready(function(){
      $("#roll-up1").attr("disabled", true);
      $("#roll-up").attr("disabled", false);
      $("#imobilize").attr("disabled", true);
      // $("#imobilizee").attr("disabled", false);
    })
  }
}

function randomDieRoller2(){
  var number2=Math.floor(Math.random()*6) + 1;
  document.getElementById("swag2").innerHTML=number2;

  if(number2 >1){
    rollerTwoRolls.push(number2);
    summationB = 0;
    rollerTwoRolls.forEach(function(item2){
      summationB = summationB + item2;
    })
    rollerTwoTurnScore.length = 0;
    rollerTwoTurnScore.push(summationB);
    document.getElementById('round2').innerHTML = rollerTwoTurnScore;
  }
  else{
    rollerTwoRolls = [];
    var summationB = 0;
    $(document).ready(function(){
      $("#imobilizee").attr("disabled", true);
      // $("#imobilize").attr("disabled", false);
      $("#roll-up").attr("disabled", true);
      $("#roll-up1").attr("disabled", false);
    })
  }
}

//roller1
function gather1(){
  rollerOneTurnScore.length = 0;
  rollerOneTurnScore.push(summationA);
}

function store1(){
  rollerOneTurnTotal.push(parseInt(rollerOneTurnScore));
  rollerOneTurnScore.length = 0;
}

function finalize1(){
  rollerOneTotal = 0;
  rollerOneTurnTotal.forEach(function(collect){
    rollerOneTotal = rollerOneTotal + collect;
  })
  rollerOneRoundTotal.length = 0;
  rollerOneRoundTotal.push(rollerOneTotal);
}

//roller 2
function gather2(){
  rollerTwoTurnScore.length = 0;
  rollerTwoTurnScore.push(summationB);
}

function store2(){
  rollerTwoTurnTotal.push(parseInt(rollerTwoTurnScore));
  rollerTwoTurnScore.length = 0;
}

function finalize2(){
  rollerTwoTotal = 0;
  rollerTwoTurnTotal.forEach(function(collect){
    rollerTwoTotal = rollerTwoTotal + collect;
  })
  rollerTwoRoundTotal.length = 0;
  rollerTwoRoundTotal.push(rollerTwoTotal);
}

function celebrate(){
  if (rollerTwoRoundTotal >= 99){
  document.getElementById('written').innerHTML="Nice job "+input2+"!!you have won!!"
  }
  else if(rollerOneRoundTotal >= 99){
document.getElementById('writing').innerHTML="Nice job"+input1+"!! You have won!!"
  }
}
