class Game {
    constructor() {
        this.player1 = new Player("🐈", 1);
        this.player2 = new Player("🐈‍⬛", 2);
        this.turn = true;
        this.nextTurn = this.player1;
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
    }   
    changePlayerTurn() {
         if (this.nextTurn === player1){
            this.turn = false;
            this.nextTurn = player2;
        } else {
            this.turn = true;
            this.nextTurn = player1; 
        }
    }
    insertTokenInOpenBoxes(player) {
        for (var i = 0; i < this.board.length; i++){
            if(this.board[i] === 0) {
                this.board[i] = player.token;
            }
            this.player.currentPositions.push([i])
        }
    }
    trackWhoIsNext() {
        if (this.player1.currentPositions.length < this.player2.currentPositions) {
            this.changePlayerTurn();
        } else if (this.player2.currentPositions.length < this.player1.currentPositions.length){
            this.changePlayerTurn(); 
        }
    }
    trackPlayerPosition() {
        for (var i = 0; i < this.board.length; i++){
            var currentPosition = this.board[i]
            if (this.board[i] === 0){
                this.board[i] === this.player.token;
                this.player.currentPositions.push(currentPosition)
            }
        }
    }
    checkForWin() {
        for (var i = 0; i < this.possibleWins.length; i++){
            if (this.possibleWins[i][i] === this.player1.token && this.possibleWins[i][i + 1] === this.player1.token && this.possibleWins[i][i + 2] === this.player1.token){
                this.player1.increaseWins();
                var score1 = player1.wins;
                return score1;
            } else if (this.possibleWins[i][i] === this.player2.token && this.possibleWins[i][i + 1] === this.player2.token && this.possibleWins[i][i + 2] === this.player2.token) {
                this.player2.increaseWins();
                var score2 = player2.wins;
                return score2;
            }
        }
    }
    resetBoard() {
        this.board = this.defaultBoard;
        this.changePlayerTurn();
    }
}