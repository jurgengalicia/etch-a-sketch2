let boardContainer = document.querySelector(".board-container");


function buildBoard(length, width){
  while(boardContainer.firstChild){
    boardContainer.removeChild(boardContainer.firstChild);
  }
  for(let x=0; x <= length; x++){
    for(let y=0; y <= width; y++){
      let currTile = document.createElement("div");
      
      boardContainer.appendChild(currTile);
    }
  }
}

buildBoard(5,5);