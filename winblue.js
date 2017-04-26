var winStateBlue = {
	preload: function preload(){
			game.load.image('winblue', 'assets/bluewins.png');
	},
	create: function create(){
		game.add.sprite(0,0, 'winblue');
	},
	update: function update(){
	}
}