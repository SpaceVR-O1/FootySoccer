var menuCursors;
var menuSpaceKey;

var menuState = {
	preload: function preload() {
		game.load.image('menu', 'assets/menu.JPG');
	},
	create: function create() {
		
		game.add.sprite(0,0, 'menu');

		//set spacebar key
		menuCursors = game.input.keyboard.createCursorKeys();
		menuSpaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function update() {
		
		//if spcaebar is pressed go to gamestate
		if (menuSpaceKey.isDown) {
			game.state.start("game");
		}
	}
}