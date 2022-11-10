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
    }
     changePlayerTurn() {
        this.turn = !this.turn
    }
    trackPlayerPositions(position) {
        console.log("trackposition");
        if(this.board[position] === 0 && this.turn){
            this.board[position] = 1;
            this.player1.currentPositions.push(position);
            console.log(this.player1.currentPositions);
        } else if (this.board[position] === 0 && !this.turn){
            this.board[position] = 2;
            this.player2.currentPositions.push(position);
            console.log(this.player2.currentPositions);
        }
    }
    trackWhoIsNext() {
        console.log("track who is next")
        if (this.player1.currentPositions.length < this.player2.currentPositions) {
            this.changePlayerTurn();
        } else if (this.player2.currentPositions.length < this.player1.currentPositions.length){
            this.changePlayerTurn(); 
        }
    }
    checkForWin() {
        console.log("check for win")
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
    checkForDraw() {
        console.log("check for draw")
        for (var i = 0; i < this.possibleWins.length; i++){
            if (this.possibleWins[i][i] !== this.player1.token && this.possibleWins[i][i + 1] !== this.player1.token && this.possibleWins[i][i + 2] !== this.player1.token){
                this.draw = true;
            } else if (this.possibleWins[i][i] !== this.player2.token && this.possibleWins[i][i + 1] !== this.player2.token && this.possibleWins[i][i + 2] !== this.player2.token){
                this.draw = true;
            }
        }
    }
    resetBoard() {
        console.log("reset board")
        this.board = this.defaultBoard;
        this.changePlayerTurn();
        this.player1.currentPositions = [];
        this.player2.currentPositions = [];
    }
    playGame() {
        console.log("play game")
        this.changePlayerTurn();
        this.trackPositions();
        this.trackWhoIsNext();
        this.checkForWin();
        this.checkForDraw();
        this.resetBoard(); 
    }
}