var instructState = {
	preload: function preload(){

	},
	create: function create(){
		text1 = game.add.text(10, 10, "Instructions ", { fontSize: '32px', fill: '#FFF' });
		text2 = game.add.text(10, 55, "Controls:", { fontSize: '32px', fill: '#FFF' });
		text3 = game.add.text(10, 80, "Press WASD to control player BLUE ", { fontSize: '32px', fill: '#FFF' });
		text4 = game.add.text(10, 105, "Press arrow keys to control player RED ", { fontSize: '32px', fill: '#FFF' });
	},
	update: function update(){

	}
}