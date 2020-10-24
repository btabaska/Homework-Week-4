//Functions used to generate the questions, choices and answers
questionGenerator = () => {
  //calls the clearoutput to remove all parts of the last question asked
  clearOutputDiv("#question");
  //checks is all 20 questions have been asked
  if (questionCount >= 20) {
    gameOver = true;
    return;
  }
  var questionDiv = document.querySelector("#question");
  var questionH2 = document.createElement("h2");
  questionH2.classList.add("card-title");
  questionH2.classList.add("mb-5");
  var questionH2Text = document.createTextNode(
    questionsObj[questionCount].question
  );
  questionH2.appendChild(questionH2Text);
  questionDiv.appendChild(questionH2);
  //runs a foreach loop that starts the choices generator on the question choices
  questionsObj[questionCount].choices.forEach(choicesGenerator);
};

choicesGenerator = (item, index) => {
  var questionDiv = document.querySelector("#question");
  var choiceButton = document.createElement("button");
  choiceButton.classList.add("btn");
  choiceButton.classList.add("btn-primary");
  choiceButton.classList.add("mb-3");
  var choiceButtonText = document.createTextNode(item);
  choiceButton.appendChild(choiceButtonText);
  //creates the event listener for the choices, checks to see if the choice that is picked matches the answer
  choiceButton.addEventListener("click", () => {
    if (choiceButton.textContent == questionsObj[questionCount].answer) {
      answerGenerator("Correct!", "text-success");
      totalScore += 5;
    } else {
      answerGenerator("Incorrect!", "text-danger");
      //setting lastQuestionWrong to true sets a flag that the timer listens for and deducts from the overall time allowed
      lastQuestionWrong = true;
    }
    //increments the question list to the next question in line
    questionCount += 1;
    //runs the question generator again
    questionGenerator();
  });
  questionDiv.appendChild(choiceButton);
};

//This is used to show if the correct answer was chosen
function answerGenerator(answer, color) {
  clearOutputDiv("#answer");
  var answerDiv = document.querySelector("#answer");
  var answerH3 = document.createElement("h3");
  answerH3.classList.add(color);
  var answerH3Text = document.createTextNode(answer);
  answerH3.appendChild(answerH3Text);
  answerDiv.appendChild(answerH3);
}

//this is used to delete all childs from inside of a div to return it to blank so something else can be rendered.
clearOutputDiv = (selector) => {
  var div = document.querySelector(selector);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};
