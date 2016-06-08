var licznik = document.createElement('div');	//create a screen with score
licznik.classList.add('licznik');
document.body.appendChild(licznik);				//add score screen as a child of body


board.draw();
snake.draw();
snake.move();
// fruit.fruitPosition();
// fruit.draw();
snake.eat();
var directionChangeAllowed = true;
window.onkeydown = function(e) {			//controlling by keyboard
	if (directionChangeAllowed) {			//check if changing direction is possible
		var kod = e.keyCode;				//kod is key code of e function
		console.log(kod);
		if (kod === 38) {					// up arrow
			if (snake.direction !==  'down') {	//when is going down changing direction to up is forbiden and function do nothing
				snake.direction = "up";
			}							//direction is different than down and changing direction to up
		}
		else if (kod === 40) {				//down arrow
			if (snake.direction !== 'up') {		//when is going up changing direction to down is forbiden and function do nothing

				snake.direction = 'down';
			}							//direction is different than up and changing direction to down
		}
		else if (kod === 37) {				//left arrow
			if (snake.direction !== 'right') {	//when is going right changing direction to left is forbiden and function do nothing

				snake.direction = 'left';
			}							//direction is different than right and changing direction to left
		}
		else if (kod === 39) {				//right arrow
			if (snake.direction !== 'left') {		//when is going left changing direction to right is forbiden and function do nothing

				snake.direction = 'right';
			}							//direction is different than left and changing direction to right
		}
		directionChangeAllowed = false;
	}
}

var startButton = document.createElement('div');
startButton.classList.add('button');
document.body.appendChild(startButton);
startButton.innerHTML = 'START';
startButton.onclick = game.reset.bind(game);
