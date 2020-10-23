function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var x = setInterval(function () {
    if (gameOver) {
      timer = 0;
    }
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
      endScreen();
      clearInterval(x);
    }
  }, 1000);
}
