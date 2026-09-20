let boardContainer = document.querySelector(".board-container");
let borderButton = document.querySelector("#border-button");
let changeResoButton = document.querySelector(".resolution");
let slider = document.querySelector(".slider");
let resoInfo = document.querySelector(".reso-info");

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

changeResoButton.addEventListener('click', e =>{
  let resolutionSize = Number(prompt("please enter your desired grid size  (x by x squares, 12 - 100):","12"));
  if(isNaN(resolutionSize) || resolutionSize < 12 || resolutionSize > 100){
    alert("please enter a number between 12 and 100")
  } else {
    buildBoard(resolutionSize,resolutionSize)
    resoInfo.textContent = `border size:${resolutionSize}`;
  }
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
