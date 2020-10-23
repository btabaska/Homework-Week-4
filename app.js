var questionsObj = data;
shuffle(questionsObj);
var questionCount = 0;
var gameOver = false;
var totalScore = 0;
var totalTime = 60;
var lastQuestionWrong = false;
console.log(questionsObj[0]);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

clearQuestionDiv = () => {
  var div = document.querySelector("#question");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

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
