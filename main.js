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

upperLeftBox.addEventListener('click',function() {
    updateToken(upperLeftBox);
    preventChangingTokens(upperLeftBox); 
    changeTurn();
    keepTrackOfPositions(0);
   
});
upperMiddleBox.addEventListener('click', function() {
    updateToken(upperMiddleBox);
    preventChangingTokens(upperMiddleBox);
    changeTurn();
    keepTrackOfPositions(1);
});
upperRightBox.addEventListener('click', function() {
    updateToken(upperRightBox);
    preventChangingTokens(upperRightBox);
    changeTurn(); 
    keepTrackOfPositions(2);
})
middleLeftBox.addEventListener('click', function() {
    updateToken(middleLeftBox);
    preventChangingTokens(middleLeftBox);
    changeTurn();
    keepTrackOfPositions(3);
})
middleBox.addEventListener('click', function() {
    updateToken(middleBox);
    preventChangingTokens(middleBox);
    changeTurn();
    keepTrackOfPositions(4);
});
middleRightBox.addEventListener('click', function() {
    updateToken(middleRightBox);
    preventChangingTokens(middleRightBox);
    changeTurn();
    keepTrackOfPositions(5);
})
lowerLeftBox.addEventListener('click', function() {
    updateToken(lowerLeftBox);
    preventChangingTokens(lowerLeftBox);
    changeTurn();
    keepTrackOfPositions(6);
});
lowerMiddleBox.addEventListener('click', function() {
    updateToken(lowerMiddleBox);
    preventChangingTokens(lowerMiddleBox);
    changeTurn();
    keepTrackOfPositions(7);
})
lowerRightBox.addEventListener('click', function() {
    updateToken(lowerRightBox);
    preventChangingTokens(lowerRightBox);
    changeTurn();
    keepTrackOfPositions(8);
})



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

function preventChangingTokens(box){ 
    if (box.innerText === player1.token) {
        box.classList.add('disabled')
        box.disabled = true;
    } else if (box.innerText === player2.token) {
        box.classList.add('disabled')
        box.disabled = true;
    }
}

function changeTurn() {
    newGame.changePlayerTurn();
}

// function updateBoard(event) {
//     console.log(event);
//     for (var i = 0; i < newGame.board.length; i++) {
//         // if (newGame.board[i]
//     }
// }

function keepTrackOfPositions(position){
   newGame.trackPlayerPositions(position);
}

// trackPlayerPositions(position) {
//     console.log("trackposition");
//     if (this.board[position] === 0){
//         this.board[position] = this.player1.id;
//         this.player1.currentPositions.push(position);
//    } else if (this.board[position] === 0) {
//         this.baord[position] = this.player2.id;
//         this.player2.currentPositions.push(position);
//     } 
// }

//----------------------------------DATA MODEL FUNCTIONS----------------------//
