var game = new Phaser.Game(1400, 600, Phaser.AUTO, '');

game.state.add("game", gameState);
game.state.add("menu", menuState);
game.state.add("winblue", winStateBlue);
game.state.add("winred", winStateRed);

game.state.start("menu");