class Render {

    /*
    game: Game object
    canvas: where the game has to be rendered
    */
    constructor(game, canvas) {
        this.game = game;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    drawPlayers() {
        // Player A
        this.ctx.beginPath();
        this.ctx.rect(this.game.playerA.x, this.game.playerA.y, this.game.playerA.w, this.game.playerA.h);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
        // Player B
        this.ctx.beginPath();
        this.ctx.rect(this.game.playerB.x, this.game.playerB.y, this.game.playerB.w, this.game.playerB.h);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.game.ball.x, this.game.ball.y, this.game.ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawScores() {
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score A: " + this.game.scoreA, canvas.width * 0.1, 20);
        this.ctx.fillText("Score B: " + this.game.scoreB, canvas.width * 0.8, 20);
    }

    drawBounces() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Bounces A: " + this.game.bouncesA, canvas.width * 0.1, 40);
        this.ctx.fillText("Bounces B: " + this.game.bouncesB, canvas.width * 0.8, 40);
    }

    drawTicks() {
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Ticks: " + this.game.ticks, canvas.width * 0.45, 20);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawPlayers();
        this.drawBall();
        this.drawScores();
        this.drawBounces();
        this.drawTicks();
    }
}