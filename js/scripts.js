// ------------------------------- business logic ---------------------------------------------
var turn = 0
function swapUser (turn) {
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
  return turn
}

function Play (name) {
  this.userName = name;
  this.currentScore = 0
}

Play.prototype.diceScore = function (diceNumber) {
  var score = 0;
  for (var i = 1; i <= diceNumber; i++) {
    score += Math.floor((Math.random()*6) + 1);
  }
  console.log(score);
  return score
}

Play.prototype.dicePlay = function (score, diceNumber) {
  if (score === diceNumber) {
    this.currentScore = 0
  }
  if (score > diceNumber && this.currentScore < 100){
    this.currentScore += score
  }
  if (this.currentScore >= 100) {
    alert("Wow, You win!")
  }
  return this.currentScore
}

// ------------------------------- user interface logic ---------------------------------------
$(document).ready(function() {
  var playOne = new Play(name)
  var playTwo = new Play(name)
  $("#play").click(function (event) {
    event.preventDefault();
    var diceNumber = parseInt($("#dice").val());
    var inputNameOne = $("#nameOne").val();
    var inputNameTwo = $("#nameTwo").val();
    if (turn === 0) {
      var scoreOne = playOne.diceScore(diceNumber, turn);
      var diceOne = playOne.dicePlay(scoreOne, diceNumber);
      if (diceOne === 0)
        turn = swapUser(turn)
      $("#userOne").text(inputNameOne);
      $("#playOne").text(diceOne);
    }
    if (turn === 1) {
      var scoreTwo = playTwo.diceScore(diceNumber, turn);
      var diceTwo = playTwo.dicePlay(scoreTwo, diceNumber);
      if (diceTwo === 0)
        turn = swapUser(turn)
      $("#userTwo").text(inputNameTwo);
      $("#playTwo").text(diceTwo);
    }
  });
  $(".hold").click(function () {
    turn = swapUser(turn)
  });
});
