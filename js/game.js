class Game {
    /*
    player types: human, ai
    */
    constructor(typeA, typeB) {
        this.typeA = typeA;
        this.typeB = typeB;
        this.scoreA = 0;
        this.scoreB = 0;
        this.bouncesA = 0;
        this.bouncesB = 0;

        this.ticks = 0;

        //this.state = 0; // 0: initialized // 1: playing // 2: ended
        this.worldW = 800;
        this.worldH = 600;

        this.ballX_init = this.worldW / 2;
        this.ballY_init = this.worldH / 2;
        this.ballDX_init = 5;
        this.ballDY_init = 5;

        this.ball = new Ball(this.ballX_init, this.ballY_init, 15, this.ballDX_init, this.ballDY_init, this);
        this.playerA = new Player(this.typeA, 10, this.worldH / 2, 25, 70, 10, this);
        this.playerB = new Player(this.typeB, this.worldW - 35, this.worldH / 2, 25, 70, 10, this);
    }

    // Prints human-readable status of current game
    printHuman() {
        var txt = "#Ticks:" + this.ticks;
        txt += " #Scores:" + this.scoreA + "-" + this.scoreB;
        txt += " #Bounces:" + this.bouncesA + "-" + this.bouncesB;
        //txt += " #PlayerA:" + this.playerA.y;
        //txt += " #PlayerB:" + this.playerB.y;
        //txt += " #Ball:(" + this.ball.x + "," + this.ball.y + ")(" + this.ball.dx + "," + this.ball.dy + ")";
        console.log(txt);
    }

    // Print corpus-style data of current game
    printData() {
        var txt = this.ticks + " ";
        txt += this.ball.x + " " + this.ball.y + " ";
        txt += this.ball.dx + " " + this.ball.dy + " ";
        txt += this.playerA.x + " " + this.playerA.y + " ";
        txt += this.playerB.x + " " + this.playerB.y + " ";
        txt += this.scoreA + " " + this.scoreB + " ";
        console.log(txt);
    }

    // Perform a game tick
    update() {

        this.ticks++;

        this.ball.update();
        this.playerA.update();
        this.playerB.update();

        // If a player bounced ball, update bounces
        if (this.ball.playerABounces) {
            this.bouncesA++;
            this.ball.playerABounces = false;
        }
        if (this.ball.playerBBounces) {
            this.bouncesB++;
            this.ball.playerBBounces = false;
        }

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