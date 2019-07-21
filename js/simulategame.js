/*
SIMULATE GAME WITHOUT RENDERING GRAPHICS
INTENDED FOR SIMULATIONS WITH NODE.JS 
*/

game = new Game('ai', 'human');

/*while (true) {
    game.update();
    game.print();
}*/

// GAME LOOP
function gameloop() {
    game.update();
    game.printData();
}

//while (true) gameloop();

// RUN gameloop() every 10 ms
setInterval(gameloop, 2);