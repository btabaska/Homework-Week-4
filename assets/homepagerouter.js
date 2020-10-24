//Event listener to start the game, also resets all the values to their default state
var startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  var oneMinute = totalTime,
    display = document.querySelector("#time");
  startTimer(oneMinute, display);
  gameOver = false;
  totalScore = 0;
  questionCount = 0;
  questionGenerator();
});

//event listener to route to the high scores page.
var highScoreButton = document.querySelector("#high-scores");
highScoreButton.addEventListener("click", () => {
  window.location.href = "highscores.html";
});
