// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
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
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilterNoBackground(invert)
  

  // do not change the below line of code
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
  pixelArray[RED] = pixelArray[RED] + 25
  pixelArray[RED] = keepInBounds(pixelArray[RED])
}
function invert(pixelArray) {
  pixelArray[RED] = 255 - pixelArray[RED];
  pixelArray[BLUE] = 255 - pixelArray[BLUE];
  pixelArray[GREEN] = 255 - pixelArray[GREEN];
}
// CHALLENGE code goes below here
