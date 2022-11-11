class Game {
    constructor() {
        this.player1 = new Player("🐈", 1);
        this.player2 = new Player("🐈‍⬛", 2);
        this.turn = true;
        this.draw = false;
        this.board = [0, 0, 0,
                     0, 0, 0,
                     0, 0, 0];
        this.possibleWins = [
                            [0, 1, 2],
                            [3, 4, 5],
                            [6, 7, 8],
                            [0, 3, 6],
                            [1, 4, 7],
                            [2, 5, 8],
                            [0, 4, 8],
                            [2, 4, 6],
                            ];
        this.defaultBoard = [0, 0, 0,
                            0, 0, 0,
                            0, 0, 0];
        this.gameOver = false;
    }
     changePlayerTurn() {
        this.turn = !this.turn;
    }
    trackPlayerPositions(position) {
        if (this.gameOver === true) {
            this.board = [0, 0, 0,
                        0, 0, 0,
                        0, 0, 0];
        } else if(this.board[position] === 0 && this.turn) {
            this.board[position] = 1;
            this.player1.currentPositions.push(position);
            console.log(this.player1.currentPositions);
        } else if (this.board[position] === 0 && !this.turn) {
            this.board[position] = 2;
            this.player2.currentPositions.push(position);
            console.log(this.player2.currentPositions);
        } 
    }
    checkForWin() {
        var player1Positions = [];
        var player2Positions = [];
        for (var i = 0; i < this.board.length; i++) {
            if (this.board[i] === 1) {
                player1Positions.push(i);
            } else if (this.board[i] === 2) {
                player2Positions.push(i);
            }
        }
        console.log(this.board);
        for (var i = 0; i < this.possibleWins.length; i++) {
            if (player1Positions.includes(this.possibleWins[i][0]) && player1Positions.includes(this.possibleWins[i][1]) && player1Positions.includes(this.possibleWins[i][2])) {
                this.player1.increaseWins();
                console.log("player1 wins");
                this.gameOver = true;
                console.log(this.board);
                return true;
            }  else if (player2Positions.includes(this.possibleWins[i][0]) && player2Positions.includes(this.possibleWins[i][1]) && player2Positions.includes(this.possibleWins[i][2])) {
                this.player2.increaseWins(); 
                console.log("player2 wins");
                this.gameOver = true;
                console.log(this.board);
                return false;
            } 
        }
    }
    checkForDraw() {
        for (var i = 0; i < this.board.length; i++){
            if (this.board[i] === 0) {
                this.draw = false;
                console.log("NOT YET BITCH")
                return false;
            } 
        }
        this.draw = true;
        this.gameOver = true;
        console.log("ITS A DRAW DUMBASS")
        return true;
    } 
    resetBoard() {
        console.log("reset board")
            this.board = [0, 0, 0,
                         0, 0, 0,
                         0, 0, 0];
            this.gameOver = false;
            this.player1.currentPositions = [];
            this.player2.currentPositions = [];
    }
    // reset the board after player 1 wins, afte player 2 wins, after there's a draw. 
}