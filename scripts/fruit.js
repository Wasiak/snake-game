var fruit = {
	position: null,
	fruitPosition : function () {			// function creating new fruit
		console.log('wylosowalem owoca');
		this.position = document.getElementById((Math.floor(Math.random()*Config.cellsY)+1) + '-' + (Math.floor(Math.random()*Config.cellsX)+1));		//creating fruit in random position
		if (this.position.classList.contains('active')) {
			this.fruitPosition();					//if drowed position is part of a snake draw again
		}
	},
	draw : function() {
		console.log('rysuje owoca');
		this.position.classList.add('fruit');
	},
	destroy: function() {
		if (this.position) {
			this.position.classList.remove('fruit');
			this.position = null;	
		}
	}
}
