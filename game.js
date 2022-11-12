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

        } else if (this.board[position] === 0 && !this.turn) {
            this.board[position] = 2;
            this.player2.currentPositions.push(position);
            } 
        }
    checkAvailableSpaces() {
        var position = event.target.id; 
        if (this.board[position] === 0) {
            return true
        } else {
            return false
            }
        }
    checkForWin() {
        for (var i = 0; i < this.possibleWins.length; i++) {
            if (this.player1.currentPositions.includes(this.possibleWins[i][0]) && this.player1.currentPositions.includes(this.possibleWins[i][1]) && this.player1.currentPositions.includes(this.possibleWins[i][2])) {
                this.player1.increaseWins();
                this.gameOver = true;
                return true;
            } else if (this.player2.currentPositions.includes(this.possibleWins[i][0]) && this.player2.currentPositions.includes(this.possibleWins[i][1]) && this.player2.currentPositions.includes(this.possibleWins[i][2])) {
                this.player2.increaseWins();
                this.gameOver = true;
                return false;
            } 
        }
    }
    checkForDraw() {
        for (var i = 0; i < this.board.length; i++){
            if (this.board[i] === 0) {
                this.draw = false;
                return false;
            } 
        }
        this.draw = true;
        this.gameOver = true;
        this.player1.didWin = false;
        this.player2.didWin = false;
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
};