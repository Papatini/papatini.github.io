// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#invert").on("click", applyAndRenderInvert);
  $("#vintage").on("click", applyAndRenderVintage);
  $("#reddify").on("click", applyAndRenderReddify);
  $("#purpleify").on("click", applyAndRenderPurpleify);
  $("#grayscale").on("click", applyAndRenderGrayScale);
  $("#decreaseblue").on("click", applyAndRenderDecreaseBlue);
  $("#igbb").on("click", applyAndRenderIGBB);
  $("#sml").on("click", applyAndRenderSmudgeLeft);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////
// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRenderInvert() {
var isConfirmed = confirm("Filter will not be applied to the background, is this okay?")
if (isConfirmed) {
  applyFilterNoBackground(invert)
} else {
  applyFilter(invert)
}
  render($("#display"), image);
}
function applyAndRenderVintage() {
var isConfirmed = confirm("Filter will not be applied to the background, is this okay?")
if (isConfirmed) {
  applyFilterNoBackground(vintage)
} else {
  applyFilter(vintage)
}
  render($("#display"), image);
}
function applyAndRenderReddify() {
var isConfirmed = confirm("Filter will not be applied to the background, is this okay?")
if (isConfirmed) {
  applyFilterNoBackground(reddify)
} else {
  applyFilter(reddify)
}
  render($("#display"), image);
}
function applyAndRenderPurpleify() {
var isConfirmed = confirm("Filter will not be applied to the background, is this okay?")
if (isConfirmed) {
  applyFilterNoBackground(purpleify)
} else {
  applyFilter(purpleify)
}
  render($("#display"), image);
}
function applyAndRenderGrayScale() {
  applyFilter(grayScale)
  render($("#display"), image);
}
function applyAndRenderDecreaseBlue() {
var isConfirmed = confirm("Filter will not be applied to the background, is this okay?")
if (isConfirmed) {
  applyFilterNoBackground(decreaseBlue)
} else {
  applyFilter(decreaseBlue)
}
  render($("#display"), image);
}
function applyAndRenderIGBB() {
var isConfirmed = confirm("Filter will not be applied to the background, is this okay?")
if (isConfirmed) {
  applyFilterNoBackground(increaseGreenByBlue)
} else {
  applyFilter(increaseGreenByBlue)
}
  render($("#display"), image);
}
function applyAndRenderSmudgeLeft() {
  applySmudgeLeft(smudge)
  render($("#display"), image);
}
/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
 for (var i = 0; i < image.length; i++) {
   for (var j = 0; j < image[i].length; j++) {
    var pixel = image[i][j]
    var pixelArray = rgbStringToArray(pixel)
    // This is where I’ll modify the color values later
    filterFunction(pixelArray);
    var updatedPixel = rgbArrayToString(pixelArray)
    image[i][j] = updatedPixel
   }
 }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
   for (var j = 0; j < image[i].length; j++) {
    if (image[i][j] !== backgroundColor) {
      var pixelArray = rgbStringToArray(image[i][j])
      filterFunction(pixelArray)
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel
    }
   }
  }
}

function applySmudgeLeft(filterFunction) {
  for (var i = 0; i < image.length; i++) {
   for (var j = 0; j < image[i].length - 1; j++) {
    var currentPixel = image[i][j]
    var pixelToRight = image[i][j+1]
    var pixelArray = rgbStringToArray(currentPixel)
    var pixelArrayToRight = rgbStringToArray(pixelToRight)
    filterFunction(pixelArray, pixelArrayToRight)
    var updatedPixel = rgbArrayToString(pixelArray)
    image[i][j] = updatedPixel
   }
  }
}
// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
 if (num < 0) {
  return 0
 } else if (num > 255) {
  return 255
 } else {
  return num
 }

}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 200
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
 pixelArray[BLUE] = pixelArray[BLUE] - 50
 pixelArray[BLUE] = keepInBounds(pixelArray[BLUE])
}
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] = pixelArray[GREEN] + pixelArray[BLUE]
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN])
}
function grayScale(pixelArray) {
  pixelArray[RED] = pixelArray[BLUE]
  pixelArray[BLUE] = pixelArray[RED]
  pixelArray[GREEN] = pixelArray[BLUE]
  pixelArray[BLUE] = pixelArray[GREEN]
  pixelArray[RED] = pixelArray[GREEN]
  pixelArray[GREEN] = pixelArray[RED]
}
function purpleify(pixelArray) {
   pixelArray[BLUE] = 200
   pixelArray[RED] = 200
}
function vintage(pixelArray) {
  var average = (pixelArray[RED] + pixelArray[BLUE] + pixelArray[GREEN])/3
  decreaseAmount = average/10
  pixelArray[RED] = pixelArray[RED] - decreaseAmount
  pixelArray[BLUE] = pixelArray[BLUE] - decreaseAmount
  pixelArray[GREEN] = pixelArray[GREEN] - decreaseAmount
  pixelArray[RED] = keepInBounds(pixelArray[RED])
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE])
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN])
  pixelArray[RED] = pixelArray[RED] + 10
  pixelArray[RED] = keepInBounds(pixelArray[RED])
  pixelArray[GREEN] = pixelArray[GREEN] + 10
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN])
}
function invert(pixelArray) {
  pixelArray[RED] = 255 - pixelArray[RED];
  pixelArray[BLUE] = 255 - pixelArray[BLUE];
  pixelArray[GREEN] = 255 - pixelArray[GREEN];
}
function smudge(pixelArray, pixelArrayToSide) {
  var averageRed = (pixelArray[RED] + pixelArrayToSide[RED])/2
  //var redAmount = averageRed*0.9
  pixelArray[RED] = averageRed
  var averageGreen = (pixelArray[GREEN] + pixelArrayToSide[GREEN])/2
  var greenAmount = averageGreen*0.9
  pixelArray[GREEN] = averageGreen
  var averageBlue = (pixelArray[BLUE] + pixelArrayToSide[BLUE])/2
  var blueAmount = averageBlue*0.9
  pixelArray[BLUE] = averageBlue
}
// CHALLENGE code goes below here
