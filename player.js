class Player {
    constructor(token) {
        this.token = token;
        this.wins = 0;
    }
    increaseWins() {
        this.wins += 1;
    }
}