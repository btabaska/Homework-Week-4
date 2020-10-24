var homeButton = document.querySelector("#homepage");
homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  localStorage.clear();
  clearOutputDiv("#main");
});
