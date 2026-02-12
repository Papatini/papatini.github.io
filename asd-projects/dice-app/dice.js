$(document).ready(function () {
  // Your code goes here

  function makeDot(top, left, elementID) {
    $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementID);
  }
  function rollDie(dieID) {
    $(dieID).empty();
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
  makeDot(42.5, 42.5, dieID); // middle middle
} else if (randomNum === 2) {
  makeDot(17.5, 17.5, dieID); // top left
  makeDot(67.5, 67.5, dieID); // bottom right
} else if (randomNum === 3) {
  makeDot(17.5, 17.5, dieID); // top left
  makeDot(67.5, 67.5, dieID); // bottom right
  makeDot(42.5, 42.5, dieID); // middle middle
} else if (randomNum === 4) {
  makeDot(67.5, 67.5, dieID); // bottom right
  makeDot(17.5, 17.5, dieID); // top left
  makeDot(17.5, 67.5, dieID); // bottom left
  makeDot(67.5, 17.5, dieID); // top right
} else if (randomNum === 5) {
  makeDot(42.5, 42.5, dieID); // middle middle
  makeDot(67.5, 67.5, dieID); // bottom right
  makeDot(17.5, 17.5, dieID); // top left
  makeDot(17.5, 67.5, dieID); // bottom left
  makeDot(67.5, 17.5, dieID); // top right
} else if (randomNum === 6) {
  makeDot(42.5, 17.5, dieID); // middle left
  makeDot(42.5, 67.5, dieID); // middle right
  makeDot(67.5, 67.5, dieID); // bottom right
  makeDot(17.5, 17.5, dieID); // top left
  makeDot(17.5, 67.5, dieID); // bottom left
  makeDot(67.5, 17.5, dieID); // top right
}
    
  }
  function handleClick() {
    rollDie("#die")
  }
  $("#die").on("click", handleClick);
});

