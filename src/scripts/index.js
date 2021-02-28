const gridCount = 16;
const smallBlockSize = window.innerWidth > window.innerHeight ? window.innerHeight / gridCount :  window.innerWidth / gridCount;
const colorA = 255;
const colorB = 122;

function drawSquare(x, y, dim){
  fill(colorA);
  rect(x, y, dim, dim);
}

function drawVertical(x, y, dim){
  fill(colorA);
  rect(x, y, dim/2, dim);
  fill(colorB);
  rect(x+dim/2, y, dim/2, dim);
}

function drawHorizontal(x, y, dim){
  fill(colorA);
  rect(x, y, dim, dim/2);
  fill(colorB);
  rect(x, y+dim/2, dim, dim/2);
}

function drawDiagonalLeft(x, y, dim){
  fill(colorA);
  triangle(x, y, x+dim, y, x, y+dim);
  fill(colorB);
  triangle(x, y+dim, x+dim, y+dim, x+dim, y);
}

// Single Diagonal Blocks
function drawDiagonalRight(x, y, dim){
  fill(colorA);
  triangle(x, y, x+dim, y, x+dim, y+dim);
  fill(colorB);
  triangle(x, y, x, y+dim, x+dim, y+dim);
}


// Double Straight Block
function drawBothStraight(x, y, dim){
  fill(colorA);
  rect(x, y, dim/2, dim/2);
  rect(x+dim/2, y+dim/2, dim/2, dim/2);
  fill(colorB);
  rect(x+dim/2, y, dim/2, dim/2);
  rect(x, y+dim/2, dim/2, dim/2); 
}

// Double Diagonal Straight Block
function drawBothDiagonal(x, y, dim){
  fill(colorA);
  triangle(x, y, x+dim, y, x+(dim/2), y+(dim/2));   
  triangle(x, y+dim, x+dim/2, y+dim/2, x+dim, y+dim);
  fill(colorB);
  triangle(x, y, x+dim/2, y+dim/2, x, y+dim);
  triangle(x+dim, y, x+dim/2, y+dim/2, x+dim, y+dim);
}

function createLargeBlock(smallBlockSize, corner) {
  const cornerPosX = (corner % 2 === 0 ? 2 : 0) * smallBlockSize; 
  const cornerPosY = (corner < 3 ? 0 : 2) * smallBlockSize;
  console.log(cornerPosX, cornerPosY);
  return [
    drawSquare(cornerPosX, cornerPosY, smallBlockSize),
    drawHorizontal(cornerPosX + smallBlockSize, cornerPosY, smallBlockSize),
    drawSquare(cornerPosX, cornerPosY + smallBlockSize, smallBlockSize),
    drawDiagonalRight(cornerPosX + smallBlockSize, cornerPosY + smallBlockSize, smallBlockSize),
  ];
}

setup = () => {
createCanvas(gridCount*smallBlockSize, gridCount*smallBlockSize);
background(0);
noStroke();

createLargeBlock(smallBlockSize, 1);
createLargeBlock(smallBlockSize, 2);
createLargeBlock(smallBlockSize, 3);
createLargeBlock(smallBlockSize, 4);
  // for (let i = 0; i < 4; i ++) {
  //   createLargeBlock(smallBlockSize, i);
  // }
};
