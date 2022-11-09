 // how does the token get into the possible positions? 

        // IN MAIN JS IF IT"S THIS PLAYERS TURN< SNET THE INNTERTEXT TO THAT PLAYER'S TOKEN. 
        // BOARD SHOILD BE DISABLED UNTIL ITS RESET--- add diaabled to the class after the game is done.
// when the game ends, wait a few seconds, and reset the board. 


// -----------------------------Global Variables----------------------//
var newGame = new Game ();
var player1 = newGame.player1
var player2 = newGame.player2
//.........................Query Selectors......................
var winsTrackerLeft = document.querySelector('.wins-tracker-left');
var winsTrackerRight = document.querySelector('.wins-tracker-right');
var turnTracker = document.querySelector('.turn-tracker');
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
upperLeftBox.addEventListener('click', updateToken(upperLeftBox));


//--------------------------Data Model functions---------------------//
function testDOM() {
    console.log("hello");
}


function clearBoard(){ 
  board = newGame.resetBoard;
}

function determineTurn() {
    newGame.changePlayerTurn
}


//------------------------DOM Functions-----------------------//
function updateToken(box) {
    if (newGame.turn === true) {
       box.innerText = newGame.player1.token;
    } else if(newGame.turn === false) {
        box.innerText = newGame.player2.token;
    }
}

function disableBoxesThatAreFilled() {
    // if boxes contains tokens
    // then they are no longer clickable
    // gameboard.classList.add(disabled)
}
