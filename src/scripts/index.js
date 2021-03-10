const gridCount = 16;
const smallBlockSize = window.innerWidth > window.innerHeight ? window.innerHeight / gridCount :  window.innerWidth / gridCount;
const colorA = 255;
const colorB = 122;

//BLANK or 0 TRIANGLE COMBO
function drawSquare(x, y, dim){
  fill(colorA);
  rect(x, y, dim, dim);
}

// 1 TRIANGLE
function drawLeftTriangle(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
}

function drawRightTriangle(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x+dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
}

function drawBottomTriangle(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
}

function drawTopTriangle(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
}

// 2 TRIANGLE COMBO
function drawBowtie(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
  triangle(x+dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
}

function drawHourGlass(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
}

function drawLeftBottom(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
}

function drawLeftTop(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
}

function drawRightBottom(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x+dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
}

function drawRightTop(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x+dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
}

// 3 TRIANGLE COMBO
function drawSteepleLeft(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
}

function drawSteepleRight(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x+dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
}

function drawSteepleBottom(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x+dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
}

function drawSteepleTop(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
  triangle(x+dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
}

// 4 TRIANGLE COMBO
function drawFullSquare(x, y, dim){
  fill(colorB);
  rect(x, y, dim, dim);
}



function createLargeBlock(smallBlockSize, corner) {
  const cornerPosX = (corner % 2 === 0 ? 2 : 0) * smallBlockSize; 
  const cornerPosY = (corner < 3 ? 0 : 2) * smallBlockSize;
  console.log(cornerPosX, cornerPosY);
  return [
    drawSteepleTop(cornerPosX, cornerPosY, smallBlockSize),
    drawRightBottom(cornerPosX + smallBlockSize, cornerPosY, smallBlockSize),
    drawBottomTriangle(cornerPosX, cornerPosY + smallBlockSize, smallBlockSize),
    drawBowtie(cornerPosX + smallBlockSize, cornerPosY + smallBlockSize, smallBlockSize),
  ];
}

setup = () => {
createCanvas(gridCount*smallBlockSize, gridCount*smallBlockSize);
background(0);
noStroke(0);

createLargeBlock(smallBlockSize, 1);
createLargeBlock(smallBlockSize, 2);
createLargeBlock(smallBlockSize, 3);
createLargeBlock(smallBlockSize, 4);
  // for (let i = 0; i < 4; i ++) {
  //   createLargeBlock(smallBlockSize, i);
  // }
};
