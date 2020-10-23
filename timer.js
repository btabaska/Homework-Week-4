function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var x = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (lastQuestionWrong) {
      timer -= 5;
      lastQuestionWrong = false;
    }

    if (--timer < 0) {
      alert("Time is Up! \n Your total score is " + totalScore);
      clearInterval(x);
    }
  }, 1000);
}
