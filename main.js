 // how does the token get into the possible positions? 

        // IN MAIN JS IF IT"S THIS PLAYERS TURN< SNET THE INNTERTEXT TO THAT PLAYER'S TOKEN. 
        // BOARD SHOILD BE DISABLED UNTIL ITS RESET--- add diaabled to the class after the game is done.
// when the game ends, wait a few seconds, and reset the board. 


// -----------------------------Global Variables----------------------//
var newGame = new Game ();
var player1 = newGame.player1;
var player2 = newGame.player2;
var currentPlayer;
var player1Won;
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
board.addEventListener('click', function(event) {
    newGame.trackPlayerPositions(Number(event.target.id));
    updateToken();
    newGame.changePlayerTurn();
    preventChangingTokens(event);
    changeTurnOnDom();
    checkForWinOrDraw();
    reenableBoxes();
 });

//------------------------DOM Functions-----------------------//

function updateToken() {
     for (var i = 0; i < 9; i++) {
        if (newGame.gameOver === true) {
            return;
        }
        if (newGame.board[i] === 0) {
            boxes[i].innerText = "";
          } else if (newGame.board[i] === 1) {
            boxes[i].innerText = newGame.player1.token;
        } else if (newGame.board[i] === 2) {
            boxes[i].innerText = newGame.player2.token;
        }
     }
};

function preventChangingTokens(event){ 
    if (event.target.innerText === player1.token) {
        event.target.classList.add('disabled')
    } else if (event.target.innerText === player2.token) {
        event.target.classList.add('disabled')
    }
};

function reenableBoxes() {
    for (var i = 0; i < 9; i++){
        boxes[i].classList.remove('disabled')
    }
};

function changeTurnOnDom() {
    if (!newGame.turn) {
        turnTracker.innerText = `Izzy's Turn`;
    } else {
        turnTracker.innerText = `Chesty's Turn`;
    }
}

function checkForWinOrDraw() {
    newGame.checkForWin();
    if (newGame.checkForDraw() === true) {
        turnTracker.innerText = `It's a draw!`;
        setTimeout(clearBoard, 2000);
    } else if (newGame.gameOver === true && newGame.turn === true) {
        console.log(player1.wins);
        winsTrackerLeft.innerText = `${player1.wins} Wins`;
        winsTrackerRight.innerText = `${player2.wins} Wins`;
        turnTracker.innerText = `Izzy won!`;
        setTimeout(clearBoard, 2000);
    } else if (newGame.gameOver === true && newGame.turn === false) {
        console.log(player2.wins);
        winsTrackerRight.innerText = `${player2.wins} Wins`;
        winsTrackerLeft.innerText = `${player1.wins} Wins`;
        turnTracker.innerText = `Chesty won!`;
        setTimeout(clearBoard, 2000);
    }
};

function clearBoard() {
        newGame.resetBoard();
        for (var i = 0; i < 9; i++) {
            boxes[i].innerText = "";
        } if (player1.didWin === true) {
            turnTracker.innerText = `Izzy's Turn`;
        } if (player2.didWin === true) {
            turnTracker.innerText = `Chesty's Turn`;
        }
}

//----------------------------------DATA MODEL FUNCTIONS----------------------//
