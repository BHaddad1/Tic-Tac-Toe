class Game {
    constructor() {
        this.player1 = new Player("🐈");
        this.player2 = new Player("🐈‍⬛");
        this.turn = true;
        this.board = [1, 2, 3,
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
        this.defaultBoard = [1, 2, 3,
                            4, 5, 6,
                            7, 8, 9];
    }   
    checkBoard() {
     // empty
     // cat1 
     // cat2
    }
    changeTurn() {
        this.turn = !this.turn;
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
        this.changeTurn();
        this.board = this.defaultBoard;
    }
}