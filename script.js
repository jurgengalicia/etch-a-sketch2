let boardContainer = document.querySelector(".board-container");
let borderButton = document.querySelector("#border-button");
let slider = document.querySelector(".slider");
let boardWidth = 600;
let boardHeight = 600;
boardContainer.style.width = `${boardWidth}px`;
boardContainer.style.height = `${boardHeight}px`;

borderButton.addEventListener('click', e =>{
  let eachCell = document.querySelectorAll(".board-container div");
  eachCell.forEach(x =>{
    x.classList.contains("board-borders") ? x.classList.remove("board-borders") : x.classList.add("board-borders");
  })
})

slider.addEventListener('input', e =>{
  let sliderValue = e.target.value
  console.log(sliderValue)
  buildBoard(sliderValue,sliderValue)
})



function buildBoard(height, width){
  while(boardContainer.firstChild){
    boardContainer.removeChild(boardContainer.firstChild);
  }
  for(let x=0; x < height; x++){
    for(let y=0; y < width; y++){
      let currTile = document.createElement("div");
      currTile.style.width = `${boardWidth/width}px`;
      currTile.style.height = `${boardHeight/height}px`;
      currTile.addEventListener('mouseover', e =>{
        e.target.style.backgroundColor = "black"
      })
      boardContainer.appendChild(currTile);
    }
  }
}

buildBoard(16,16);
