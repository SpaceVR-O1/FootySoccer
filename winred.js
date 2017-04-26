var winStateRed = {
	preload: function preload(){
		game.load.image('winred', 'assets/redwins.jpg');
	},
	create: function create(){
		game.add.sprite(0,0, 'winred');
	},
	update: function update(){
	}
}