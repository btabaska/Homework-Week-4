questionGenerator = () => {
  clearOutputDiv("#question");
  if (questionCount >= 20) {
    gameOver = true;
    return;
  }
  var questionDiv = document.querySelector("#question");
  console.log(questionDiv);
  var questionH2 = document.createElement("h2");
  questionH2.classList.add("card-title");
  questionH2.classList.add("mb-5");
  var questionH2Text = document.createTextNode(
    questionsObj[questionCount].question
  );
  questionH2.appendChild(questionH2Text);
  questionDiv.appendChild(questionH2);
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
  choiceButton.addEventListener("click", () => {
    if (choiceButton.textContent == questionsObj[questionCount].answer) {
      answerGenerator("Correct!", "text-success");
      totalScore += 5;
    } else {
      answerGenerator("Incorrect!", "text-danger");
      lastQuestionWrong = true;
    }
    questionCount += 1;
    questionGenerator();
  });
  questionDiv.appendChild(choiceButton);
};

function answerGenerator(answer, color) {
  clearOutputDiv("#answer");
  var answerDiv = document.querySelector("#answer");
  var answerH3 = document.createElement("h3");
  answerH3.classList.add(color);
  var answerH3Text = document.createTextNode(answer);
  answerH3.appendChild(answerH3Text);
  answerDiv.appendChild(answerH3);
}

clearOutputDiv = (selector) => {
  var div = document.querySelector(selector);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};
