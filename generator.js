questionGenerator = () => {
  clearQuestionDiv();
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
      alert("You're Right! + 5 Points!");
      totalScore += 5;
    } else {
      alert("You're Wrong! No Points and you lose 5 seconds!");
      lastQuestionWrong = true;
    }
    questionCount += 1;
    questionGenerator();
  });
  questionDiv.appendChild(choiceButton);
};
