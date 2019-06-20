// ------------------------------- business logic ---------------------------------------------
var UserAccount = [];
UserAccount.push($("#nameOne").val())
UserAccount.push($("#nameTwo").val())

var turn = 0
function swapUser () {
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
}

function Player (name) {
  this.userName = name;
  this.currentScore = 0
}

Player.prototype.diceScore = function (diceNumber) {
  var score = 0;
  for (var i = 1; i <= diceNumber; i++) {
    score += Math.floor((Math.random()*6) + 1);
  }
  return score
}

Player.prototype.dicePlay = function (score, diceNumber) {
  if (score === diceNumber) {
    this.currentScore = 0
    swapUser()
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
  var playerOne = new Player(name)
  var playerTwo = new Player(name)
  var diceNumber = parseInt($("#dice").val());
  $("#play").click(function (event) {
    event.preventDefault();
    var inputNameOne = $("#nameOne").val();
    var inputNameTwo = $("#nameTwo").val();
    if (turn === 0) {
      var scoreOne = playerOne.diceScore(diceNumber);
      var diceOne = playerOne.dicePlay(scoreOne, diceNumber);
      $("#userOne").text(inputNameOne);
      $("#playOne").text(diceOne);
    }
    if (turn === 1) {
      var scoreTwo = playerTwo.diceScore(diceNumber);
      var diceTwo = playerTwo.dicePlay(scoreTwo, diceNumber);
      $("#userTwo").text(inputNameTwo);
      $("#playTwo").text(diceTwo);
    }
  });
  $(".hold").click(function () {
    swapUser()
  });
});
