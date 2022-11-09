class Game {
    constructor() {
        this.player1 = new Player("🐈");
        this.player2 = new Player("🐕");
        this.turn = true;
        this.possiblePositions = [1, 2, 3,
                                4, 5, 6,
                                7, 8, 9];
        this.possibleWins = [
                            [1, 2, 3],
                            [4, 5, 6],
                            [7, 8, 9],
                            [1, 4, 7],
                            [2, 5, 8],
                            [3, 6, 9],
                            [1, 5, 9],
                            [3, 5, 7],
                            ];
    }   
    checkGameStatus() {
        // if my game board[i] = this.possibleWins[][1]
        for (var i = 0; i < this.possiblePositions.length; i++) {
        if (this.possiblePositions[i] === this.player1.token && this.possiblePositions[i+1] === this.player1.token && this.possiblePositions[i+2] === this.player1.token) {

            }
        }
        // keep track of which player clicked on which position
        // which spaces are open
        // which spaces each player has selected
    }
    checkTurn() {
        // checkGameStatus 
        // run through an array of positions
        // if player1 clicks something, then player2.turn = true
        // else if player2.turn = false
        // this.turn = !this.turn;
        // 
       // IN MAIN JS IF IT"S THIS PLAYERS TURN< SNET THE INNTERTEXT TO THAT PLAYER'S TOKEN. 
    }
    checkForWin() {
        // look at the board after each player played 5 times/after all position are filled in
        // return this.win
        // update the Dom to display the winner
        // update the DOM to display score 
        // var score = player1.wins;
        // var score2 == player2.wins;
        // have a pause to reset the game
    }
    resetBoard() {
        // check for win is called
        // clear the board of all tokens
        // the player who lost goes next 
        // BOARD SHOILD BE DISABLED UNTIL ITS RESET--- add diaabled to the class after the game is done.
    }
}