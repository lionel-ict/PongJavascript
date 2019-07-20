class Game {
    /*
    player types: human, ai
    */
    constructor(playerA_type, playerB_type) {
        this.playerA_type = playerA_type;
        this.playerB_type = playerB_type;

        //this.state = 0; // 0: initialized // 1: playing // 2: ended
        this.worldW = 800;
        this.worldH = 600;
        this.scoreA = 0;
        this.scoreB = 0;
        this.ticks = 0;

        this.ballX_init = this.worldW / 2;
        this.ballY_init = this.worldH / 2;
        this.ballDX_init = 5;
        this.ballDY_init = 5;

        this.ball = new Ball(this.ballX_init, this.ballY_init, 15, this.ballDX_init, this.ballDY_init, this);
        this.playerA = new Player(this.playerA_type, 10, this.worldH / 2, 25, 70, 10, this);
        this.playerB = new Player(this.playerB_type, this.worldW - 35, this.worldH / 2, 25, 70, 10, this);
    }

    /*
    setBall(ball) {
        this.ball = ball;
    }

    setPlayerA(playerA) {
        this.playerA = playerA;
    }

    setPlayerB(playerB) {
        this.playerB = playerB;
    }
    */

    /*
    keyPressed(e) {
        var key = e.keyCode;

        // A PRESSED
        if (key == 65 && this.playerA.type == 'human') {
            this.playerA.goUp();
        }
        // Z PRESSED
        else if (key == 90 && this.playerA.type == 'human') {
            this.playerA.goDown();
        }
        // UP PRESSED
        else if (key == 38 && this.playerB.type == 'human') {
            this.playerB.goUp();
        }
        // DOWN PRESSED
        else if (key == 40 && this.playerB.type == 'human') {
            this.playerB.goDown();
        }

        //console.log('key pressed: ' + key)
    }
    */

    // Perform a game tick
    update() {

        this.ticks++;

        this.ball.update();
        this.playerA.update();
        this.playerB.update();

        // If a player scored, update scores and reset ball
        if (this.ball.playerAScores) {
            this.scoreA++;
            this.ball.reset(this.ballX_init, this.ballY_init, -this.ballDX_init, this.ballDY_init);
        }
        else if (this.ball.playerBScores) {
            this.scoreB++;
            this.ball.reset(this.ballX_init, this.ballY_init, this.ballDX_init, this.ballDY_init);
        }
    }
}