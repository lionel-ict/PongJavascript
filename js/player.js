class Player {

    /*
    type: player type (human or ai)
    x,y: paddle coordinates
    w,h: paddle widtch and height
    dy: paddle velocity when moved
    game: Game object
    */
    constructor(type, x, y, w, h, dy, game) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dy = dy;
        this.game = game;
        this.nextMove = 0; // 0: stop // +1: go down // -1: go up
    }

    // Next move will be up
    goUp() {
        this.nextMove = -1;
    }

    // Next move will be down
    goDown() {
        this.nextMove = +1;
    }

    // Calculates next move (depending on typpe of player)
    calculateNextMove() {
        if (this.type == 'ai') {
            if (this.game.ball.y < this.y) {
                this.nextMove = -1;
            }
            else if ((this.game.ball.y + this.game.ball.h) > (this.y + this.h)) {
                this.nextMove = +1;
            }
            else
                this.nextMove = 0;
        }
    }

    // Performs a game tick
    update() {

        this.calculateNextMove();

        if (this.nextMove > 0) {
            this.y += this.dy;
        }
        else if (this.nextMove < 0) {
            this.y -= this.dy;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        else if ((this.y + this.h) > game.worldH) {
            this.y = game.worldH - this.h;
        }
    }
}