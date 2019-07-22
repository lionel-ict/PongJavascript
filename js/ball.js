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

        this.x_init = x;
        this.y_init = y;
        this.w = 2 * radius;
        this.h = 2 * radius;
        this.dx_init = dx;
        this.dy_init = dy;
        this.playerAScored = false;
        this.playerBScored = false;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setVelocity(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    setRandomVelocity() {
        // DX
        this.dx = this.dx_init;
        if (Math.random() < 0.5) {
            this.dx = -this.dx;
        }
        // DY
        this.dy = this.dy_init; //Math.ceil(2 * this.dy_init * Math.random) - this.dy_init;
        if (Math.random() < 0.5) {
            this.dy = -this.dy;
        }
    }

    resetFlags() {
        this.playerAScored = false;
        this.playerBScored = false;
        this.playerABounced = false;
        this.playerBBounced = false;
    }

    // Resets ball position and scoring flags
    reset() {
        this.setPosition(this.x_init, this.y_init);
        this.setRandomVelocity();
        this.resetFlags();
    }

    // Performs a game tick
    update() {

        // Bounce on top and bottom walls
        if (this.y < 0 && this.dy < 0) {
            this.dy = -this.dy;
        }
        else if (this.y > this.game.worldH && this.dy > 0) {
            this.dy = -this.dy;
        }

        // Bounce on left paddle
        if (this.x < (this.game.playerA.x + this.game.playerA.w)) {
            //if (this.x < this.game.playerA.x) {
            if (this.y > this.game.playerA.y && this.y < (this.game.playerA.y + this.game.playerA.h)) {
                this.dx = -this.dx;
                this.playerABounced = true;
            }
        }
        // Bounce on right paddle
        if ((this.x + this.w * 0.3) > this.game.playerB.x) {
            //if (this.x > this.game.playerB.x) {
            if (this.y > this.game.playerB.y && this.y < (this.game.playerB.y + this.game.playerB.h)) {
                this.dx = -this.dx;
                this.playerBBounced = true;
            }
        }

        // Check if scores
        if ((this.x + this.w) < 0) {
            //this.dx = this.dx_default
            this.playerBScored = true;
        }
        else if (this.x > this.game.worldW) {
            //this.dx = -this.dx_default;
            this.playerAScored = true;
        }

        // Update ball position
        this.x += this.dx;
        this.y += this.dy;
    }
}