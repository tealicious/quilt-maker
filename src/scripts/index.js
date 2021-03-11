const gridCount = 4;
let smallBlockSize
if (window.innerWidth > window.innerHeight) {
  smallBlockSize = window.innerHeight / gridCount
} else {
  smallBlockSize = window.innerWidth / gridCount;
}
const colorA = 255;
const colorB = 122;

//BLANK or 0 TRIANGLE COMBO
function drawSquare(x, y, dim) {
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
  triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
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
  triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
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
  triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
}

function drawRightTop(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
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
  triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
}

function drawSteepleBottom(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y + dim, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
}

function drawSteepleTop(x, y, dim) {
  fill(colorA);
  drawSquare(x, y, dim)
  fill(colorB);
  triangle(x, y, x + dim / 2, y + dim / 2, x + dim, y);
  triangle(x + dim, y, x + dim / 2, y + dim / 2, x + dim, y + dim);
  triangle(x, y, x + dim / 2, y + dim / 2, x, y + dim);
}

// 4 TRIANGLE COMBO
function drawFullSquare(x, y, dim) {
  fill(colorB);
  rect(x, y, dim, dim);
}

const squareSet = [
  drawFullSquare,
  drawFullSquare,
  drawFullSquare,
  drawFullSquare
]


function createLargeBlock(callbackFunctionArray, smallBlockSize, corner) {

  let cornerPosX
  if (corner % 2 === 0) {
    cornerPosX = 2 * smallBlockSize
  } else {
    cornerPosX = 0;
  }

  let cornerPosY
  if (corner < 3) {
    cornerPosY = 0;
  } else {
    cornerPosY = 2 * smallBlockSize;
    console.log(smallBlockSize)
  }


  // clockwise circular order 
  const positionSet = [
    [cornerPosX, cornerPosY, smallBlockSize], // top left
    [cornerPosX + smallBlockSize, cornerPosY, smallBlockSize], // top right
    [cornerPosX + smallBlockSize, cornerPosY + smallBlockSize, smallBlockSize],  // bottom right corner
    [cornerPosX, cornerPosY + smallBlockSize, smallBlockSize], // bottom left
  ];


  for (let i = 0; i < 4; i++) {
    callbackFunctionArray[i](positionSet[i][0], positionSet[i][1], positionSet[i][2])
  }

}

const shapesToDraw = [
  drawSteepleTop,
  drawSteepleLeft,
  drawLeftTop,
  drawSteepleTop
]

function createFourCorner() {
  for (let i = 0; i < 4; i++) {
    createLargeBlock(shapesToDraw, smallBlockSize, i + 1);
  }
}

setup = () => {
  createCanvas(gridCount * smallBlockSize, gridCount * smallBlockSize);
  background(0);
  noStroke(0);


  createFourCorner();
};
