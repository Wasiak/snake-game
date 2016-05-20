var snake = {
  snakePosition : ['10-3', '10-4', '10-5', '10-6'],	//creating an array with start snake position
  draw: function() {
      for (var i = 0; i < this.snakePosition.length; i++) {
        document.getElementById(this.snakePosition[i]).classList.add('active');		//giving an clss ' active' every snake part
      }
    },
  direction : 'right',
  getSnakeTail: null,
  newSnakePosition : false,
  score: 0,
  move: function() {
      //main.directionChangeAllowed = true;
      var divide =  this.snakePosition[this.snakePosition.length-1].split('-');			//dividing from ID number of row and column
      var newRow = parseInt(divide[0], 10);									//newRow is integer number of row
      var newCol = parseInt(divide[1], 10);									//newCol is integer number of column
      if (this.direction === 'up') {
        newRow--;						//if going up next step is in upper row
      }
      else if (this.direction ==='down'){
        newRow++;						//if going down next step is in lower row
      }
      if (this.direction === 'up' || this.direction === 'down'){
        this.newSnakePosition = document.getElementById(newRow + '-' + divide[1]);		//if going vertical row is changing, column is constatn
        this.snakePosition.push(newRow + '-' + divide[1]);									//add to array of snake position new position of 'snake head' in the end of an array
      }
      if (this.direction === 'left'){
        newCol--;						//if going left next step is in column with lower number
      }
      else if (this.direction === 'right'){
        newCol++;						//if going right next step is in column with upper number
      }
      if (this.direction === 'left' || this.direction === 'right') {
        this.newSnakePosition = document.getElementById(divide[0] + '-' + newCol);		//if going horizontal row is constant, column is changing
        this.snakePosition.push(divide[0] + '-' + newCol);									//add to array of snake position new position of ' snake head' in the end of an array
      }

      this.getSnakeTail = this.snakePosition.shift();
  },
  eat: function(){
    if (this.newSnakePosition.classList.contains('fruit')) {
      this.snakePosition.unshift(this.snakeTail);
      this.score++;
      fruit.position.classList.remove('fruit');
      fruit.fruitPosition();
      fruit.draw();
      console.log(this.score);
      //licznik.innerHTML= this.score;
    }
  },
  checkCollision: function(){
    // console.log('1', this.newSnakePosition === null);
    // console.log('2', this.newSnakePosition.classList.contains('active'));
    if (!this.newSnakePosition || this.newSnakePosition.classList.contains('active')) {			//stop the loop if snak hit his body or border
      game.stop();
      alert('przegrałes');
    }
  }
}
