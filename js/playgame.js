/*
PLAY GAME RENDERING GRAPHICS IN BROWSER
DEFAULT IS 'AI' VS 'HUMAN'
*/

canvas = document.getElementById("GameCanvas");

game = new Game('ai', 'human');
render = new Render(game, canvas);

// Keyboard press listener and handler
document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
    //game.keyPressed(e.keyCode);
    var key = e.keyCode;

    if (key == 65 && game.playerA.type == 'human') { // A PRESSED
        game.playerA.goUp();
    }
    else if (key == 90 && game.playerA.type == 'human') { // Z PRESSED
        game.playerA.goDown();
    }
    else if (key == 38 && game.playerB.type == 'human') { // UP PRESSED
        game.playerB.goUp();
    }
    else if (key == 40 && game.playerB.type == 'human') { // DOWN PRESSED
        game.playerB.goDown();
    }
}

// GAME LOOP
function gameloop() {
    game.update();
    //game.printHuman();
    render.draw();
}

// RUN gameloop() every 10 ms
setInterval(gameloop, 10);