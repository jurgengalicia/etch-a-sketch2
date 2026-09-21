let boardContainer = document.querySelector(".board-container");
let borderButton = document.querySelector("#border-button");
let rainbowButton = document.querySelector("#rainbow-button");
let gradientButton = document.querySelector("#gradient-button");
let changeResoButton = document.querySelector(".resolution");
let slider = document.querySelector(".slider");
let resoInfo = document.querySelector(".reso-info");
let currResolutionSize = 12;
let rainbowToggle = 0;
let gradientToggle = 0;
let currentGradientNum = 0
let gradientList = ["#FFFFFF","#F5F5F5","#EEEEEE","#E0E0E0","#BDBDBD","#9E9E9E","#757575","#616161","#424242","#000000"];

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
    currResolutionSize = resolutionSize;
    buildBoard(resolutionSize,resolutionSize);
    resoInfo.textContent = `border size:${resolutionSize} x ${resolutionSize}`;
  }
})

rainbowButton.addEventListener('click', e =>{
  gradientToggle = 0;
  rainbowToggle == 1 ? rainbowToggle = 0 : rainbowToggle = 1;
})

gradientButton.addEventListener('click', e =>{
  rainbowToggle = 0;
  if(gradientToggle == 1 ){
    gradientToggle = 0;
  } else {
    gradientToggle = 1;
  }
})


function getRandomColor(){
  let hexChars = "0123456789ABCDEF";
  let randColor = "#"
  for(let x = 0; x < 6; x++){
    randColor += hexChars[Math.floor(Math.random()*16)];
  }
  return randColor;
}

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
        if(rainbowToggle == 1){
          e.target.style.backgroundColor = getRandomColor();
        } else if (gradientToggle == 1){
          e.target.style.backgroundColor = gradientList[currentGradientNum];
          currentGradientNum = currentGradientNum == 9 ? 0 : currentGradientNum+1;
        } else {
          e.target.style.backgroundColor = "black";
        }
        
      })
      boardContainer.appendChild(currTile);
    }
  }
}

buildBoard(16,16);
