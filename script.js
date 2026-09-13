let boardContainer = document.querySelector(".board-container");
let boardWidth = 500;
let boardHeight = 500;
boardContainer.style.width = `${boardWidth}px`;
boardContainer.style.height = `${boardHeight}px`;



function buildBoard(height, width){
  while(boardContainer.firstChild){
    boardContainer.removeChild(boardContainer.firstChild);
  }
  for(let x=0; x < height; x++){
    for(let y=0; y < width; y++){
      let currTile = document.createElement("div");
      currTile.style.width = `${boardWidth/width}px`;
      currTile.style.height = `${boardHeight/height}px`;
      boardContainer.appendChild(currTile);
    }
  }
}

buildBoard(5,5);
