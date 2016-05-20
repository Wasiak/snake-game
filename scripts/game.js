console.log('no hej');
var game = {
  interval: null,
  start: function(){
      this.interval = setInterval(function(){
      directionChangeAllowed = true;
      licznik.innerHTML= snake.score;
      snake.move();
      snake.checkCollision();
      board.clear();
      snake.draw();
      snake.eat();
    }.bind(snake), 200);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  reset: function() {
      snake.score = 0;
      snake.snakePosition = ['10-3', '10-4', '10-5', '10-6'];
      snake.direction = 'right';
      this.start();
      fruit.destroy();
      fruit.fruitPosition();
      fruit.draw();
  }
}
