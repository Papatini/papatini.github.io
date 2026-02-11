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
  function rollDie(dieId) {
    var randomNum = Math.ceil(Math.random() * 6);
    
    console.log(randomNum);
    
  }
  function handleClick() {
    rollDie("#die")
  }
  $("#die").on("click", handleClick);
  makeDot(50, 50, "#die"); // middle middle
makeDot(25, 25, "#die"); // top left
makeDot(75, 75, "#die"); // bottom right
});
