//Set up default values for variables used
var questionsObj = data;
shuffle(questionsObj);
var questionCount = 0;
var gameOver = false;
var totalScore = 0;
var totalTime = 120;
var lastQuestionWrong = false;
console.log(questionsObj[0]);

//used to shuffle the questions every time they are asked.
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//Creates the HTML for the end screen using Bootstrap classes to get automatic styling
endScreen = () => {
  clearOutputDiv("#question");
  clearOutputDiv("#answer");
  var questionDiv = document.querySelector("#question");
  var endScreenCard = document.createElement("div");
  endScreenCard.setAttribute("class", "card");
  endScreenCard.setAttribute("style", "width: 18rem;");
  var endScreenCardDiv = document.createElement("div");
  endScreenCard.setAttribute("class", "card-body");
  var endScreenCardTitle = document.createElement("h3");
  endScreenCardTitle.setAttribute("class", "card-title");
  var endScreenCardTitleText = document.createTextNode("Game Over!");
  endScreenCardTitle.appendChild(endScreenCardTitleText);
  var endScreenCardH5 = document.createElement("h5");
  var endScreenCardParagraph = document.createElement("p");
  endScreenCardH5.setAttribute("class", "card-text");
  var endScreenCardH5Text = document.createTextNode(
    "Your Score is\n\n" + totalScore
  );
  var endScreenCardH5Text2 = document.createTextNode(
    "\n\n Submit your username to save your score on our leaderboards!"
  );
  var endScreenForm = document.createElement("form");
  var endScreenFormDiv = document.createElement("div");
  endScreenFormDiv.setAttribute("class", "form-group");
  var endScreenFormDivInput = document.createElement("input");
  endScreenFormDivInput.setAttribute("type", "text");
  endScreenFormDivInput.setAttribute("class", "form-control");
  endScreenFormDivInput.setAttribute("id", "inputText");
  endScreenFormDivInput.setAttribute("placeholder", "Username");
  endScreenFormDiv.appendChild(endScreenFormDivInput);
  var endScreenFormSubmit = document.createElement("button");
  var endScreenFormSubmitText = document.createTextNode("Submit");
  endScreenFormSubmit.setAttribute("type", "submit");
  endScreenFormSubmit.setAttribute("class", "btn btn-primary");
  endScreenFormSubmit.setAttribute("id", "scoreSubmitButton");
  endScreenFormSubmit.appendChild(endScreenFormSubmitText);
  endScreenForm.appendChild(endScreenFormDiv);
  endScreenForm.appendChild(endScreenFormSubmit);
  endScreenCardH5.appendChild(endScreenCardH5Text);
  endScreenCardParagraph.appendChild(endScreenCardH5Text2);
  endScreenCardDiv.appendChild(endScreenCardTitle);
  endScreenCardDiv.appendChild(endScreenCardH5);
  endScreenCardDiv.appendChild(endScreenCardParagraph);
  endScreenCardDiv.appendChild(endScreenForm);
  endScreenCard.appendChild(endScreenCardDiv);
  questionDiv.appendChild(endScreenCard);
  //Sets up the event listener for the score button to submit
  var submitScore = document.querySelector("#scoreSubmitButton");
  submitScore.addEventListener("click", () => {
    var usernameInputValue = document.querySelector("#inputText");
    localStorage.setItem(usernameInputValue.value, totalScore);
  });
};
