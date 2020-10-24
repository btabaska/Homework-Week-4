//Event listener for the home button
var homeButton = document.querySelector("#homepage");
homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
//event listener for the reset scores button
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  localStorage.clear();
  clearOutputDiv("#main");
});
