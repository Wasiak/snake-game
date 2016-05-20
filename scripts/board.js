var board = {
  draw: function() {
    var table = document.createElement("table"); 			//creating table
    document.getElementById('app').appendChild(table);								//add table as a child of game
    for (var w=1; w <= Config.cellsY; w++) {    		//creating rows "w" amount=  cellsY=20
      var tr = document.createElement("tr");    		//creating row
      table.appendChild(tr);							//add tr as a child of table
      for (var k=1; k <= Config.cellsX; k++) {		//create columns in every row, amount =  cellsY = 30
        var td = document.createElement("td");		//creating column td
        td.id = (w + "-" + k);						//giving ID as a number of row and column
        td.style.width = Config.cellSize;
        td.style.height = Config.cellSize;
        tr.appendChild(td);							//add td as a child of tr
        // if (Math.floor(Math.random()*2) === 1) {
        //   td.classList.add('active');
        // }
      }
    }
  },
  clear: function() {
    var activeFields = document.getElementsByClassName('active');
    while (activeFields.length) {
      activeFields[0].classList.remove('active');
    }
  }
}
