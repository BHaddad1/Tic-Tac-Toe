 // how does the token get into the possible positions? 

        // IN MAIN JS IF IT"S THIS PLAYERS TURN< SNET THE INNTERTEXT TO THAT PLAYER'S TOKEN. 
        // BOARD SHOILD BE DISABLED UNTIL ITS RESET--- add diaabled to the class after the game is done.
// when the game ends, wait a few seconds, and reset the board. 


// -----------------------------Global Variables----------------------//
var newGame = new Game ();
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
board.addEventListener('click', function(event) {
    keepTrackOfPositions(event.target.id);
    updateToken(event);
    newGame.changePlayerTurn();
    preventChangingTokens(event);
    checkForWinOnDOM();
    // newGame.checkForDraw();
    // updateBanner();
    // clearBoard();
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

function preventChangingTokens(event){ 
    if (event.target.innerText === player1.token) {
        event.target.classList.add('disabled')
    } else if (event.target.innerText === player2.token) {
        event.target.classList.add('disabled')
    }
};

function changeTurn() {
    newGame.changePlayerTurn();
}

function keepTrackOfPositions(position){
   newGame.trackPlayerPositions(position);
}

function checkForWinOnDOM() {
    newGame.checkForWin();
    updateScores();

}

// function clearBoard(boxes) {
//     for (var i = 0; i < 9; i++) {
//         if (boxes[i].innerText === newGame.player1.token || boxes[i].innerText === newGame.player2.token){
//             newGame.board = newGame.defaultBoard;
//             boxes[i].innerText = ""
//         }
//     }
// }

function updateScores() {
    if (newGame.gameOver === true && newGame.player1.didWin === true) {
        winsTrackerLeft.innerText = `${newGame.player1.wins} games won!`
        turnTracker.innerText = `Chesty won!`
    } else if (newGame.gameOver === true && newGame.player2.didWin === true) {
        winsTrackerRight.innerText = `${newGame.player2.wins} games won!`
        turnTracker.innerText = `Izzy won!`
    }
    // if game is over 
    // look at players scores 
    // banner's innertext should be "Chesty won!"
    // or if player2 won 
    // banner's innerText should be "Izzy won!"  
    // reset board
    // if there is a draw and 
    // banner's innerText should be "There's a draw!"
    // reset board
    // start with the last person who went first
    //; 
};
// reset board function for DOM 
// clear out the pieces
// 
//----------------------------------DATA MODEL FUNCTIONS----------------------//
