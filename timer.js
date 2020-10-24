//This is the timer that keeps track of the current game length.
function startTimer(duration, display) {
  //sets up the timer object
  var timer = duration,
    minutes,
    seconds;
  var x = setInterval(function () {
    //checks if gameover is true, all questions have been answered. sets timer to 0
    if (gameOver) {
      timer = 0;
    }
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    //Displays the current time to the screen
    display.textContent = minutes + ":" + seconds;
    //if last question is wrong, it will deduct 10 seconds from the timer and reset that flag
    if (lastQuestionWrong) {
      timer -= 10;
      lastQuestionWrong = false;
    }
    //deincrements the timer then checks if timer is less than 0 it will display the end screen, and clear the timer.
    if (--timer < 0) {
      endScreen();
      clearInterval(x);
    }
    //loop runs every 1000ms
  }, 1000);
}
