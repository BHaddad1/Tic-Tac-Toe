class Player {
    constructor(token, id) {
        this.token = token;
        this.wins = 0;
        this.currentPositions = [];
        this.id = id;
        this.position = null;
        this.didWin = false;
    }
    increaseWins() {
        this.wins += 1;
        this.didWin = true;

    }
}