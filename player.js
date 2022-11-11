class Player {
    constructor(token, id) {
        this.token = token;
        this.wins = 0;
        this.currentPositions = [];
        this.id = id;
        this.didWin = false;
    }
    increaseWins() {
        this.wins++;
        this.didWin = true;
    }
}