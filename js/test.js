canvas = document.getElementById("GameCanvas");

game = new Game('human', 'human');
render = new Render(game, canvas);

document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
    //game.keyPressed(e.keyCode);
    var key = e.keyCode;

    // A PRESSED
    if (key == 65 && game.playerA.type == 'human') {
        game.playerA.goUp();
    }
    // Z PRESSED
    else if (key == 90 && game.playerA.type == 'human') {
        game.playerA.goDown();
    }
    // UP PRESSED
    else if (key == 38 && game.playerB.type == 'human') {
        game.playerB.goUp();
    }
    // DOWN PRESSED
    else if (key == 40 && game.playerB.type == 'human') {
        game.playerB.goDown();
    }

    //console.log('key pressed: ' + key)
}

function foo() {
    game.update();
    //game.print();
    render.draw();
}

setInterval(foo, 10);