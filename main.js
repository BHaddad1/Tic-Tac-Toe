var newGame = new Game();
var player1 = newGame.player1;
var player2 = newGame.player2;

var winsTrackerLeft = document.querySelector(".wins-tracker-left");
var winsCounterLeft = document.querySelector(".wins-counter-right");
var winsTrackerRight = document.querySelector(".wins-tracker-right");
var winsCounterRight = document.querySelector(".wins-counter-left");
var turnTracker = document.querySelector(".turn-tracker");
var boxes = document.querySelectorAll(".box");
var board = document.querySelector(".game-grid");

window.addEventListener("load", displayWinsOnLoad);
board.addEventListener("click", function (event) {
  if (newGame.checkAvailableSpaces() === true) {
    newGame.trackPlayerPositions(Number(event.target.id));
    newGame.changePlayerTurn();
    updateToken();
    checkForWinOrDraw();
    reenableBoxes();
  }
});

function updateToken() {
  for (var i = 0; i < 9; i++) {
    if (newGame.gameOver === true) {
      return;
    }
    if (newGame.board[i] === 0) {
      boxes[i].innerText = "";
    } else if (newGame.board[i] === 1) {
      boxes[i].innerText = newGame.player1.token;
      turnTracker.innerText = `Izzy's Turn`;
    } else if (newGame.board[i] === 2) {
      boxes[i].innerText = newGame.player2.token;
      turnTracker.innerText = `Chesty's Turn`;
    }
  }
}

function checkForWinOrDraw() {
  newGame.checkForWin();
  if (newGame.checkForDraw() === true) {
    board.classList.add("disabled");
    turnTracker.innerText = `It's a draw!`;
    setTimeout(clearBoard, 2000);
  } else if (newGame.gameOver === true && newGame.turn === true) {
    board.classList.add("disabled");
    localStorage.setItem("winsRight", player2.wins);
    winsCounterLeft.innerText = `${player1.wins} Wins`;
    winsCounterRight.innerText = `${player2.wins} Wins`;
    turnTracker.innerText = `Izzy won!`;
    setTimeout(clearBoard, 2000);
  } else if (newGame.gameOver === true && newGame.turn === false) {
    board.classList.add("disabled");
    localStorage.setItem("winsLeft", player1.wins);
    winsCounterRight.innerText = `${player2.wins} Wins`;
    winsCounterLeft.innerText = `${player1.wins} Wins`;
    turnTracker.innerText = `Chesty won!`;
    setTimeout(clearBoard, 2000);
  }
}

function clearBoard() {
  if (newGame.checkForDraw() === true) {
    turnTracker.innerText = `Izzy's turn`;
  }
  if (newGame.gameOver === true && newGame.turn === false) {
    turnTracker.innerText = `Izzy's turn`;
  }
  if (newGame.gameOver === true && newGame.turn === true) {
    turnTracker.innerText = `Chesty's turn`;
  }
  newGame.resetBoard();
  for (var i = 0; i < 9; i++) {
    boxes[i].innerText = "";
  }
  board.classList.remove("disabled");
}

function displayWinsOnLoad() {
  player1.wins = localStorage.getItem("winsLeft");
  winsCounterLeft.innerText = `${player1.wins} Wins`;
  player2.wins = localStorage.getItem("winsRight");
  winsCounterRight.innerText = `${player2.wins} Wins`;
}
