
var newGame = new Game ();
var player1 = newGame.player1;
var player2 = newGame.player2;
var currentPlayer;
var player1Won;

var winsTrackerLeft = document.querySelector('.wins-tracker-left');
var winsTrackerRight = document.querySelector('.wins-tracker-right');
var turnTracker = document.querySelector('.turn-tracker');
var boxes = document.querySelectorAll('.box');
var upperLeftBox = document.querySelector('#first-box');
var upperMiddleBox = document.querySelector('#second-box');
var upperRightBox = document.querySelector('#third-box');
var middleLeftBox = document.querySelector('#fourth-box');
var middleBox = document.querySelector('#fifth-box');
var middleRightBox = document.querySelector('#sixth-box');
var lowerLeftBox = document.querySelector('#seventh-box');
var lowerMiddleBox = document.querySelector('#eighth-box');
var lowerRightBox = document.querySelector('#ninth-box');
var board = document.querySelector('.game-grid');
var button = document.querySelectorAll('button')

board.addEventListener('click', function(event) {
    if (newGame.checkAvailableSpaces() === true) {
        newGame.trackPlayerPositions(Number(event.target.id));
        newGame.changePlayerTurn();
        updateToken();
        preventChangingTokens(event);
        checkForWinOrDraw();
        reenableBoxes();
}});

function updateToken() {
     for (var i = 0; i < 9; i++) {
        if (newGame.gameOver === true) {
            return;
        }
        if (newGame.board[i] === 0) {
            boxes[i].innerText = "";
        } else if (newGame.board[i] === 1) {
            boxes[i].innerText = newGame.player1.token;
            turnTracker.innerText = `Izzy's Turn`
        } else if (newGame.board[i] === 2) {
            boxes[i].innerText = newGame.player2.token;
            turnTracker.innerText = `Chesty's Turn`;
        }
     }
};

function preventChangingTokens(event){ 
    if (event.target.innerText === player1.token) {
        event.target.classList.add('disabled')
        newGame.turn = false;
    } else if (event.target.innerText === player2.token) {
        event.target.classList.add('disabled')
        newGame.turn = true;
    }
};

function reenableBoxes() {
    for (var i = 0; i < 9; i++){
        boxes[i].classList.remove('disabled')
    }
};

function checkForWinOrDraw() {
    newGame.checkForWin();
    if (newGame.checkForDraw() === true) {
        turnTracker.innerText = `It's a draw!`;
        setTimeout(clearBoard, 2000);
    } else if (newGame.gameOver === true && newGame.turn === true) {
        winsTrackerLeft.innerText = `Chesty's Wins: ${player1.wins} Wins`;
        winsTrackerRight.innerText = `Izzy's Wins: ${player2.wins} Wins`;
        turnTracker.innerText = `Izzy won!`;
        setTimeout(clearBoard, 2000);
    } else if (newGame.gameOver === true && newGame.turn === false) {
        winsTrackerRight.innerText = `Izzy's Wins: ${player2.wins} Wins`;
        winsTrackerLeft.innerText = `Chesty's Wins: ${player1.wins} Wins`;
        turnTracker.innerText = `Chesty won!`;
        setTimeout(clearBoard, 2000);
    }
};

function clearBoard() {
        newGame.resetBoard();
        for (var i = 0; i < 9; i++) {
            boxes[i].innerText = "";
        }
};