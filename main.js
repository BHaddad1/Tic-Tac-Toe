// how does the token get into the possible positions? 

// IN MAIN JS IF IT"S THIS PLAYERS TURN< SNET THE INNTERTEXT TO THAT PLAYER'S TOKEN. 
// BOARD SHOILD BE DISABLED UNTIL ITS RESET--- add diaabled to the class after the game is done.
// when the game ends, wait a few seconds, and reset the board. 


// -----------------------------Global Variables----------------------//
var newGame = new Game();
var player1 = newGame.player1;
var player2 = newGame.player2;
var currentPlayer;
//.........................Query Selectors......................
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

//---------------------------Event Listeners------------------------//
board.addEventListener('click', function (event) {
    newGame.trackPlayerPositions(event.target.id);
    updateToken(event);
    newGame.changePlayerTurn();
    preventChangingTokens(event);
    checkForWinOrDraw();
    reenableBoxes();
    // updateScores();
});

//------------------------DOM Functions-----------------------//

function updateToken(event) {
    for (var i = 0; i < 9; i++) {
        if (newGame.board[i] === 0) {
            boxes[i].innerText = "";
        } else if (newGame.board[i] === 1) {
            boxes[i].innerText = newGame.player1.token;
        } else if (newGame.board[i] === 2) {
            boxes[i].innerText = newGame.player2.token;
        }
    }
};

function preventChangingTokens(event) {
    if (event.target.innerText === player1.token) {
        event.target.classList.add('disabled')
    } else if (event.target.innerText === player2.token) {
        event.target.classList.add('disabled')
    }
};

function reenableBoxes(event) {
    for (var i = 0; i < 9; i++) {
        boxes[i].classList.remove('disabled')
    }
};

function checkForWinOrDraw() {
    if (newGame.checkForWin() === true) {
        winsTrackerLeft.innerText = `${newGame.player1.wins} games won`
        winsTrackerRight.innerText = `${newGame.player2.wins} games won`
        turnTracker.innerText = `Chesty won!`
        for (var i = 0; i < 9; i++) {
            boxes[i].innerText = ""
        }
    } else if (newGame.checkForWin() === false) {
        winsTrackerRight.innerText = `${newGame.player2.wins} games won`
        winsTrackerLeft.innerText = `${newGame.player1.wins} games won`
        turnTracker.innerText = `Izzy won!`
        for (var i = 0; i < 9; i++) {
            boxes[i].innerText = ""
        }
    } else if (newGame.checkForDraw() === true) {
        turnTracker.innerText = `It's a draw!`
    }
};

function clearBoard() {
    if (newGame.gameOver === true) {
        var resetBoardFunction = setTimeout(function () {
            newGame.resetBoard()
        }, 3000);
        for (var i = 0; i < 9; i++) {
            boxes[i].innerText = "";
        }
    }
};

//----------------------------------DATA MODEL FUNCTIONS----------------------//
