class Ball {
    /*
    x,y: corrdinates
    radius: radius
    dx,dy: velocity
    game: Game object
    */
    constructor(x, y, radius, dx, dy, game) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.game = game;

        this.w = 2 * radius;
        this.h = 2 * radius;
        this.dx_default = dx;
        this.dy_default = dy;
        this.playerAScores = false;
        this.playerBScores = false;
    }

    // Resets ball position and scoring flags
    reset(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.playerAScores = false;
        this.playerBScores = false;
        this.playerABounces = false;
        this.playerBBounces = false;
    }

    // Performs a game tick
    update() {

        // Bounce on top and bottom walls
        if (this.y < 0) {
            this.dy = this.dy_default;
        }
        else if ((this.y + this.h) > this.game.worldH) {
            this.dy = -this.dy_default;
        }

        // Bounce on left paddle
        if (this.x < (this.game.playerA.x + this.game.playerA.w))
            if (this.y > this.game.playerA.y && this.y < (this.game.playerA.y + this.game.playerA.h)) {
                this.dx = this.dx_default;
                this.playerABounces = true;
                console.log("BOUNCE!");
            }
        // Bounce on right paddle
        if ((this.x + this.w) > this.game.playerB.x) {
            if (this.y > this.game.playerB.y && this.y < (this.game.playerB.y + this.game.playerB.h)) {
                this.dx = -this.dx_default;
                this.playerBBounces = true;
                console.log("BOUNCE!");
            }
        }

        // Check if scores
        if (this.x < 0) {
            //this.dx = this.dx_default
            this.playerBScores = true;
        }
        else if ((this.x + this.w) > this.game.worldW) {
            //this.dx = -this.dx_default;
            this.playerAScores = true;
        }

        // Update ball position
        this.x += this.dx;
        this.y += this.dy;
    }
}