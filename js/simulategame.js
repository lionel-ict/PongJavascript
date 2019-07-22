/*
SIMULATE GAME WITHOUT RENDERING GRAPHICS
*/

game = new Game('ai', 'ai');

/*while (true) {
    game.update();
    game.print();
}*/

// GAME LOOP
function gameloop() {
    game.update();
    game.printData();
}

setInterval(gameloop, 5);